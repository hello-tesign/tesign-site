# Talivia

> Revenue-linked analytics for founders — Self-hosted web analytics with Session Replay that ties each visit to payment revenue.

- Page: https://tesign.com/en/item/talivia/
- JSON: https://tesign.com/en/item/talivia/index.json
- Korean Markdown: https://tesign.com/item/talivia/index.md
- Generated: 2026-09-21 05:13 UTC

## RANKS

- COMMERCE #5 (As of 2026-09-21 00:00 UTC)

## Numbers

- 2,393 stars — checked on GitHub 2026-09-19 22:58 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 00:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: DATA · COMMERCE
- Tags: web-analytics · session-replay · revenue-attribution · stripe · self-hosted · postgresql
- How to start: Self-host
- SOURCES: GitHub https://github.com/talivia-group/talivia
- SELF-HOST: https://talivia.com/

## ACTIVITY

- Last commit: 2026-09-16 07:37 UTC
- Latest release: no releases
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an organization
- Checked on GitHub: 2026-09-19 22:58 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The README says up front that the open edition is a subset of the cloud product; within that scope it is a revenue-attribution tool you keep on your own server.

## WHY IT MATTERS

Pageview counters do not tell you which visit made money. Talivia's open-source edition combines core web analytics and Session Replay with customer revenue from Stripe, LemonSqueezy, Polar, Dodo, Yolfi or a Manual Payment API, retaining subscription lifecycle, refunds, disputes and first-/last-touch attribution. Only two settings are required, `DATABASE_URL` and `APP_SECRET`, and it starts with `docker compose up --build -d`.

## BUILD FROM THIS

- Drop the tracking snippet into a storefront and connect the payment webhook to get a revenue-attribution dashboard you own, showing which channel actually produced sales; the Manual Payment API records payments made outside the supported providers.

## WHO IT'S FOR

- Founders selling SaaS or digital products — see which channel's visits turned into payments
- Operators who prefer self-hosting — keep visits, replays and revenue in your own PostgreSQL
- Marketers — watch Session Replay to find where people drop before checkout

## START IN 5 MINUTES

```
# cp .env.example .env
# openssl rand -hex 32          # put the generated value in APP_SECRET
# docker compose up --build -d
# docker compose ps
# # open http://localhost:3000, sign in as admin / admin, change the password immediately under Settings → Account
```

## CAVEATS

- MIT licence. The open-source edition is a self-hosted subset of the paid talivia.com product; Google Search Console, Bing, GitHub activity and social-mention integrations are cloud-only. Needs an empty PostgreSQL database with no migration path from a hosted Talivia database. The bootstrap login is admin/admin and must be changed immediately; behind a reverse proxy, forward Host and X-Forwarded-Proto so payment webhook URLs are generated correctly. No software cost, server cost only.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:14 UTC
- AT SOURCE: 2026-07-29 07:56 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 04:36 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/talivia-9aa2dcc6ae.png
