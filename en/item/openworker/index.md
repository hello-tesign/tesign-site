# OpenWorker

> Desktop AI coworker for daily tasks — Desktop AI coworker on your key or local Ollama; 25+ integrations, asks before acting.

- Page: https://tesign.com/en/item/openworker/
- JSON: https://tesign.com/en/item/openworker/index.json
- Korean Markdown: https://tesign.com/item/openworker/index.md
- Generated: 2026-09-15 19:35 UTC

## Numbers

- 17,820 stars — checked on GitHub 2026-09-15 19:34 UTC
- 7-day +22 observed via GH Archive (as of 2026-09-15 15:00 UTC)
- 24h +10 ★ · 30d +40 ★ (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: macos · windows
- CATEGORY: AI · PRODUCTIVITY
- Tags: ai-coworker · desktop-app · byok · ollama · security-review · mcp
- How to start: Install to use
- SOURCES: GitHub https://github.com/andrewyng/openworker
- INSTALL: http://openworker.com/

## ACTIVITY

- Last commit: 2026-09-03 04:12 UTC
- Latest release: v0.2.1 (2026-08-25)
- Contributors: 23
- Open issues (incl. PRs): 506
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The weight of this project is not model choice but a governance design where the agent cannot grant itself new permissions, and the whole of it can be read in the repo; it is still open beta, already past 17k stars.

## WHY IT MATTERS

An open-source AI coworker for the desktop that aims to hand back finished work rather than answers — a code review with vulnerability fixes ready, a document, a Slack reply with the numbers, a triaged inbox — shipping specialist Security coworkers first. It runs on your own key for OpenAI, Anthropic, Google and others or fully local via Ollama, and connects 25+ tools such as GitHub, Slack, Jira, Notion, Gmail and Google Calendar plus anything over MCP. Sending a message, changing a calendar or running a command is approval-gated by default, a set of 'hard floor' operations stays human-only even in auto-approve mode, and every tool call is logged with its approval provenance.

## BUILD FROM THIS

- Run scheduled automations — a morning brief, a weekly report, a standing watch over a channel — with full transcripts, or a team workflow where mentioning @OpenWorker in Slack opens a session on your desktop and returns the answer as a thread reply. The engine sits on aisuite (Python), so it also serves as a reference implementation for building your own agent harness.

## WHO IT'S FOR

- Developers automating code and dependency security checks — reviews that combine scanners such as semgrep with model reasoning, fixes re-scanned before approval
- Knowledge workers juggling tools — prep a customer call from CRM and inbox, handle calendar and Slack threads
- Teams designing agent governance — a reference for approval ladders, hard floors and audit trails

## START IN 5 MINUTES

```
# 1. Download for macOS (Apple Silicon, macOS 12+) at https://download.openworker.com/mac or Windows 10/11 x64 at https://download.openworker.com/windows, open the app, add a model key (or point it at Ollama), and ask for a task
# 2. From source (Python 3.10+, Node 20+, Rust toolchain; see the README for the server and UI steps that follow):
# git clone https://github.com/andrewyng/openworker
# cd openworker
# bash packaging/setup_dev_env.sh
```

## CAVEATS

- MIT licence. Open beta per the README — usable, still being polished.
- The macOS build is Apple Silicon only (macOS 12+, signed and notarized, auto-updates); the Windows x64 build is not yet code-signed so SmartScreen warns, and the homepage still lists Windows as 'coming soon'. No Linux build in the README.
- Model costs are on your own key (or local Ollama). The only cloud component is a small OAuth-brokering service for connectors; the app also works without sign-in using API keys. PRs outside the roadmap may not be approved.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:56 UTC
- AT SOURCE: 2026-07-20 01:52 UTC
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

[Image] https://tesign.com/img/openworker-5775ed8369.png
