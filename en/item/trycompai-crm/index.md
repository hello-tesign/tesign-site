# Comp AI CRM

> CRM where the agent keeps the notes — CRM whose agent researches contacts on its own schedule and never writes a guess as fact.

- Page: https://tesign.com/en/item/trycompai-crm/
- JSON: https://tesign.com/en/item/trycompai-crm/index.json
- Korean Markdown: https://tesign.com/item/trycompai-crm/index.md
- Generated: 2026-09-23 04:12 UTC

## RANKS

- COMMERCE #2 (As of 2026-09-22 23:00 UTC)

## Numbers

- 10,740 stars — checked on GitHub 2026-09-23 01:49 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 23:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: COMMERCE · AI
- Tags: crm · ai-agent · sales · typescript · bun · self-hosted
- How to start: Self-host
- SOURCES: GitHub https://github.com/trycompai/crm
- SELF-HOST: https://trycrm.ai/

## ACTIVITY

- Last commit: 2026-09-11 07:06 UTC
- Latest release: v1.15.3 (2026-08-21)
- Contributors: 6
- Open issues (incl. PRs): 49
- Made by: an organization
- Checked on GitHub: 2026-09-23 01:49 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Few CRMs enforce 'leave it blank if unsure' in the tool design itself; the principle is that a blank beats a confident error.

## WHY IT MATTERS

Most CRMs are a database with a form in front; the AI ones bolt a chat box onto it. Comp AI CRM inverts that: the agent is its own deployment running its own schedule and work queue (rows leased with `FOR UPDATE SKIP LOCKED`), deciding what to look at next within a research budget and booking its own rechecks. Its 18 tools accept no confidence scores and report only what they observed; strong evidence writes to the record, weak evidence becomes a suggestion a human settles. With no API keys at all it still works by reading your own threads, meetings and signature blocks.

## BUILD FROM THIS

- Stand it up as a one-person CRM with Google or Microsoft sign-in and PostgreSQL (`ALLOWED_SIGN_IN` set to your own address), and because tools and skills are files, add research rules for your industry as markdown.

## WHO IT'S FOR

- Small B2B sales teams — contact and company records that fill themselves from mail and meetings
- Developers building agent products — a reference implementation of eve tools, skills, schedules and sandboxes
- Operators who care about data accuracy — weak evidence separated into suggestions a human settles

## START IN 5 MINUTES

```
# git clone https://github.com/trycompai/crm.git && cd crm
# cp .env.example .env          # then fill in BETTER_AUTH_SECRET, ALLOWED_SIGN_IN, Google or Microsoft OAuth
# bun install && docker compose up -d          # Postgres on :5432
# bun run db:deploy && bun run db:seed        # apply migrations + optional demo pipeline
# bun run dev   # app on localhost:3000, API on localhost:3001
```

## CAVEATS

- MIT licence. Needs Bun and Docker, and one of Google or Microsoft OAuth (or your own IdP) before anyone can sign in. Production is three deployments — app, API, agent — plus PostgreSQL, and the stack is written around Vercel (AI Gateway, Sandbox, Blob), Neon and Upstash; running elsewhere is [확인 필요]. Company brand data and LinkedIn lookups need a Context key and web research a Perplexity key, all optional. Single-tenant by design; telemetry is switched off with `CRM_TELEMETRY_DISABLED=1`.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:14 UTC
- AT SOURCE: 2026-07-31 21:38 UTC
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

[Image] https://tesign.com/img/trycompai-crm-b7a8054d4e.png
