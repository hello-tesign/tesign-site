# Adrafinil

> Mac wake-lock for agent users — Keeps a Mac awake only while a coding agent works, lid closed or not; normal sleep after.

- Page: https://tesign.com/en/item/adrafinil/
- JSON: https://tesign.com/en/item/adrafinil/index.json
- Korean Markdown: https://tesign.com/item/adrafinil/index.md
- Generated: 2026-09-15 19:35 UTC

## Numbers

- 475 stars — checked on GitHub 2026-09-15 19:34 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-15 15:00 UTC)
- 124 Show HN points — observed 2026-09-13 15:42 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos
- CATEGORY: AI · PRODUCTIVITY
- Tags: macos · menu-bar · keep-awake · claude-code · agent-hooks · swift
- How to start: Install to use
- SOURCES: Show HN https://github.com/kageroumado/adrafinil · GitHub https://github.com/kageroumado/adrafinil
- INSTALL: https://kagerou.glass/adrafinil

## ACTIVITY

- Last commit: 2026-08-24 01:08 UTC
- Latest release: v1.7.0 (2026-08-24)
- Contributors: 4
- Open issues (incl. PRs): 2
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

A small utility that reframes the problem from 'always awake' to 'awake only while there is work', notable for isolating the root-level sleep control in a separate helper that exposes a single setSleepBlocked call. It needs macOS 26.4 or later.

## WHY IT MATTERS

Leave caffeinate or Amphetamine on for an overnight agent and the Mac stays awake long after the work ends; Adrafinil has agent hooks call acquire when a turn starts and release when it stops, blocking sleep (including lid-closed clamshell sleep) only while work is actually running, and returning to normal sleep the moment the last session lets go. One click installs hooks for nine agents (Claude Code, Codex, Cursor, Gemini CLI, Aider, Hermes, OpenCode, Cline, Pi), the CLI round-trips in under 50 ms so it never stalls an agent, and a thermal cutout releases every hold if temperature crosses a threshold with the lid closed.

## BUILD FROM THIS

- Wrap any tool that has hooks with `adrafinil acquire` / `release`, bracket hookless commands in the shell, or place a timed hold with `adrafinil hold --for 2h`. Through the bundled MCP tool (`adrafinil mcp`) an agent can ask to stay awake for a long build or deploy that outlives its reply.

## WHO IT'S FOR

- Mac users who leave agents working overnight — awake only while the agent works, even with the lid closed, then normal sleep
- People who carry a laptop in a bag — a thermal cutout, a lid-close chime and a summary when you reopen
- Developers running long builds or deploys — the agent requests a timed hold over MCP or the CLI

## START IN 5 MINUTES

```
# brew install --cask adrafinil
# Or open the signed, notarized DMG from https://github.com/kageroumado/adrafinil/releases/latest and drag Adrafinil to Applications (the first launch asks for admin rights once)
# Wire agent hooks from the in-app installer with one click, or via the CLI: adrafinil install-hooks
```

## CAVEATS

- MIT licence.
- Requires macOS Tahoe 26.4 or later (the author tests only on 26.4; a backport fork for macOS 15 Sequoia is maintained by someone else). The standard install needs admin rights — lid-closed sleep is overridden by a root helper using `pmset disablesleep`.
- Custom agents without hooks are not auto-detected, so pair every acquire with a release; the idle-release timeout and per-hold time limits are the safety net.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:31 UTC
- AT SOURCE: 2026-06-27 20:34 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 07:17 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/adrafinil-adfd4c6c66.png
