# MiMo Code

> Terminal coding agent with memory — Xiaomi's terminal coding agent with cross-session memory, subagents and voice input

- Page: https://tesign.com/en/item/mimo-code/
- JSON: https://tesign.com/en/item/mimo-code/index.json
- Korean Markdown: https://tesign.com/item/mimo-code/index.md
- Generated: 2026-09-22 07:26 UTC

## Numbers

- 13,253 stars — checked on GitHub 2026-09-22 00:38 UTC (+2 observed since the check)
- 7-day +5 observed via GH Archive (as of 2026-09-22 03:00 UTC)
- 24h +5 ★ · 30d +13 ★ (as of 2026-09-22 03:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: cli · macos · windows · linux
- CATEGORY: AI · DEV TOOLS
- Tags: coding-agent · cli · terminal · xiaomi · opencode-fork · ai
- How to start: Install to use
- SOURCES: GitHub https://github.com/xiaomimimo/mimo-code
- INSTALL: https://mimo.xiaomi.com/mimocode

## ACTIVITY

- Last commit: 2026-09-21 23:00 UTC
- Latest release: v0.1.14 (2026-09-02)
- Contributors: 21
- Open issues (incl. PRs): 1,029
- Made by: an organization
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Importing another coding agent's auth so you can start at once is the entry strategy; memory and checkpoints are the difference it wants to keep.

## WHY IT MATTERS

On top of an OpenCode fork it adds persistent memory backed by SQLite FTS5 (MEMORY.md, checkpoint.md, notes.md, tasks/): when context nears the limit it rebuilds from the latest checkpoint, and memory is injected automatically on resume. Sign-in is Xiaomi MiMo OAuth, Codex (ChatGPT) OAuth, an import of existing Claude Code auth, or an API key / OpenAI-compatible custom endpoint. `/goal` has a separate judge model check the stop condition to prevent optimistic stops, and `/voice` streams speech via TenVAD and MiMo ASR.

## BUILD FROM THIS

- Model your own deterministic multi-phase pipeline on the four built-in workflows (compose, deep-research, fact-check, research-experiment) as a JS file in `.mimocode/workflows/`.

## WHO IT'S FOR

- Terminal coding-agent users — try it with your existing Claude Code / Codex auth
- Developers running long tasks — resume sessions from checkpoints and memory
- Researchers — deep-research and fact-check workflows, the arXiv skill

## START IN 5 MINUTES

```
# curl -fsSL https://mimo.xiaomi.com/install | bash                          # macOS / Linux
# powershell -ep Bypass -c "irm https://mimo.xiaomi.com/install.ps1 | iex"   # Windows PowerShell
# npm install -g @mimo-ai/cli                                                # or via npm (all platforms)
# mimo
```

## CAVEATS

- The source is MIT, but a separate USE_RESTRICTIONS.md applies (no military use, no high-risk autonomous actions without human oversight, among others), and Xiaomi-hosted services fall under the MiMo Terms of Service. Model costs follow whichever route you pick (Xiaomi platform, Codex subscription, API key). The built-in macOS Terminal.app is not supported (iTerm2 or the VS Code terminal recommended). Voice input is for MiMo logged-in users by default (OpenRouter or a self-hosted relay can be configured separately) and needs sox. Windows, macOS, Linux.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:16 UTC
- AT SOURCE: 2026-06-10 11:52 UTC
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

[Image] https://tesign.com/img/mimo-code-321db9ebd5.jpg
