# OpenAnalytics

> Cookieless analytics for site owners — Cookieless, self-hostable web analytics with revenue attribution, an MCP server and a CLI

- Page: https://tesign.com/en/item/openanalytics/
- JSON: https://tesign.com/en/item/openanalytics/index.json
- Korean Markdown: https://tesign.com/item/openanalytics/index.md
- Generated: 2026-09-17 19:00 UTC

## Numbers

- 537 stars — checked on GitHub 2026-09-17 18:41 UTC
- 7-day +2 observed via GH Archive (as of 2026-09-17 13:00 UTC)
- 10 Show HN points — observed 2026-09-13 14:24 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web · linux · cli
- CATEGORY: DATA
- Tags: web-analytics · privacy · self-hosted · clickhouse · mcp · agpl
- How to start: Self-host
- SOURCES: Show HN https://github.com/OpenLabs-so/openanalytics · GitHub https://github.com/openlabs-so/openanalytics
- SELF-HOST: https://getopen.so/

## ACTIVITY

- Last commit: 2026-09-17 04:23 UTC
- Latest release: v0.6.0 (2026-09-05)
- Contributors: 4
- Open issues (incl. PRs): 1
- Made by: an organization
- Checked on GitHub: 2026-09-17 18:41 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

Plausible-style privacy analytics plus revenue attribution and an MCP server, with the choice of running it yourself or paying from $9 a month for the hosted version.

## WHY IT MATTERS

No cookies, fingerprinting or cross-site identifiers: visitors are identified only by a salted hash that rotates daily and raw IPs are never stored. Even so it attributes revenue from your own Stripe account to traffic sources, and funnels, retention, web vitals, public share links, an MCP server and the oa CLI all live in one repository. Self-hosting is a pull of ten published images from ghcr.io with docker compose pull && up -d — no toolchain needed — and the authors run the same code as a hosted service at getopen.so.

## BUILD FROM THIS

- Connect the MCP server to an AI assistant and build an internal reporting bot that answers 'which traffic source led to payments this week', or use the OpenAPI document in packages/contracts to build your own dashboards and widgets.

## WHO IT'S FOR

- Owners of personal projects and small sites — visitor stats without a cookie banner
- SaaS and shops taking payments through Stripe — revenue attribution per traffic source and funnels
- Developer teams — wire stats into AI agents or scripts via the MCP server and CLI

## START IN 5 MINUTES

```
# git clone https://github.com/OpenLabs-so/openanalytics
# cd openanalytics
# git checkout "$(git tag -l 'v*' --sort=-v:refname | sed '/-/d' | head -1)"   # newest release, not main
# cd infra/selfhost
# ./generate-secrets.sh --domain example.com --email you@example.com --with-geoip
# docker compose pull && docker compose up -d
```

## CAVEATS

- Licence AGPL-3.0 — running a modified version as a network service obliges you to offer the modified source to its users. Self-hosting needs a Linux host with Docker, four DNS records (app, api, c, rt), about 4 GB RAM and 25 GB disk; official images are amd64 only (build them yourself on arm64, about ten minutes). Migrations do not go down, so rollback is a snapshot restore. The hosted version (getopen.so) has no free plan: a 7-day trial with a card on file, then Starter from $9/month (50K events, 1 site). The AI assistant is optional and needs OPENAI_API_KEY.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:25 UTC
- AT SOURCE: 2026-08-13 14:00 UTC
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

[Image] https://tesign.com/img/openanalytics-54526da961.png
