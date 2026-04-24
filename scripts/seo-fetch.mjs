#!/usr/bin/env node
/**
 * SEO Fetch — pulls last-7-days data from Google Search Console + Bing Webmaster Tools.
 *
 * Requires env vars:
 *   GSC_SERVICE_ACCOUNT_JSON  (JSON string of GCP service account key)
 *   BING_API_KEY              (from bing.com/webmasters → Settings → API Access)
 *
 * Outputs: state/seo-raw/gsc-YYYY-MM-DD.json and bing-YYYY-MM-DD.json
 */
import fs from "node:fs/promises";
import path from "node:path";

const SITE_URL = "sc-domain:nuqta-studio.com"; // GSC "domain property"
const BING_SITE = "https://nuqta-studio.com";

const today = new Date().toISOString().slice(0, 10);
const weekAgo = new Date(Date.now() - 7 * 86400_000).toISOString().slice(0, 10);
const OUT_DIR = path.resolve("state/seo-raw");

async function fetchGSC() {
  if (!process.env.GSC_SERVICE_ACCOUNT_JSON) {
    console.log("⚠️  GSC_SERVICE_ACCOUNT_JSON not set — skipping GSC fetch");
    return null;
  }

  let google;
  try {
    ({ google } = await import("googleapis"));
  } catch {
    console.log("⚠️  googleapis package not installed — run: npm install googleapis");
    return null;
  }

  const credentials = JSON.parse(process.env.GSC_SERVICE_ACCOUNT_JSON);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });
  const searchconsole = google.searchconsole({ version: "v1", auth });

  console.log(`📥 Fetching GSC data (${weekAgo} → ${today})…`);

  // Query + Page dimensions (detailed)
  const { data } = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: weekAgo,
      endDate: today,
      dimensions: ["query", "page"],
      rowLimit: 1000,
    },
  });

  // Also fetch week-over-week comparison (previous 7 days)
  const twoWeeksAgo = new Date(Date.now() - 14 * 86400_000).toISOString().slice(0, 10);
  const { data: prevWeek } = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: twoWeeksAgo,
      endDate: weekAgo,
      dimensions: ["query"],
      rowLimit: 1000,
    },
  });

  return { thisWeek: data, prevWeek: prevWeek };
}

async function fetchBing() {
  if (!process.env.BING_API_KEY) {
    console.log("⚠️  BING_API_KEY not set — skipping Bing fetch");
    return null;
  }

  console.log(`📥 Fetching Bing data…`);
  const base = "https://ssl.bing.com/webmaster/api.svc/json";
  const key = process.env.BING_API_KEY;

  const endpoints = {
    queryStats: `${base}/GetQueryStats?siteUrl=${encodeURIComponent(BING_SITE)}&apikey=${key}`,
    pageStats: `${base}/GetPageStats?siteUrl=${encodeURIComponent(BING_SITE)}&apikey=${key}`,
    keywordStats: `${base}/GetRankAndTrafficStats?siteUrl=${encodeURIComponent(BING_SITE)}&apikey=${key}`,
  };

  const results = {};
  for (const [name, url] of Object.entries(endpoints)) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (!res.ok) {
        console.log(`   ${name}: HTTP ${res.status}`);
        continue;
      }
      results[name] = await res.json();
    } catch (err) {
      console.log(`   ${name}: ${err.message}`);
    }
  }
  return results;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const [gsc, bing] = await Promise.all([fetchGSC(), fetchBing()]);

  if (gsc) {
    const path = `${OUT_DIR}/gsc-${today}.json`;
    await fs.writeFile(path, JSON.stringify(gsc, null, 2));
    console.log(`✓ GSC saved: ${path} (${gsc.thisWeek.rows?.length || 0} rows)`);
  }
  if (bing) {
    const path = `${OUT_DIR}/bing-${today}.json`;
    await fs.writeFile(path, JSON.stringify(bing, null, 2));
    console.log(`✓ Bing saved: ${path}`);
  }

  if (!gsc && !bing) {
    console.log("\n❌ No data fetched. Set GSC_SERVICE_ACCOUNT_JSON and/or BING_API_KEY.");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
