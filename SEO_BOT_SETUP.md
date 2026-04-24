# SEO Bot — Setup Guide

Daily automation that pulls Google Search Console + Bing Webmaster Tools data,
identifies opportunities, drafts social posts, and optionally auto-publishes to
Medium / Dev.to / HashNode.

## What it does every day at 08:00 Riyadh time

1. **Fetch** last-7-days data from GSC + Bing (`scripts/seo-fetch.mjs`)
2. **Analyze** — top queries, page-2 opportunities, low-CTR pages, rising queries (`scripts/seo-analyze.mjs`)
3. **Report** — writes a human-readable markdown report to `state/seo-reports/report-YYYY-MM-DD.md` (`scripts/seo-report.mjs`)
4. **Draft** social posts (LinkedIn, Twitter thread, Quora answer) targeting the trending query (`scripts/daily-bot.mjs`)
5. **Auto-post** to Dev.to, Medium, HashNode (if tokens set)
6. **Commit** everything back to the repo so you can review it from git history

## Required: GitHub repository secrets

Set these at: `github.com/Amer-1991/amer/settings/secrets/actions`

### 1. `GSC_SERVICE_ACCOUNT_JSON` — Google Search Console (required)

Step-by-step:

1. Go to https://console.cloud.google.com and create a new project called `nuqta-seo-bot`.
2. **APIs & Services** → **Enabled APIs** → **+ ENABLE APIS AND SERVICES** → search for and enable **"Google Search Console API"**.
3. **APIs & Services** → **Credentials** → **+ CREATE CREDENTIALS** → **Service account**.
   - Name: `seo-bot`
   - Role: none needed (can skip)
   - Click **Done**.
4. Click the service account you just created → **Keys** tab → **ADD KEY** → **Create new key** → **JSON** → **CREATE**. A `.json` file downloads.
5. Copy the service-account email shown (looks like `seo-bot@nuqta-seo-bot.iam.gserviceaccount.com`).
6. Go to https://search.google.com/search-console → select `nuqta-studio.com` → **Settings (gear icon, bottom-left)** → **Users and permissions** → **ADD USER**.
   - Email: the service account email from step 5
   - Permission: **Owner** (or Full user)
   - Click **Add**.
7. Open the downloaded `.json` file → copy the **entire contents** (one line or multiple lines, JSON).
8. GitHub → repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**.
   - Name: `GSC_SERVICE_ACCOUNT_JSON`
   - Value: paste JSON
   - Click **Add secret**.

### 2. `BING_API_KEY` — Bing Webmaster Tools (required for Bing data)

1. Go to https://www.bing.com/webmasters, sign in, select your site.
2. Click the **Settings** icon (top right) → **API Access**.
3. Click **Generate API Key** → copy the key (starts with something like `abc123...`).
4. Add as GitHub secret `BING_API_KEY`.

### 3. Optional: auto-posting tokens

Only add these if you want the bot to actually publish (not just draft).

| Secret | How to get it |
|---|---|
| `DEVTO_API_KEY` | https://dev.to/settings/extensions → "API Keys" → Generate |
| `MEDIUM_TOKEN` | https://medium.com/me/settings/security → "Integration tokens" → New |
| `MEDIUM_AUTHOR_ID` | Call `GET https://api.medium.com/v1/me` with the token above (returns `id`) |
| `HASHNODE_TOKEN` | https://hashnode.com/settings/developer → "Personal Access Tokens" |
| `HASHNODE_PUBLICATION_ID` | From your HashNode publication settings URL or GraphQL query |

Without these, the bot just drafts posts to `state/drafts/` for you to paste manually.

## Running locally (test)

```bash
# Set env vars in a .env file (gitignored), then:
export GSC_SERVICE_ACCOUNT_JSON="$(cat ./seo-bot-key.json)"
export BING_API_KEY="your-key"

npm install googleapis          # install optional dep
npm run seo:fetch               # → state/seo-raw/
npm run seo:analyze             # → state/seo-insights/
npm run seo:report              # → state/seo-reports/
npm run bot:daily               # → state/drafts/
```

## Running on demand in GitHub Actions

1. Push all secrets (above)
2. Go to **Actions** tab → **"SEO Bot — daily data pull + content drafts"**
3. Click **Run workflow** → **Run workflow** (use `workflow_dispatch`)
4. Wait 1 minute → see new commit from **Nuqta SEO Bot** with `state/` files

## Output files

- `state/seo-raw/gsc-YYYY-MM-DD.json` — raw GSC API response
- `state/seo-raw/bing-YYYY-MM-DD.json` — raw Bing API response
- `state/seo-insights/insights-YYYY-MM-DD.json` — processed insights
- `state/seo-reports/report-YYYY-MM-DD.md` — human-readable daily report
- `state/drafts/drafts-YYYY-MM-DD.md` — ready-to-paste social posts

## What the daily report contains

- Total clicks, impressions, avg CTR, avg position (Google)
- Top 20 queries by impressions
- **Page-2 opportunities** — queries ranking 11–20 (easy wins if you push them to page 1)
- **Low-CTR pages** — pages with CTR < 2% despite 100+ impressions (title/meta needs rewrite)
- **Rising queries** — biggest week-over-week gainers (capitalize with fresh content)
- **Declining queries** — spot content that's losing traction

## Cadence & rules

- Runs every day at **05:00 UTC (08:00 Riyadh)**
- Commits automated — won't spam you; only commits when something actually changed
- If a data source is missing, the bot continues with what's available
- Drafts are idempotent per day (re-runs overwrite the same date file)
- **No secrets are ever logged or committed** — only GitHub Action env vars

## Troubleshooting

### "No rows returned from GSC"
- Your GSC property is brand new — wait 48–72 hours for data to populate
- Double-check `SITE_URL` in `scripts/seo-fetch.mjs` matches your GSC property (use `sc-domain:yourdomain.com` for Domain properties)

### "Bing API 401"
- Regenerate the API key and update the GitHub secret

### "Auto-post failed: 422"
- Dev.to: tags can't contain spaces or Arabic — the bot already strips, but check
- Medium: token expired, regenerate
- HashNode: publication ID wrong — query with `{ me { publications(first: 10) { edges { node { id } } } } }`

### "Commit failed in workflow"
- Ensure the repo's default workflow permissions are **Read and write** (Settings → Actions → General → Workflow permissions)
