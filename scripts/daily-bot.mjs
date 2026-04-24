#!/usr/bin/env node
/**
 * Daily Content Bot — reads today's SEO insights, picks best article to promote,
 * drafts LinkedIn/Twitter/Quora posts, optionally auto-posts to Medium/Dev.to/HashNode.
 *
 * Output: state/drafts/drafts-YYYY-MM-DD.md
 */
import fs from "node:fs/promises";
import path from "node:path";

const today = new Date().toISOString().slice(0, 10);
const INSIGHTS_FILE = path.resolve(`state/seo-insights/insights-${today}.json`);
const DRAFTS_DIR = path.resolve("state/drafts");

// --- Blog article catalog (kept in sync with public/blog/) ---
const articles = [
  {
    slug: "website-cost-saudi-arabia",
    title: "كم تكلفة تصميم موقع إلكتروني في السعودية؟ (دليل 2026)",
    tags: ["تكلفة موقع", "تصميم موقع", "موقع إلكتروني", "السعودية"],
    keywords: ["تكلفة موقع", "سعر تصميم موقع", "تصميم موقع الرياض"],
    snippet: "دليل شامل لأسعار تصميم المواقع في السعودية: العوامل المؤثرة، أنواع المواقع، جدول أسعار مفصّل.",
  },
  {
    slug: "mobile-app-development-saudi",
    title: "دليل تطوير تطبيق جوال في السعودية — الأنواع والتكاليف والمدة",
    tags: ["تطبيق جوال", "iOS", "Android", "React Native"],
    keywords: ["تكلفة تطبيق", "تطوير تطبيق السعودية", "React Native"],
    snippet: "كل ما تحتاج معرفته قبل بناء تطبيق جوال: iOS، Android، React Native، تكلفة 2026، مدة التطوير.",
  },
  {
    slug: "digital-transformation-vision-2030",
    title: "التحول الرقمي للشركات السعودية ورؤية 2030 — كيف تبدأ؟",
    tags: ["التحول الرقمي", "رؤية 2030", "أتمتة", "ذكاء اصطناعي"],
    keywords: ["التحول الرقمي", "رؤية 2030", "أتمتة الأعمال"],
    snippet: "خارطة طريق عملية للتحول الرقمي: الأتمتة، الذكاء الاصطناعي، السحابة.",
  },
  {
    slug: "best-web-development-companies-saudi-arabia",
    title: "أفضل شركات تطوير المواقع والتطبيقات في السعودية 2026",
    tags: ["شركات تطوير", "وكالات برمجة", "اختيار شركة"],
    keywords: ["أفضل شركات تطوير", "شركة برمجة", "اختيار وكالة"],
    snippet: "مقارنة شاملة بين الوكالات الكبيرة والاستوديوهات المتخصّصة والمستقلين.",
  },
  {
    slug: "ecommerce-store-cost-salla-zid-custom",
    title: "تكلفة تصميم متجر إلكتروني 2026: سلة، زد، أم مخصّص؟",
    tags: ["متجر إلكتروني", "سلة", "زد", "تجارة إلكترونية"],
    keywords: ["متجر إلكتروني", "سلة", "زد", "تجارة إلكترونية"],
    snippet: "مقارنة كاملة بين سلة وزد والمتجر المخصّص — الأسعار، المزايا، العيوب.",
  },
  {
    slug: "ai-integration-saudi-business",
    title: "كيف تدمج الذكاء الاصطناعي في شركتك السعودية 2026",
    tags: ["ذكاء اصطناعي", "AI", "أتمتة الأعمال"],
    keywords: ["ذكاء اصطناعي", "AI السعودية", "شات بوت"],
    snippet: "حالات استخدام عملية للذكاء الاصطناعي في الأعمال السعودية.",
  },
];

const BASE_URL = "https://nuqta-studio.com";

// --- Helpers ---
async function loadInsights() {
  try {
    return JSON.parse(await fs.readFile(INSIGHTS_FILE, "utf8"));
  } catch {
    return null;
  }
}

