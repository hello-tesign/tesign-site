# MartinLoop

> Execution-control CLI for coding agents — Wraps a coding agent with a spend cap and a verifier, so "I'm done" comes with an evidence-backed receipt instead of just a claim.

- Page: https://tesign.com/en/item/martin-loop/
- JSON: https://tesign.com/en/item/martin-loop/index.json
- Korean Markdown: https://tesign.com/item/martin-loop/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 190 stars — checked on GitHub 2026-09-22 00:39 UTC
- 7-day +25 observed via GH Archive (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: cli
- CATEGORY: DEV TOOLS · AI
- Tags: ai-agents · coding-agent · governance · budget-control · cli
- SOURCES: GitHub https://github.com/keesan12/martin-loop
- TRY: https://martinloop.com/

## ACTIVITY

- Last commit: 2026-09-19 02:58 UTC
- Latest release: v0.6.5 (2026-09-19)
- Contributors: 5
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:39 UTC

## TESIGN TAKE

It doesn't try to make the agent smarter — it treats uncontrolled execution by an already-capable agent as the actual problem, which is a sharper framing than most.

## WHY IT MATTERS

A task that looks like a small fix can turn into dozens of retries, a blown budget, and a diff nobody trusts. MartinLoop wraps a coding agent (Claude Code, Codex, and others) with one execution contract — objective, verifier command, budget, iteration cap — around the run. Completion only fires when fresh verifier evidence is bound to that specific run and workspace ("VERIFIED" means the configured checks passed, not that the code is bug-free), and every run leaves a receipt you can re-inspect with martin dossier.

## BUILD FROM THIS

- Put a hard budget and attempt cap on a task handed to a coding agent
- Bind an independent verifier command (e.g. npm test) so completion needs passing evidence, not just a claim
- Compare outcomes across different agents using the same receipt format

## WHO IT'S FOR

- A developer who hands tasks to a coding agent and has to review the results
- A team that's been burned by an agent run costing more than expected
- Anyone who wants to compare different agents or models under one governed flow

## START IN 5 MINUTES

```
# Try it now:
$ npx -y martin-loop@latest start
$ npx -y martin-loop@latest demo
$ cd martin-loop-demo && npm install
$ npx -y martin-loop@latest run "describe the task" --verify "npm test" --budget-usd 2 --max-iterations 1
$ npx -y martin-loop@latest dossier --latest
```

## CAVEATS

- Apache-2.0 · needs Node.js 20+
- The hosted dashboard and team features are still early access (per the official homepage)
- The README states plainly that VERIFIED means the configured checks passed, not that the code is safe to merge

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 23:33 UTC
- AT SOURCE: 2026-04-04 05:34 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/martin-loop-a1cb6e24d0.png
