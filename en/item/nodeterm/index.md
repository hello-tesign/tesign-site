# nodeterm

> Terminals and agents on one canvas — Terminals and agents as canvas nodes; tmux sessions survive app quits, restore on reboot.

- Page: https://tesign.com/en/item/nodeterm/
- JSON: https://tesign.com/en/item/nodeterm/index.json
- Korean Markdown: https://tesign.com/item/nodeterm/index.md
- Generated: 2026-09-18 21:08 UTC

## Numbers

- 1,861 stars — checked on GitHub 2026-09-17 18:41 UTC
- 7-day +2 observed via GH Archive (as of 2026-09-18 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: TypeScript
- PLATFORM: macos · linux · windows · ios · web
- CATEGORY: AI · DEV TOOLS
- Tags: terminal · tmux · claude-code · agent-orchestration · kanban · canvas
- How to start: Install to use
- SOURCES: GitHub https://github.com/eneskirca/nodeterm
- INSTALL: https://nodeterm.dev/

## ACTIVITY

- Last commit: 2026-09-17 18:34 UTC
- Latest release: v0.3.7 (2026-09-16)
- Contributors: 39
- Open issues (incl. PRs): 79
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:41 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The real point is not the canvas but the decision to keep every session alive in tmux, with hook-driven agent status making it usable day to day. Note the licence is BUSL-1.1, source-available rather than OSI open source.

## WHY IT MATTERS

Running several coding agents at once, you lose track of which tab is doing what; nodeterm lays terminals and agents out on a pan/zoom canvas so you see them like a map. Each node runs in a persistent tmux session, so quitting the app or rebooting the machine brings scrollback and running agents back (the macOS app ships its own tmux), and hook-driven RUNNING / NEEDS YOU badges let you answer a permission prompt inside the node. Flip the same project to a kanban board and the cards are the live sessions.

## BUILD FROM THIS

- Set up a group bound to a git worktree with one agent per branch, teams of agents fed context through sticky notes, or context links between nodes so agents read each other's transcripts. Run the Server Edition on a Linux box to use the same canvas from a browser, and pick sessions up on the iOS app.

## WHO IT'S FOR

- Developers running several agents in parallel — place sessions spatially and answer NEEDS YOU prompts inside the node
- People who lose track of tabs (the README names ADHD explicitly) — a map-like workspace instead of hidden tabs
- Developers running agents on a remote host — reach the same sessions from the browser Server Edition and the iOS app

## START IN 5 MINUTES

```
# macOS via Homebrew (all three lines are required):
# brew tap nodeterm/tap
# brew trust nodeterm/tap
# brew install --cask nodeterm
# Or download the .dmg / AppImage / .deb / .rpm / Windows beta installer from https://nodeterm.dev
```

## CAVEATS

- Licence BUSL-1.1 (verified in the repo's LICENSE file; GitHub does not auto-detect it): use, modify, redistribute and production use allowed, but not offering it as a competing product or service; each release becomes MIT four years after publication.
- macOS (arm64, x64) and Linux (x64) are supported; Windows x64 is beta (unsigned installer, manual updates, session restore after restart still landing). The iOS app is a separate App Store install.
- v0.3.5 'early access' per the homepage. The app polls a self-hosted feed for updates and announcements.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:42 UTC
- AT SOURCE: 2026-06-15 21:25 UTC
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

[Image] https://tesign.com/img/nodeterm-4d11a6b933.png
