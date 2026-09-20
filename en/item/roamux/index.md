# roamux

> Steer your coding agents from a phone — Lets you watch and steer coding agents on your own machine from a phone.

- Page: https://tesign.com/en/item/roamux/
- JSON: https://tesign.com/en/item/roamux/index.json
- Korean Markdown: https://tesign.com/item/roamux/index.md
- Generated: 2026-09-20 03:36 UTC

## Numbers

- 3 stars — checked on GitHub 2026-09-19 22:58 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-19 22:00 UTC)
- 2 Show HN points — observed 2026-09-19 04:16 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: macos · linux · cli · web
- CATEGORY: AI · DEV TOOLS
- Tags: agents · remote-control · claude-code · codex
- How to start: Install to use
- SOURCES: Show HN https://github.com/phyra-research/roamux
- INSTALL: https://remote.phyra.ai/

## ACTIVITY

- Last commit: 2026-09-17 04:56 UTC
- Latest release: v0.2.0 (2026-09-13)
- Contributors: 2
- Open issues (incl. PRs): 11
- Made by: an organization
- Checked on GitHub: 2026-09-19 22:58 UTC

## Signals and evidence

- FOUND EARLY · 2 ★ WHEN FIRST SEEN
- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

Instead of moving the agent to the cloud, it moves only the cockpit out of the room.

## WHY IT MATTERS

Give a coding agent a long task and you are stuck at the desk until its next permission request. roamux installs a small host daemon that dials out, so an authenticated phone or browser can start sessions, watch progress, approve or deny requests and review changed files. Code, credentials and model keys never leave the machine; the cloud handles only labels and ids. It drives OpenCode, Claude Code or Codex as you already run them; MIT, hosts for macOS and Linux.

## BUILD FROM THIS

- An overnight refactor you approve from your phone as it runs
- A home machine kept as the agent host while you are out
- A team view of agent sessions across several machines

## WHO IT'S FOR

- Developer on agents — wants to leave the desk during long runs
- Security-first team — code and keys must stay on the box

## START IN 5 MINUTES

```
# First install and sign in to one of OpenCode, Claude Code or Codex
$ curl -fsSL https://remote.phyra.ai/install.sh | sh
$ roamux login
$ cd ~/your/project
$ AGENT_ADAPTER=claude-code roamux host      # or opencode | codex
# Then open remote.phyra.ai on your phone or browser and start a New Session
```

## CAVEATS

- Host runs on macOS and Linux; Windows is not in the README
- The agent auto-accepts file edits, so point it at a git repo
- One host serves one agent; run several hosts for several agents

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:29 UTC
- AT SOURCE: 2026-09-13 08:20 UTC
- KEPT: 2026-09-14 02:41 UTC
- Published on TESIGN: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/og/roamux.en.png
