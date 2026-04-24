# Nuqta Dev Studio — Daily Backlink Content Queue

Automated daily Arabic content for Saudi-focused free backlink platforms.
Runs every morning at **8:00 AM KSA time** via Claude scheduled task (`nuqta-daily-backlinks`).

## How this works

1. Each day the scheduled agent picks a **target platform** from the 7-day rotation below.
2. It picks a **topic** that hasn't been used in the last 7 days (from `topics.md`).
3. It generates ready-to-paste Arabic content tailored to that platform.
4. Output is saved to `content-queue/YYYY-MM-DD.md`.
5. It updates `rotation-log.md` so it doesn't repeat.

## Weekly rotation (Saudi calendar — Sun–Sat)

| Day (KSA) | Platform | Why |
|-----------|----------|-----|
| **Sunday** | LinkedIn (Arabic post) | Work week starts, highest engagement |
| **Monday** | Quora (Arabic answer) | Trending Saudi business questions |
| **Tuesday** | Mostaql (مستقل) portfolio post | KSA freelance marketplace |
| **Wednesday** | Twitter/X (Arabic thread, 5-7 tweets) | Saudi tech community |
| **Thursday** | Medium Arabic / HashNode (cross-post) | Evergreen SEO value |
| **Friday** | Reddit (r/SaudiArabia or r/dubai) | Weekend scrolling audience |
| **Saturday** | Saudi directories (rotate: dalili.sa, saudi-yellow-pages, Bayt, Khamsat) | Steady backlinks |

## Daily workflow

1. **8:00 AM** — scheduled task runs, drops a file in `content-queue/2026-MM-DD.md`
2. **You (10 min):** open today's file, copy each section, paste on the target platform
3. **Done.** Every post includes a link back to `nuqta-studio.com` or a specific blog article

## Files in this directory

- `README.md` — this file
- `topics.md` — pool of topics to rotate through
- `rotation-log.md` — what's been posted, prevents duplicates
- `YYYY-MM-DD.md` — daily output files
