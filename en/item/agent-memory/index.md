# agent-memory

> Long-term memory for agent users — Keeps what an agent learned as Markdown files it can search and reread.

- Page: https://tesign.com/en/item/agent-memory/
- JSON: https://tesign.com/en/item/agent-memory/index.json
- Korean Markdown: https://tesign.com/item/agent-memory/index.md
- Generated: 2026-09-25 03:06 UTC

## Numbers

- 965 stars — checked on GitHub 2026-09-25 02:58 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-23 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: cli
- CATEGORY: AI · DEV TOOLS
- Tags: agent-memory · markdown · local-first · mcp
- How to start: Install to use
- SOURCES: GitHub https://github.com/tigerless-labs/agent-memory
- INSTALL: https://github.com/tigerless-labs/agent-memory

## ACTIVITY

- Last commit: 2026-09-24 15:35 UTC
- Latest release: no releases
- Contributors: 8
- Open issues (incl. PRs): 9
- Made by: an organization
- Checked on GitHub: 2026-09-25 02:58 UTC

## TESIGN TAKE

It refuses to choose between a retrieval engine and a plain filesystem, and layers both on one store.

## WHY IT MATTERS

Close a session and the agent forgets everything it learned there. agent-memory stores memories as Markdown files, ranks them with a SQLite index beside them, and answers with file paths rather than pasted text so the agent reads only as deep as needed. Writes fire at conversation boundaries, a separate sleep-time pass consolidates, and none of it needs an API key. Claude Code and Codex CLI share one store under MIT; no PyPI release yet, so it installs from a checkout.

## BUILD FROM THIS

- A shared memory store where the agent finds last week's decisions again
- A setup where Claude Code and Codex draw on the same context
- A weekly routine that turns stale memories into proposals to confirm

## WHO IT'S FOR

- Daily agent user — tired of re-explaining the same context each session
- Two-CLI user — wants Claude Code and Codex to share one memory

## START IN 5 MINUTES

```
$ git clone https://github.com/tigerless-labs/agent-memory.git
$ cd agent-memory
$ uv sync --all-packages
$ mem init
$ mem setup --host claude-code   # or: --host codex
# Needs Python 3.12+ and uv · put .venv/bin on PATH or the hook records nothing
```

## CAVEATS

- No PyPI release yet; install from a checkout
- Version 0.1.0; the MCP surface is narrower than the CLI
- Judgement is borrowed from the host CLI, so a host agent is required

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-09-01 21:52 UTC
- KEPT: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/og/agent-memory.en.png
