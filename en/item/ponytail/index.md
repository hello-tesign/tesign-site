# ponytail

> Make your agent write less code — Makes a coding agent ask whether the code needs writing at all.

- Page: https://tesign.com/en/item/ponytail/
- JSON: https://tesign.com/en/item/ponytail/index.json
- Korean Markdown: https://tesign.com/item/ponytail/index.md
- Generated: 2026-09-23 04:12 UTC

## RANKS

- All-time #14 · Rising this week #7 · AI #13 · DEV TOOLS #2 (As of 2026-09-22 23:00 UTC)

## Numbers

- 144,455 stars — checked on GitHub 2026-09-23 01:48 UTC
- 7-day +262 observed via GH Archive (as of 2026-09-22 23:00 UTC)
- 24h +12 ★ · 30d +3,476 ★ (as of 2026-09-22 23:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: [unconfirmed]
- CATEGORY: AI · DEV TOOLS
- Tags: agent-skills · code-quality · yagni
- How to start: For developers
- SOURCES: GitHub https://github.com/dietrichgebert/ponytail
- USE PACKAGE: https://ponytail.dev/

## ACTIVITY

- Last commit: 2026-09-14 14:34 UTC
- Latest release: v4.10.0 (2026-09-14)
- Contributors: 66
- Open issues (incl. PRs): 297
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:48 UTC

## TESIGN TAKE

The rule that matters: remove code that need not exist, but never cut validation, security or accessibility.

## WHY IT MATTERS

Hand work to a coding agent and abstractions and options nobody asked for tend to arrive with it. ponytail makes the agent behave like the laziest senior developer in the room, biasing it towards removing code that does not need to exist. It attaches as a skill or rule set to tools such as Claude Code and Cursor, under the MIT license.

## BUILD FROM THIS

- A default agent configuration matching the team's coding rules
- A pre-review rule set that strips out the padding first

## WHO IT'S FOR

- Solo developer — the agent keeps adding abstractions nobody asked for
- Team lead — wants a default rule that strips padding before review

## START IN 5 MINUTES

```
# In the Claude Code prompt, as two separate messages:
# /plugin marketplace add DietrichGebert/ponytail
# /plugin install ponytail@ponytail
# Codex:
$ codex plugin marketplace add DietrichGebert/ponytail
$ codex plugin add ponytail@ponytail
```

## CAVEATS

- The Claude Code and Codex plugins need Node.js on PATH for their hooks
- On reasoning-heavy models such as GPT-5.5 it can cost more, per the README
- The savings figures are the repository's own benchmark

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-06-12 00:52 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/ponytail-843be3c1b7.png
