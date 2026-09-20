# Inkstone

> Self-hosted notebook on Cloudflare — A self-hosted Markdown notebook you deploy on your own Cloudflare Workers account, with realtime sync, search and backlinks built in.

- Page: https://tesign.com/en/item/inkstone/
- JSON: https://tesign.com/en/item/inkstone/index.json
- Korean Markdown: https://tesign.com/item/inkstone/index.md
- Generated: 2026-09-20 03:36 UTC

## Numbers

- 929 stars — checked on GitHub 2026-09-19 22:59 UTC
- 7-day +10 observed via GH Archive (as of 2026-09-19 22:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: PRODUCTIVITY
- Tags: markdown · self-hosted · cloudflare-workers · notes · sync
- How to start: Self-host
- SOURCES: GitHub https://github.com/shuaiplus/inkstone
- SELF-HOST: https://inkstone-demo.pages.dev/

## ACTIVITY

- Last commit: 2026-09-14 07:50 UTC
- Latest release: v0.8.0 (2026-09-14)
- Contributors: 2
- Open issues (incl. PRs): 23
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:59 UTC

## TESIGN TAKE

Having to deploy it yourself is real friction, but in return it keeps its promise that the data lives only in your own account.

## WHY IT MATTERS

Inkstone is a Markdown notebook that runs entirely on your own Cloudflare account — Workers, D1, R2 — with no separate server to manage. Notes always stay plain text, with live preview, full-text search (including Chinese indexing), wiki-style backlinks, offline editing with multi-device sync, and scheduled WebDAV/S3 backups layered on top. The public demo (inkstone-demo.pages.dev) really does sign in with the admin account shown on the page (verified), resetting to two starter notes on refresh.

## BUILD FROM THIS

- Build your own note server for plain Markdown knowledge you want to fully own
- Issue a per-document MCP API key so a coding agent can search or edit your notes
- Schedule WebDAV/S3 backups for off-site storage

## WHO IT'S FOR

- Anyone who wants notes as plain Markdown files, nothing proprietary
- Someone with a Cloudflare account who wants a notebook server they fully own
- A developer who wants to grant an agent scoped access to search or edit notes

## START IN 5 MINUTES

```
# Try the demo first: https://inkstone-demo.pages.dev (sign in with the account shown on the page; refreshing resets it)
# Deploy to your own account: fork the repo → connect it via GitHub in Cloudflare Workers & Pages → set build command npm run build, deploy command npm run deploy
```

## CAVEATS

- LGPL-3.0-only · real use requires deploying to your own Cloudflare account; the public demo signs in with a fixed account and resets on refresh
- Optional semantic search needs the Workers AI binding; without it, search falls back to lexical only

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 21:32 UTC
- AT SOURCE: 2026-07-30 13:27 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/inkstone-163a482ebb.png
