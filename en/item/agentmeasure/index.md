# AgentMeasure

> Audit your Codex and Claude Code logs — Reads your Codex and Claude Code session logs and surfaces repeated failures and retries, with the evidence attached.

- Page: https://tesign.com/en/item/agentmeasure/
- JSON: https://tesign.com/en/item/agentmeasure/index.json
- Korean Markdown: https://tesign.com/item/agentmeasure/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 216 stars — checked on GitHub 2026-09-19 11:09 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- 2 Show HN points — observed 2026-09-22 01:35 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: cli
- CATEGORY: DEV TOOLS · AI
- Tags: 에이전트 점검 · claude code · codex · 로컬 분석
- How to start: Install to use
- SOURCES: Show HN https://github.com/roy-tong/AgentMeasure
- INSTALL: https://roy-tong.github.io/AgentMeasure

## ACTIVITY

- Last commit: 2026-09-19 09:23 UTC
- Latest release: [unconfirmed]
- Contributors: [unconfirmed]
- Open issues (incl. PRs): [unconfirmed]
- Made by: [unconfirmed]
- Checked on GitHub: 2026-09-19 11:09 UTC

## Signals and evidence

- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

Marking what it cannot prove as UNPROVABLE instead of quietly writing zero is what makes the numbers worth trusting.

## WHY IT MATTERS

An agent that edits the same file over and over, or hits one failed tool call after another, is easy to miss when it is buried in a log. AgentMeasure reads the session logs you already have and finds duplicate records, retry chains and consecutive tool failures — and when the evidence is not there it says UNPROVABLE rather than inventing a zero.

## BUILD FROM THIS

- Written in Python and published on PyPI, so pipx runs it with no repository checkout. There is a demo mode with no personal logs needed, a check command over the last seven days, and a flag to force the Claude Code adapter. All analysis runs locally with no network calls, and the result is a terminal summary plus a local HTML report.

## WHO IT'S FOR

- Developers who use Codex or Claude Code daily, and anyone building or maintaining agent tooling.

## START IN 5 MINUTES

```
# Run pipx run agentmeasure demo first to see it on a synthetic example.
```

## CAVEATS

- It is built around the log formats Codex and Claude Code write, so sessions from other tools are not covered, and the repository marks its billing/settlement feature (settle) as still a concept.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-19 10:09 UTC
- AT SOURCE: 2026-09-19 09:16 UTC
- KEPT: 2026-09-22 05:53 UTC
- Published on TESIGN: 2026-09-22 05:53 UTC
- Text last updated: 2026-09-22 05:53 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/agentmeasure-50e9355166.png
