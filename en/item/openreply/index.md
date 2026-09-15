# OpenReply

> Instagram comment-to-DM automation — Self-hosted ManyChat alternative: Instagram comment keyword → DM via Meta's official API.

- Page: https://tesign.com/en/item/openreply/
- JSON: https://tesign.com/en/item/openreply/index.json
- Korean Markdown: https://tesign.com/item/openreply/index.md
- Generated: 2026-09-15 20:32 UTC

## RANKS

- COMMERCE #6 · SOCIAL #19 (As of 2026-09-15 15:00 UTC)

## Numbers

- 2,292 stars — checked on GitHub 2026-09-15 19:35 UTC
- 7-day +4 observed via GH Archive (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: COMMERCE · SOCIAL
- Tags: instagram · comment-to-dm · marketing-automation · self-hosted · nextjs · meta-api
- How to start: Self-host
- SOURCES: GitHub https://github.com/diwenne/openreply
- SELF-HOST: https://openreply.diwen.dev/

## ACTIVITY

- Last commit: 2026-09-14 19:42 UTC
- Latest release: no releases
- Contributors: 22
- Open issues (incl. PRs): 6
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:35 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

It replaces one subscription, but you take on the server, the database and the Meta app review yourself.

## WHY IT MATTERS

Comment 'LINK' on a reel and get the link by DM: every tool offering this one feature wants a recurring subscription. OpenReply provides the workflow as MIT software that uses only the official Instagram API with Instagram Login — no scraping, no browser automation, no password. It rate-limits per account under Meta's documented cap of 750 private replies per hour and queues the overflow instead of dropping it, and adds tracked links, a follow gate, Story-reply triggers and a dashboard inbox.

## BUILD FROM THIS

- Run comment-to-DM for several client accounts under one workspace with roles, or feed the tracked-link click and CTR data into your own store's campaign analytics.

## WHO IT'S FOR

- Small businesses selling on Instagram — send the link by DM when a comment matches a keyword
- Creators — deliver links from Story replies, gate them behind a follow
- Small agencies — run client accounts in separate workspaces with send logs

## START IN 5 MINUTES

```
# git clone https://github.com/diwenne/openreply.git
# cd openreply && npm install && cp .env.example .env   # then fill in the values, see docs/setup.md
# docker-compose up -d      # starts Postgres and Redis
# npm run db:generate && npm run db:migrate
# npm run dev   # web app on http://localhost:3000 · in a second terminal: npm run worker (this sends the DMs)
```

## CAVEATS

- MIT licence. Only Instagram Business or Creator accounts can be connected; personal accounts are not supported. Self-hosted only: needs PostgreSQL, Redis, a public HTTPS URL, email delivery for magic-link sign-in (Resend) and an always-on worker process. openreply.diwen.dev is a dashboard demo; signing up there never sends a DM. Instagram connection is either your own Meta app (with review) or the paid sponsor Zernio; hosting costs are separate. Meta's policies, 24-hour messaging window and rate limits still apply.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:42 UTC
- AT SOURCE: 2026-07-17 02:01 UTC
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

[Image] https://tesign.com/img/openreply-fe6ded9980.png
