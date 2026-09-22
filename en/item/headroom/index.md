# Headroom

> Compress what your agent reads — Compresses tool output, logs and files before they reach the model.

- Page: https://tesign.com/en/item/headroom/
- JSON: https://tesign.com/en/item/headroom/index.json
- Korean Markdown: https://tesign.com/item/headroom/index.md
- Generated: 2026-09-22 05:53 UTC

## RANKS

- All-time #74 (As of 2026-09-21 20:00 UTC)

## Numbers

- 73,417 stars — checked on GitHub 2026-09-22 00:38 UTC
- 7-day +40 observed via GH Archive (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: windows · macos · linux · cli
- CATEGORY: AI · LIBRARY
- Tags: context · tokens · mcp
- How to start: For developers
- SOURCES: GitHub https://github.com/headroomlabs-ai/headroom
- USE PACKAGE: https://docs.headroomlabs.ai/docs

## ACTIVITY

- Last commit: 2026-09-21 23:48 UTC
- Latest release: v0.38.0 (2026-09-21)
- Contributors: 273
- Open issues (incl. PRs): 702
- Made by: an organization
- Checked on GitHub: 2026-09-22 00:38 UTC

## TESIGN TAKE

It drops in as a proxy without touching agent code, so you can measure savings on your own traffic first.

## WHY IT MATTERS

Tool output and logs usually reach the model untouched, pushing the context that matters out of the window. headroom sits in front of that path and compresses tool output, logs, files and RAG chunks before they are sent. It attaches as a library, a proxy or an MCP server and is published under Apache-2.0. The repository claims 20% fewer tokens for coding agents and 60-95% for JSON; those figures are its own.

## BUILD FROM THIS

- A proxy in front of the agent that shrinks long logs on the way through
- An internal RAG preprocessing step that lowers token cost

## WHO IT'S FOR

- Developer — long logs and tool output keep crowding the context
- Infra owner — cuts team-wide token cost at the proxy layer
- RAG developer — shrinks retrieved chunks before they reach the model

## START IN 5 MINUTES

```
$ pip install "headroom-ai[all]"
$ headroom wrap claude
$ headroom doctor
# Proxy mode with no code changes:
$ headroom proxy --port 8787
```

## CAVEATS

- headroom wrap also installs Serena at user scope (skip with --code-memory none)
- Intel Macs have no native wheel; the README points to the Docker install
- Savings are the repository's own benchmark and grow with repetitive data

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-01-07 19:58 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/headroom-9b4b13570c.png