function pickArticleFromInsights(insights) {
  if (!insights?.google) {
    // Fallback: rotate by day of year
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400_000
    );
    return {
      article: articles[dayOfYear % articles.length],
      reason: "rotation (no SEO data)",
      trigger: null,
    };
  }

  const g = insights.google;

  // Priority 1: rising queries — promote the article matching a rising query
  for (const q of g.risingQueries || []) {
    const match = articles.find((a) =>
      a.keywords.some((k) => q.query.includes(k)) ||
      a.title.split(/\s+/).some((w) => q.query.includes(w))
    );
    if (match) {
      return {
        article: match,
        reason: `rising query "${q.query}" (+${q.delta} impressions W/W)`,
        trigger: q,
      };
    }
  }

  // Priority 2: page-2 opportunities — promote that article to push to page 1
  for (const q of g.page2Opportunities || []) {
    const page = q.topPage.replace(BASE_URL, "").replace(/^\/blog\//, "").replace(/\.html$/, "");
    const match = articles.find((a) => a.slug === page);
    if (match) {
      return {
        article: match,
        reason: `page-2 push for "${q.query}" (pos ${q.avgPosition.toFixed(1)}, ${q.impressions} impr)`,
        trigger: q,
      };
    }
  }

  // Priority 3: rotate through top-performing articles
  const topClickedPages = g.topQueries
    .sort((a, b) => b.clicks - a.clicks)
    .map((q) => q.topPage)
    .filter(Boolean);
  for (const p of topClickedPages) {
    const slug = p.replace(BASE_URL, "").replace(/^\/blog\//, "").replace(/\.html$/, "");
    const match = articles.find((a) => a.slug === slug);
    if (match) {
      return { article: match, reason: `top performer`, trigger: null };
    }
  }

  // Final fallback
  const dayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400_000
  );
  return {
    article: articles[dayOfYear % articles.length],
    reason: "rotation",
    trigger: null,
  };
}

// --- Draft generators (template-based; no LLM needed) ---

function linkedinPost(article, trigger) {
  const url = `${BASE_URL}/blog/${article.slug}.html`;
  const hook = trigger?.query
    ? `هل تبحث عن "${trigger.query}"؟`
    : `سؤال نسمعه كثيراً:`;

  return `${hook}

${article.title}

${article.snippet}

في ${article.title.includes("استوديو") ? "مقالنا الجديد" : "الدليل"}، نكسر الموضوع بشكل عملي وبأرقام حقيقية للسوق السعودي 2026.

اقرأ كامل المقال هنا:
${url}

${article.tags.map((t) => `#${t.replace(/\s+/g, "_")}`).join(" ")} #استوديو_نقطة #التحول_الرقمي #رؤية_2030`;
}

function twitterThread(article, trigger) {
  const url = `${BASE_URL}/blog/${article.slug}.html`;
  const tweets = [
    `🧵 ${article.title}\n\n${trigger?.query ? `(موضوع ترند في السعودية: ${trigger.query})` : ""}\n\n١/٥`,
    `النقطة الأساسية:\n${article.snippet}\n\n٢/٥`,
    `أهم ٣ عوامل يجب معرفتها:\n• نوع المشروع\n• التقنية المستخدمة\n• حجم الفريق\n\n٣/٥`,
    `نحن في استوديو نقطة نقدّم استشارة مجانية لتحديد ما يناسب مشروعك.\n\nتواصل واتساب: wa.me/966596562019\n\n٤/٥`,
    `اقرأ الدليل الكامل 👇\n${url}\n\n٥/٥\n\n${article.tags.slice(0, 3).map((t) => `#${t.replace(/\s+/g, "_")}`).join(" ")}`,
  ];
  return tweets.map((t, i) => `**Tweet ${i + 1}:**\n${t}`).join("\n\n");
}

function quoraAnswer(article, trigger) {
  const url = `${BASE_URL}/blog/${article.slug}.html`;
  const question = trigger?.query || article.keywords[0];
  return `**السؤال المقترح للبحث عنه على Quora/مجتمعات:**
"${question}" أو ما يشبهها من صياغات.

**مسودة الإجابة (400+ كلمة):**

${article.title} موضوع نسمعه كثيراً من رواد الأعمال السعوديين.

باختصار: ${article.snippet}

إليك الإجابة التفصيلية بناءً على خبرة عملية في السوق السعودي 2026:

**أولاً — العوامل الرئيسية**
[أكمل هنا ٣-٤ نقاط من المقال]

**ثانياً — الأرقام الحقيقية**
[استخدم أرقام جدول التكاليف من المقال]

**ثالثاً — أخطاء شائعة يجب تجنّبها**
[اذكر ٣ نقاط]

**رابعاً — كيف تختار؟**
[أعطِ توصية واضحة]

للتعمّق أكثر، هذا الدليل الشامل الذي نشرناه: ${url}

**مصدر:** استوديو نقطة (Nuqta Dev Studio) — شركة تطوير سعودية متخصّصة.

⚠️ ملاحظة: خصّص الإجابة لكل سؤال تجيب عليه — لا تنسخ الصياغة نفسها، بل أعد صياغة الأفكار الأساسية.`;
}

function mediumPost(article) {
  const url = `${BASE_URL}/blog/${article.slug}.html`;
  return {
    title: article.title,
    contentFormat: "markdown",
    content: `${article.title}\n\n${article.snippet}\n\n> اقرأ المقال الأصلي على موقعنا: ${url}\n\n${article.tags.map((t) => `#${t.replace(/\s+/g, "_")}`).join(" ")}`,
    tags: article.tags.slice(0, 5),
    canonicalUrl: url,
    publishStatus: "public",
  };
}

// --- Optional auto-post functions (only fire if tokens present) ---

