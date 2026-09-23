# Omnigent

> One control layer for coding agents — One control layer over Claude Code, Codex, Cursor and more, reachable from any device

- Page: https://tesign.com/en/item/omnigent/
- JSON: https://tesign.com/en/item/omnigent/index.json
- Korean Markdown: https://tesign.com/item/omnigent/index.md
- Generated: 2026-09-23 04:12 UTC

## Numbers

- 10,165 stars — checked on GitHub 2026-09-23 01:48 UTC
- 7-day +2 observed via GH Archive (as of 2026-09-22 23:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: cli · macos · linux · windows · web
- CATEGORY: AI · DEV TOOLS
- Tags: ai-agents · orchestration · claude-code · codex · multi-agent · python
- How to start: Install to use
- SOURCES: GitHub https://github.com/omnigent-ai/omnigent
- INSTALL: https://omnigent.ai/

## ACTIVITY

- Last commit: 2026-09-23 01:39 UTC
- Latest release: v0.14.0 (2026-09-15)
- Contributors: 264
- Open issues (incl. PRs): 1,437
- Made by: an organization
- Checked on GitHub: 2026-09-23 01:48 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Instead of one more agent, it puts a swap-and-supervise layer over the agents you already run — read it together with the alpha label.

## WHY IT MATTERS

Sessions follow the person: a conversation started in the terminal continues in the browser (localhost:6767) or on a phone on the same network, with messages, sub-agents, terminals and files in sync. An agent is one YAML file (prompt, tools, sub-agents), and policies — ask before shell commands, cap tool calls per session, a dollar spend cap such as max_cost_usd 5.00 — stack across server, agent and session. The example agent Polly splits work across coding sub-agents and routes each diff to a reviewer from a different vendor.

## BUILD FROM THIS

- A Polly-style pipeline where a different vendor reviews each diff, or a shared team agent server (docker compose) with spend caps and invite-only signup.

## WHO IT'S FOR

- Developers running several coding agents — mix Claude Code and Codex in one session
- Team leads — a shared agent server with spend caps and approval policies
- People on the move — follow an agent running on the laptop from a phone

## START IN 5 MINUTES

```
# curl -fsSL https://raw.githubusercontent.com/omnigent-ai/omnigent/main/scripts/install_oss.sh | sh   # option A (installer)
# uv tool install omnigent        # or: manual (pip install "omnigent" also works)
# brew install omnigent-ai/tap/omnigent   # or: Homebrew
# omnigent
# omnigent claude                      # Claude Code, in a session your team can join
```

## CAVEATS

- Apache-2.0. Both the README badge and the homepage mark the status alpha. Anonymized usage telemetry is on by default; opting out is documented separately. Needs Python 3.12+, Node.js 22+ and tmux; bubblewrap is mandatory on Linux. Windows runs in a 'degraded mode' (no tmux terminal wrappers, no filesystem or network sandboxing). A macOS desktop app is offered. Model costs follow your own keys or subscriptions.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:16 UTC
- AT SOURCE: 2026-06-11 12:18 UTC
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

[Image] https://tesign.com/img/omnigent-7e2847f0a5.png
