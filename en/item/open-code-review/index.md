# open-code-review

> AI code review for developers — Reviews code line by line with fixed rule pipelines plus an LLM agent.

- Page: https://tesign.com/en/item/open-code-review/
- JSON: https://tesign.com/en/item/open-code-review/index.json
- Korean Markdown: https://tesign.com/item/open-code-review/index.md
- Generated: 2026-09-17 01:30 UTC

## RANKS

- Rising this week #6 · SECURITY #3 (As of 2026-09-16 21:00 UTC)

## Numbers

- 28,581 stars — checked on GitHub 2026-09-15 19:33 UTC (+454 observed since the check)
- 7-day +1,064 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- 24h +416 ★ · 30d +1,089 ★ (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: windows · macos · linux · cli
- CATEGORY: DEV TOOLS · SECURITY
- Tags: code-review · agents · security
- SOURCES: GitHub https://github.com/alibaba/open-code-review
- TRY: https://open-codereview.ai/

## ACTIVITY

- Last commit: 2026-09-15 19:33 UTC
- Latest release: v1.12.2 (2026-09-15)
- Contributors: 165
- Open issues (incl. PRs): 164
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:33 UTC

## Signals and evidence

- RISING · +416 ★ / 24h

## TESIGN TAKE

Splitting deterministic steps from the agent is a convincing answer to reviews that drift off the right line.

## WHY IT MATTERS

Rule-only review tools miss a lot; review left to a model alone comes out uneven. open-code-review runs deterministic pipelines alongside an LLM agent and leaves line-level comments. It ships a multi-language ruleset covering NPE, thread safety, XSS and SQL injection, and works with both OpenAI and Anthropic models. Alibaba published it under Apache-2.0.

## BUILD FROM THIS

- An internal review step that runs on every pull request
- A report that looks only at insecure patterns
- A team ruleset extended with your own internal rules

## WHO IT'S FOR

- Team lead — adds an automatic review step to CI for every PR
- Security owner — checks for XSS and SQL injection patterns regularly
- Solo developer — wants a second pair of eyes before merging

## START IN 5 MINUTES

```
# Needs Git 2.41 or newer
$ npm install -g @alibaba-group/open-code-review
$ ocr config provider
$ ocr config model
$ cd your-project
$ ocr review
```

## CAVEATS

- Needs an LLM provider and API key (except in delegation mode)
- It favours precision and states that recall is lower by design
- Benchmark figures come from the repository's own dataset

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-05-18 02:16 UTC
- KEPT: 2026-09-13 11:32 UTC
- Published on TESIGN: 2026-09-13 11:32 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/open-code-review-157e8e3de1.png
