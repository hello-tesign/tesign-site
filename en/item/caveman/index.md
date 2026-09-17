# caveman

> Token savings for agent users — Cuts an agent's token use by stripping prompts down to bare words.

- Page: https://tesign.com/en/item/caveman/
- JSON: https://tesign.com/en/item/caveman/index.json
- Korean Markdown: https://tesign.com/item/caveman/index.md
- Generated: 2026-09-17 19:00 UTC

## RANKS

- All-time #32 · Rising this week #49 · DEV TOOLS #6 (As of 2026-09-17 13:00 UTC)

## Numbers

- 106,309 stars — checked on GitHub 2026-09-17 18:40 UTC
- 7-day +234 observed via GH Archive (as of 2026-09-17 13:00 UTC)
- 24h +21 ★ · 30d +557 ★ (as of 2026-09-17 13:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: Go
- PLATFORM: cli
- CATEGORY: AI · DEV TOOLS
- Tags: tokens · prompting · agent-skills
- How to start: For developers
- SOURCES: GitHub https://github.com/juliusbrussee/caveman
- USE PACKAGE: https://docs.caveman.so/docs/quickstart

## ACTIVITY

- Last commit: 2026-09-17 16:46 UTC
- Latest release: v2.7.0 (2026-09-15)
- Contributors: 56
- Open issues (incl. PRs): 124
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:40 UTC

## TESIGN TAKE

A skill for output and a proxy for input; admitting that savings vary by case is what makes it credible.

## WHY IT MATTERS

The longer an agent's replies, the more tokens and cost go with them. caveman is a Claude Code skill that strips the agent's replies down to bare words, so the same content comes back in far less text. The repository claims a 65% token reduction, but that figure is its own. Written in Go; the skill is MIT and the bundled proxy engine BSL-1.1.

## BUILD FROM THIS

- A setting that trims output tokens on repeat jobs with long replies
- A cost experiment that measures the saving on the team's own tasks

## WHO IT'S FOR

- Solo developer — sees tokens leaking into long agent replies
- Team manager — measures, then trims, token cost on repeat jobs

## START IN 5 MINUTES

```
# Skill (MIT):
$ npx skills add JuliusBrussee/caveman
# Proxy (Node.js 22.13+):
$ npm install -g @caveman-ai/cli && caveman setup --install
$ caveman claude
```

## CAVEATS

- The skill only shortens output, and its rules cost 1 to 1.5k input tokens per turn
- On already-terse work it can cost more, as the README says
- The skill is MIT; the proxy engine is BSL-1.1 (hosting for others needs a licence)

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-04-04 10:03 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/caveman-ade8e8e709.png
