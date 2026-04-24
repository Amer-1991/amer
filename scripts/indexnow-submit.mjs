#!/usr/bin/env node
/**
 * IndexNow submitter — pushes URLs to Bing, Yandex, Seznam, Naver instantly.
 * Usage:
 *   node scripts/indexnow-submit.mjs           # submits all URLs from sitemap
 *   node scripts/indexnow-submit.mjs <url>...  # submits specific URLs
 *
 * Docs: https://www.indexnow.org/documentation
 */

const HOST = "nuqta-studio.com";
const KEY = "7aa488bba871651adc3ebd0765aaa3fe";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

// All search engines supporting IndexNow (submitting to any one propagates to all)
const ENDPOINT = "https://api.indexnow.org/IndexNow";

async function submit(urls) {
  if (urls.length === 0) {
    console.error("No URLs to submit.");
    process.exit(1);
  }

  console.log(`📤 Submitting ${urls.length} URLs to IndexNow…`);
  urls.forEach((u) => console.log(`   • ${u}`));

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });

    const statusMap = {
      200: "✅ OK — URLs submitted successfully",
      202: "⏳ Accepted — will be processed (common & fine)",
      400: "❌ Bad request — check URL format",
      403: "❌ Forbidden — key mismatch; verify keyLocation returns the key",
      422: "❌ Unprocessable — URLs don't match host",
      429: "⚠️  Too many requests — rate-limited",
    };
    const msg = statusMap[res.status] || `Status ${res.status}`;
    console.log(`\n${msg}`);
    if (res.status >= 400) {
      const text = await res.text().catch(() => "");
      if (text) console.log(text);
      process.exit(1);
    }
  } catch (err) {
    console.error("❌ Network error:", err.message);
    process.exit(1);
  }
}

async function urlsFromSitemap() {
  const sitemapUrl = `https://${HOST}/sitemap.xml`;
  const res = await fetch(sitemapUrl);
  if (!res.ok) {
    console.error(`Could not fetch sitemap: ${res.status}`);
    return [];
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  // Filter out anchor URLs (hash fragments) — IndexNow rejects them
  return [...new Set(matches.map((m) => m[1]).filter((u) => !u.includes("#")))];
}

const argv = process.argv.slice(2);
const urls = argv.length > 0 ? argv : await urlsFromSitemap();
await submit(urls);
