# Spec Kit

> Spec-first process for coding agents — Makes your coding agent write the spec first, then plan, build and verify against it.

- Page: https://tesign.com/en/item/spec-kit/
- JSON: https://tesign.com/en/item/spec-kit/index.json
- Korean Markdown: https://tesign.com/item/spec-kit/index.md
- Generated: 2026-09-15 20:32 UTC

## RANKS

- All-time #16 · Rising this week #9 · AI #14 · DEV TOOLS #3 (As of 2026-09-15 15:00 UTC)

## Numbers

- 137,017 stars — checked on GitHub 2026-09-15 19:33 UTC
- 7-day +520 observed via GH Archive (as of 2026-09-15 15:00 UTC)
- 24h +23 ★ · 30d +677 ★ (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: cli · windows · macos · linux
- CATEGORY: DEV TOOLS · AI
- Tags: spec-driven-development · coding-agents · cli · workflow · github · agent-skills
- How to start: Install to use
- SOURCES: GitHub https://github.com/github/spec-kit
- INSTALL: https://github.github.com/spec-kit

## ACTIVITY

- Last commit: 2026-09-15 17:30 UTC
- Latest release: v1.0.7 (2026-09-15)
- Contributors: 295
- Open issues (incl. PRs): 327
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:33 UTC

## TESIGN TAKE

If your agent's output swings every run, GitHub's answer is to fix the documents you feed it before the code.

## WHY IT MATTERS

Spec Kit gives your coding agent structured context instead of ad-hoc prompts, keeping intent and evidence ahead of implementation. It pins one order — constitution → specify → plan → tasks → implement → converge — as /speckit-* skills inside the agent's chat and leaves each step behind as a document. It is GitHub's own MIT toolkit: the repository opened in August 2025 and v1.0.6 shipped on 2026-09-10.

## BUILD FROM THIS

- A Python terminal tool, specify-cli, installed with uv; `specify init` writes the command files and the `.specify/` directory layout for the agent you pick. Three processes are independent entry points: Spec-Driven Development ships in core, while bug fixing (`specify extension add bug` → assess → fix → test) and idea assessment (`specify extension add assess` → intake → research → define → shape → decide) are bundled extensions you add when needed. Extensions, presets, workflows and bundles reshape the process, organisations can host their own catalogs, and the official docs list 38 agent integrations — Copilot, Claude Code, Codex, Gemini, Cursor, Zed and others — selected by one integration key.

## WHO IT'S FOR

- Solo builders shipping with a coding agent — write the spec, plan and tasks first, then have the agent implement against them
- Teams whose bugs keep returning — separate assess → fix → test so cause, fix and verification each land in `.specify/bugs/`
- Planners deciding whether to build at all — run intake → decide in a folder with no code and get a go / needs-clarification / kill verdict

## START IN 5 MINUTES

```
# Prerequisites (README): Python 3.11+, uv, and a supported AI coding agent on Linux, macOS, or Windows
# Terminal:
# uv tool install specify-cli
# specify init my-project --integration copilot
# cd my-project
# → Launch your coding agent in the project directory and invoke each skill in its chat, one at a time, reviewing the result before continuing:
# /speckit-constitution Create principles focused on code quality, testing, and maintainability.
# /speckit-specify Build a photo organizer with albums grouped by date and a tile preview of each album.
# /speckit-plan Use Vite with vanilla JavaScript. Keep images local and store metadata in SQLite.
# /speckit-tasks
# /speckit-implement
# /speckit-converge
# (Replace copilot with another integration key — claude, codex, gemini … — to set up a different agent)
```

## CAVEATS

- MIT licence — commercial use, modification and redistribution allowed. Spec Kit itself is free, but no coding agent is included; you bring your own (README prerequisite) and that agent writes the actual code. It is a terminal tool that needs Python 3.11+ and uv installed first, and the /speckit-* steps are skills invoked in the agent's chat, not shell commands — spelling differs by agent (/speckit-…, $speckit-…, /skill:speckit-…). The official page states Windows, macOS and Linux support and operation offline and behind firewalls. Examples default to GitHub Copilot, so other agents need one look at the integrations reference. Currently v1.0.6 (2026-09-10), a stable release; the 1.0 line is recent, so check the Upgrade guide when commands or layout change between releases.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2025-08-21 22:54 UTC
- KEPT: 2026-09-15 14:07 UTC
- Published on TESIGN: 2026-09-15 14:07 UTC
- Text last updated: 2026-09-15 14:07 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/spec-kit-d6ed4d1559.png