async function postToDevTo(article) {
  if (!process.env.DEVTO_API_KEY) return null;
  const res = await fetch("https://dev.to/api/articles", {
    method: "POST",
    headers: {
      "api-key": process.env.DEVTO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      article: {
        title: article.title,
        body_markdown: `${article.snippet}\n\n_Originally published at ${BASE_URL}/blog/${article.slug}.html_`,
        published: true,
        canonical_url: `${BASE_URL}/blog/${article.slug}.html`,
        tags: article.tags.slice(0, 4).map((t) => t.replace(/\s+/g, "").toLowerCase()),
      },
    }),
  });
  return { status: res.status, ok: res.ok, body: await res.text().catch(() => "") };
}

async function postToMedium(article) {
  if (!process.env.MEDIUM_TOKEN || !process.env.MEDIUM_AUTHOR_ID) return null;
  const post = mediumPost(article);
  const res = await fetch(
    `https://api.medium.com/v1/users/${process.env.MEDIUM_AUTHOR_ID}/posts`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.MEDIUM_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(post),
    }
  );
  return { status: res.status, ok: res.ok, body: await res.text().catch(() => "") };
}

async function postToHashnode(article) {
  if (!process.env.HASHNODE_TOKEN) return null;

  // Auto-discover publication ID if not explicitly set
  let pubId = process.env.HASHNODE_PUBLICATION_ID;
  if (!pubId) {
    const meRes = await fetch("https://gql.hashnode.com/", {
      method: "POST",
      headers: {
        Authorization: process.env.HASHNODE_TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{ me { publications(first: 1) { edges { node { id } } } } }`,
      }),
    });
    const meData = await meRes.json().catch(() => ({}));
    pubId = meData?.data?.me?.publications?.edges?.[0]?.node?.id;
    if (!pubId) {
      return {
        status: 0,
        ok: false,
        body: "No publication found on HashNode account — create one at hashnode.com/onboard",
      };
    }
  }

  const res = await fetch("https://gql.hashnode.com/", {
    method: "POST",
    headers: {
      Authorization: process.env.HASHNODE_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `mutation PublishPost($input: PublishPostInput!) { publishPost(input: $input) { post { id url } } }`,
      variables: {
        input: {
          title: article.title,
          contentMarkdown: `${article.snippet}\n\n[Read the original article](${BASE_URL}/blog/${article.slug}.html)`,
          // HashNode requires Latin-char slugs; use English tags only
          tags: [
            { slug: "webdev", name: "Web Development" },
            { slug: "programming", name: "Programming" },
            { slug: "saudiarabia", name: "Saudi Arabia" },
          ],
          publicationId: pubId,
          originalArticleURL: `${BASE_URL}/blog/${article.slug}.html`,
        },
      },
    }),
  });
  return { status: res.status, ok: res.ok, body: await res.text().catch(() => "") };
}

// --- Main ---

async function main() {
  const insights = await loadInsights();
  const { article, reason, trigger } = pickArticleFromInsights(insights);

  console.log(`\n📰 Today's pick: ${article.title}`);
  console.log(`   Reason: ${reason}\n`);

  await fs.mkdir(DRAFTS_DIR, { recursive: true });

  // Generate drafts
  const li = linkedinPost(article, trigger);
  const tw = twitterThread(article, trigger);
  const quora = quoraAnswer(article, trigger);

  let md = `# Daily Content Drafts — ${today}\n\n`;
  md += `**Selected article:** [${article.title}](${BASE_URL}/blog/${article.slug}.html)\n\n`;
  md += `**Selection reason:** ${reason}\n\n`;
  if (trigger) md += `**Trigger query:** \`${trigger.query}\` (${trigger.impressions || "?"} impressions)\n\n`;
  md += `---\n\n`;

  md += `## 📱 LinkedIn post\n\n\`\`\`\n${li}\n\`\`\`\n\n`;
  md += `## 🐦 Twitter / X thread (7 tweets)\n\n${tw}\n\n`;
  md += `## ❓ Quora answer\n\n${quora}\n\n`;

  // Attempt auto-posts
  md += `---\n\n## 🤖 Auto-post results\n\n`;
  const devto = await postToDevTo(article);
  const medium = await postToMedium(article);
  const hashnode = await postToHashnode(article);

  for (const [name, result] of [
    ["Dev.to", devto],
    ["Medium", medium],
    ["HashNode", hashnode],
  ]) {
    if (!result) {
      md += `- **${name}:** ⏭️ skipped (no token)\n`;
    } else if (result.ok) {
      md += `- **${name}:** ✅ posted (HTTP ${result.status})\n`;
    } else {
      md += `- **${name}:** ❌ failed (HTTP ${result.status}) — ${result.body.slice(0, 200)}\n`;
    }
  }
  md += "\n";

  const outPath = `${DRAFTS_DIR}/drafts-${today}.md`;
  await fs.writeFile(outPath, md);
  console.log(`✓ Drafts saved: ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
