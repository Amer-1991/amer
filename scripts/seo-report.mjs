#!/usr/bin/env node
/**
 * Renders today's insights JSON to a human-readable markdown report.
 * Output: state/seo-reports/report-YYYY-MM-DD.md
 */
import fs from "node:fs/promises";
import path from "node:path";

const today = new Date().toISOString().slice(0, 10);
const IN = path.resolve(`state/seo-insights/insights-${today}.json`);
const OUT_DIR = path.resolve("state/seo-reports");

function pct(n) {
  return `${(n * 100).toFixed(2)}%`;
}
function pos(n) {
  return n.toFixed(1);
}

function renderGoogle(g) {
  if (!g) return "*No Google data.*\n";

  let md = `## 🔍 Google Search Console\n\n`;
  md += `**KPIs (last 7 days):**\n`;
  md += `- Clicks: **${g.totalClicks}**\n`;
  md += `- Impressions: **${g.totalImpressions}**\n`;
  md += `- Avg CTR: **${pct(g.avgCTR)}**\n`;
  md += `- Avg Position: **${pos(g.avgPosition)}**\n`;
  md += `- Queries seen: ${g.totalQueries}\n\n`;

  if (g.topQueries.length) {
    md += `### 🏆 Top queries (by impressions)\n\n`;
    md += `| Query | Impr. | Clicks | CTR | Pos. |\n|---|---:|---:|---:|---:|\n`;
    for (const q of g.topQueries.slice(0, 10)) {
      md += `| ${q.query} | ${q.impressions} | ${q.clicks} | ${pct(q.ctr)} | ${pos(q.avgPosition)} |\n`;
    }
    md += "\n";
  }

  if (g.page2Opportunities.length) {
    md += `### 🎯 Page-2 opportunities (rank 11–20 — push these!)\n\n`;
    md += `| Query | Impr. | Pos. | Target page |\n|---|---:|---:|---|\n`;
    for (const q of g.page2Opportunities) {
      const page = q.topPage.replace("https://nuqta-studio.com", "");
      md += `| ${q.query} | ${q.impressions} | ${pos(q.avgPosition)} | \`${page}\` |\n`;
    }
    md += "\n*Action:* write supporting content targeting these queries, get more backlinks to those pages.\n\n";
  }

  if (g.lowCtrPages.length) {
    md += `### 📉 Pages with low CTR (need meta rewrite)\n\n`;
    md += `| Page | Impr. | CTR |\n|---|---:|---:|\n`;
    for (const p of g.lowCtrPages) {
      const page = p.page.replace("https://nuqta-studio.com", "");
      md += `| \`${page}\` | ${p.impressions} | ${pct(p.ctr)} |\n`;
    }
    md += "\n*Action:* rewrite the `<title>` and `<meta description>` to be more compelling.\n\n";
  }

  if (g.risingQueries.length) {
    md += `### 📈 Rising queries (week over week)\n\n`;
    md += `| Query | This week | Prev week | Δ |\n|---|---:|---:|---:|\n`;
    for (const q of g.risingQueries) {
      md += `| ${q.query} | ${q.impressions} | ${q.prevImpressions} | +${q.delta} |\n`;
    }
    md += "\n*Action:* capitalize — promote related articles on social, write deeper content.\n\n";
  }

  if (g.decliningQueries.length) {
    md += `### 📉 Declining queries\n\n`;
    md += `| Query | This week | Prev | Δ |\n|---|---:|---:|---:|\n`;
    for (const q of g.decliningQueries) {
      md += `| ${q.query} | ${q.impressions} | ${q.prevImpressions} | ${q.delta} |\n`;
    }
    md += "\n";
  }

  return md;
}

function renderBing(b) {
  if (!b) return "";
  let md = `## 🔎 Bing Webmaster\n\n`;
  md += `Queries: **${b.totalQueries}**\n\n`;
  if (b.topQueries.length) {
    md += `### Top queries\n\n`;
    md += `| Query | Impr. | Clicks | Pos. |\n|---|---:|---:|---:|\n`;
    for (const q of b.topQueries.slice(0, 10)) {
      md += `| ${q.query} | ${q.impressions} | ${q.clicks} | ${pos(q.avgPosition)} |\n`;
    }
    md += "\n";
  }
  return md;
}

async function main() {
  let insights;
  try {
    insights = JSON.parse(await fs.readFile(IN, "utf8"));
  } catch {
    console.log(`❌ No insights for ${today}. Run \`npm run seo:analyze\` first.`);
    process.exit(1);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  let md = `# SEO Report — ${today}\n\n`;
  md += `Auto-generated daily by the SEO bot.\n\n`;
  md += `---\n\n`;
  md += renderGoogle(insights.google);
  md += "\n---\n\n";
  md += renderBing(insights.bing);

  const outPath = `${OUT_DIR}/report-${today}.md`;
  await fs.writeFile(outPath, md);
  console.log(`✓ Report saved: ${outPath}`);
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
