#!/usr/bin/env node
/**
 * SEO Analyze — reads today's raw GSC + Bing data, extracts insights.
 *
 * Outputs: state/seo-insights/insights-YYYY-MM-DD.json
 *   {
 *     date, totalClicks, totalImpressions, avgCTR, avgPosition,
 *     topQueries: [...],
 *     page2Opportunities: [...],   // position 11-20 with 50+ impressions
 *     lowCtrPages: [...],          // CTR < 2% with 100+ impressions
 *     risingQueries: [...],        // biggest week-over-week gainers
 *     decliningQueries: [...],
 *   }
 */
import fs from "node:fs/promises";
import path from "node:path";

const today = new Date().toISOString().slice(0, 10);
const RAW_DIR = path.resolve("state/seo-raw");
const OUT_DIR = path.resolve("state/seo-insights");

async function loadJSON(file) {
  try {
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    return null;
  }
}

function analyzeGSC(gsc) {
  if (!gsc || !gsc.thisWeek?.rows) return null;

  const rows = gsc.thisWeek.rows;
  const totalClicks = rows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressions = rows.reduce((s, r) => s + r.impressions, 0);
  const avgCTR = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
  const avgPosition =
    rows.length > 0
      ? rows.reduce((s, r) => s + r.position * r.impressions, 0) / totalImpressions
      : 0;

  // Aggregate by query (collapse page dimension)
  const byQuery = new Map();
  for (const row of rows) {
    const [query, page] = row.keys;
    if (!byQuery.has(query)) {
      byQuery.set(query, {
        query,
        clicks: 0,
        impressions: 0,
        positionSum: 0,
        topPage: page,
        topPageImpressions: 0,
      });
    }
    const q = byQuery.get(query);
    q.clicks += row.clicks;
    q.impressions += row.impressions;
    q.positionSum += row.position * row.impressions;
    if (row.impressions > q.topPageImpressions) {
      q.topPage = page;
      q.topPageImpressions = row.impressions;
    }
  }
  for (const q of byQuery.values()) {
    q.avgPosition = q.impressions > 0 ? q.positionSum / q.impressions : 0;
    q.ctr = q.impressions > 0 ? q.clicks / q.impressions : 0;
    delete q.positionSum;
    delete q.topPageImpressions;
  }
  const queries = [...byQuery.values()];

  // Top queries by impressions
  const topQueries = [...queries]
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 20);

  // Page 2 opportunities: ranking 11-20 with significant impressions
  const page2Opportunities = queries
    .filter((q) => q.avgPosition > 10 && q.avgPosition <= 20 && q.impressions >= 50)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 15);

  // Page aggregation for CTR check
  const byPage = new Map();
  for (const row of rows) {
    const [, page] = row.keys;
    if (!byPage.has(page)) byPage.set(page, { page, clicks: 0, impressions: 0 });
    const p = byPage.get(page);
    p.clicks += row.clicks;
    p.impressions += row.impressions;
  }
  for (const p of byPage.values()) {
    p.ctr = p.impressions > 0 ? p.clicks / p.impressions : 0;
  }

  const lowCtrPages = [...byPage.values()]
    .filter((p) => p.impressions >= 100 && p.ctr < 0.02)
    .sort((a, b) => b.impressions - a.impressions)
    .slice(0, 10);

  // Week-over-week rising queries
  const prevByQuery = new Map();
  if (gsc.prevWeek?.rows) {
    for (const row of gsc.prevWeek.rows) {
      prevByQuery.set(row.keys[0], row.impressions);
    }
  }
  const risingQueries = queries
    .map((q) => ({
      ...q,
      prevImpressions: prevByQuery.get(q.query) || 0,
      delta: q.impressions - (prevByQuery.get(q.query) || 0),
    }))
    .filter((q) => q.delta > 10)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 10);

  const decliningQueries = queries
    .map((q) => ({
      ...q,
      prevImpressions: prevByQuery.get(q.query) || 0,
      delta: q.impressions - (prevByQuery.get(q.query) || 0),
    }))
    .filter((q) => q.delta < -10)
    .sort((a, b) => a.delta - b.delta)
    .slice(0, 5);

  return {
    source: "google",
    totalClicks,
    totalImpressions,
    avgCTR,
    avgPosition,
    totalQueries: queries.length,
    topQueries,
    page2Opportunities,
    lowCtrPages,
    risingQueries,
    decliningQueries,
  };
}

function analyzeBing(bing) {
  if (!bing) return null;
  const qs = bing.queryStats?.d || [];
  return {
    source: "bing",
    totalQueries: qs.length,
    topQueries: qs
      .sort((a, b) => (b.Impressions || 0) - (a.Impressions || 0))
      .slice(0, 20)
      .map((q) => ({
        query: q.Query,
        impressions: q.Impressions || 0,
        clicks: q.Clicks || 0,
        avgPosition: q.AvgImpressionPosition || 0,
        ctr: q.Impressions > 0 ? (q.Clicks || 0) / q.Impressions : 0,
      })),
  };
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  const gsc = await loadJSON(`${RAW_DIR}/gsc-${today}.json`);
  const bing = await loadJSON(`${RAW_DIR}/bing-${today}.json`);

  if (!gsc && !bing) {
    console.log("❌ No raw data found. Run `npm run seo:fetch` first.");
    process.exit(1);
  }

  const insights = {
    date: today,
    google: analyzeGSC(gsc),
    bing: analyzeBing(bing),
  };

  const outPath = `${OUT_DIR}/insights-${today}.json`;
  await fs.writeFile(outPath, JSON.stringify(insights, null, 2));
  console.log(`✓ Insights saved: ${outPath}`);

  if (insights.google) {
    const g = insights.google;
    console.log(`\n📊 Google (last 7d):`);
    console.log(`   Clicks: ${g.totalClicks}  |  Impressions: ${g.totalImpressions}`);
    console.log(`   Avg CTR: ${(g.avgCTR * 100).toFixed(2)}%  |  Avg Position: ${g.avgPosition.toFixed(1)}`);
    console.log(`   Queries: ${g.totalQueries}  |  Page-2 opportunities: ${g.page2Opportunities.length}`);
    console.log(`   Rising: ${g.risingQueries.length}  |  Declining: ${g.decliningQueries.length}`);
  }
  if (insights.bing) {
    console.log(`\n📊 Bing: ${insights.bing.totalQueries} queries`);
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
