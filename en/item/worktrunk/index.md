# Worktrunk

> Git worktrees for parallel agents — Manages Git worktrees for running several coding agents in parallel.

- Page: https://tesign.com/en/item/worktrunk/
- JSON: https://tesign.com/en/item/worktrunk/index.json
- Korean Markdown: https://tesign.com/item/worktrunk/index.md
- Generated: 2026-09-23 02:05 UTC

## Numbers

- 8,344 stars — checked on GitHub 2026-09-23 01:48 UTC
- 7-day +21 observed via GH Archive (as of 2026-09-22 21:00 UTC)
- 24h +2 ★ · 30d +73 ★ (as of 2026-09-22 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: Rust
- PLATFORM: macos · linux · windows · cli
- CATEGORY: DEV TOOLS
- Tags: git · worktrees · agents
- How to start: Install to use
- SOURCES: GitHub https://github.com/max-sixty/worktrunk
- INSTALL: https://worktrunk.dev/

## ACTIVITY

- Last commit: 2026-09-22 19:37 UTC
- Latest release: v0.79.0 (2026-09-21)
- Contributors: 75
- Open issues (incl. PRs): 40
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:48 UTC

## TESIGN TAKE

Addressing worktrees by branch name removes the actual friction in running agents in parallel.

## WHY IT MATTERS

Attach several agents at once and branches and working folders begin to overwrite each other. worktrunk reduces creating, switching and removing Git worktrees to single commands, assuming a flow where every agent gets its own isolated folder. It is a CLI written in Rust; no license is declared in the repository, so check that before adopting it.

## BUILD FROM THIS

- An internal flow that gives every agent its own working folder
- An end-of-day script that clears finished parallel work

## WHO IT'S FOR

- Solo developer — gives each agent its own working folder
- Team developer — opens a PR branch straight into a worktree

## START IN 5 MINUTES

```
# macOS and Linux (Homebrew):
$ brew install worktrunk && wt config shell install
# Windows (winget; the command is git-wt):
$ winget install max-sixty.worktrunk
$ git-wt config shell install
$ wt switch --create feature-auth
```

## CAVEATS

- GitHub metadata shows no license; the README badge says MIT OR Apache-2.0
- Shell integration (wt config shell install) is required to change directories
- On Windows wt clashes with Windows Terminal, so it installs as git-wt

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2025-10-17 22:13 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/worktrunk-47fd19d15d.png
