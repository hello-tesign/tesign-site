# OpenMausBot

> Your local agents as chat contacts — Chat app where every contact is an AI agent running on your own claude, codex or grok CLI

- Page: https://tesign.com/en/item/openmausbot/
- JSON: https://tesign.com/en/item/openmausbot/index.json
- Korean Markdown: https://tesign.com/item/openmausbot/index.md
- Generated: 2026-09-22 07:26 UTC

## Numbers

- 3,212 stars — checked on GitHub 2026-09-22 00:38 UTC
- 7-day +57 observed via GH Archive (as of 2026-09-22 03:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: macos · windows · linux · cli
- CATEGORY: AI
- Tags: ai-agents · electron · claude-code · codex · local-first · mcp
- How to start: Install to use
- SOURCES: GitHub https://github.com/milind-soni/openmausbot
- INSTALL: https://openmausbot.com/

## ACTIVITY

- Last commit: 2026-09-21 23:35 UTC
- Latest release: v0.1.85 (2026-09-20)
- Contributors: 87
- Open issues (incl. PRs): 270
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

It treats several agents as a team chat rather than one assistant, and does it on your own machine without a new cloud account.

## WHY IT MATTERS

It takes Grok Bot's idea that several agents belong in a messaging app rather than one assistant box, and rebuilds it open and local-first on the CLIs you already have. Each bot keeps its own personality, model, computer and connected apps, and each channel its own working folder; shell commands and file edits appear as Allow/Deny cards in the chat, and transcripts and keys stay in ~/.openmausbot. Releases ship a signed and notarized macOS .dmg, a Windows x64 installer and an Ubuntu 24.04 .deb.

## BUILD FROM THIS

- Add an engine with one file in server/drivers/, plug in any ACP-speaking CLI or OpenAI-compatible endpoint through config alone, or drive the bot team from Claude Desktop or Cursor through the bundled MCP server.

## WHO IT'S FOR

- Subscribers to coding agents — run several bots with different models and personalities from one chat window
- Solo business owners — connect Gmail, Slack or Notion through Composio and hand off routine tasks (optional third-party service)
- Developers — add engines through the driver SPI and control the team over MCP

## START IN 5 MINUTES

```
# git clone https://github.com/milind-soni/OpenMausBot && cd OpenMausBot
# pnpm install
# pnpm dev:server    # harness server → 127.0.0.1:8799
# pnpm dev           # app → http://127.0.0.1:5199
# # Packaged: .dmg / OpenMausBot-setup.exe / .deb from GitHub Releases, or npm install -g openmausbot then openmausbot
```

## CAVEATS

- Licence Apache-2.0, except the enterprise/ folder, which is source-available under its own licence (delete it for the pure open-source edition). The app is free, but bots use the claude, codex or grok CLI subscriptions you are already signed into; running from source needs Node 24+ and pnpm.
- macOS (Apple silicon and Intel) ships a signed and notarized .dmg, the Windows x64 installer is not yet code-signed so SmartScreen warns, and Ubuntu 24.04 is beta (bot control of the local computer is disabled on Wayland).
- Cloud computers (Box, paid after trial), connected apps (Composio) and voice (ElevenLabs) are optional third-party services; the README calls the project 'early but real'.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:39 UTC
- AT SOURCE: 2026-08-11 18:58 UTC
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

[Image] https://tesign.com/img/openmausbot-eec86b9ec3.png
