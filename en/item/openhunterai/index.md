# OpenHunterAI

> Local AI red-team workspace — An alpha-stage local workspace that runs attacker-style security assessments — strictly against public targets you own or are authorized to test.

- Page: https://tesign.com/en/item/openhunterai/
- JSON: https://tesign.com/en/item/openhunterai/index.json
- Korean Markdown: https://tesign.com/item/openhunterai/index.md
- Generated: 2026-09-25 03:06 UTC

## Numbers

- 326 stars — checked on GitHub 2026-09-25 02:58 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-23 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: TypeScript
- PLATFORM: web · cli
- CATEGORY: SECURITY · AI
- Tags: security-testing · ai-red-team · local-first · authorized-testing · alpha
- How to start: Self-host
- SOURCES: GitHub https://github.com/lumoslab-innovation/openhunterai
- SELF-HOST: https://lumoslab-innovation.github.io/OpenHunterAI

## ACTIVITY

- Last commit: 2026-09-14 13:22 UTC
- Latest release: v0.1.0-preview.1 (2026-09-07) · pre-release
- Contributors: 4
- Open issues (incl. PRs): 5
- Made by: an organization
- Checked on GitHub: 2026-09-25 02:58 UTC

## TESIGN TAKE

A security tool that calls itself alpha and states upfront that an empty report proves nothing is rare, and that honesty is itself reassuring.

## WHY IT MATTERS

OpenHunterAI brings scope, scan activity, findings and remediation guidance into one local workspace with no signup. It only proceeds after verifying domain ownership and getting human approval on the scan plan, gathering signals through browser inspection, recon, ZAP and a Nuclei adapter for the AI to test bounded hypotheses against. As its own README states, it's alpha software — "a healthy workspace or an empty report does not prove a target is secure" — and it avoids destructive actions, gating sensitive validation behind separate approval.

## BUILD FROM THIS

- Run an attacker-style checklist against your own web app or API before a release
- Wire it into a coding agent (Codex, Claude Code, Gemini CLI) as a skill so a scan only starts after explicit approval
- Use its report/retest flow as a template for a human-verified security review process

## WHO IT'S FOR

- A small team that wants to regularly check its own service's security
- A developer who wants a coding agent to run approval-gated security checks
- Anyone who wants hands-on practice with recon tooling, strictly on authorized targets

## START IN 5 MINUTES

```
# Requires Git, Node.js 22+, Docker with Compose v2
$ git clone https://github.com/LumosLab-Innovation/OpenHunterAI.git
$ cd OpenHunterAI
$ node ops/local.mjs start
# → open http://localhost:3001, set model keys in .env.local, create a project, verify its domain, approve scope, then start a scan
# (resolve the documented Nuclei template-policy blocker before scanning)
```

## CAVEATS

- PolyForm Noncommercial 1.0.0 — source-available; commercial use needs a separate licence
- Alpha stage; the README states plainly that an empty report does not prove a target is secure
- "Local" means the workspace runs on your machine, not permission to scan localhost or private networks; the Nuclei adapter doesn't yet ship a reviewed template bundle

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-14 23:20 UTC
- AT SOURCE: 2026-05-25 17:58 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/openhunterai-0f4f939d83.png
