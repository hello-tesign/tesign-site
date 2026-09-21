# outloud

> Check if a PDF reads correctly aloud — A PDF accessibility checker that shows what a screen reader would actually say.

- Page: https://tesign.com/en/item/outloud/
- JSON: https://tesign.com/en/item/outloud/index.json
- Korean Markdown: https://tesign.com/item/outloud/index.md
- Generated: 2026-09-21 05:13 UTC

## Numbers

- 7 stars — checked on GitHub 2026-09-19 22:59 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 00:00 UTC)
- 3 Show HN points — observed 2026-09-21 01:08 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: Python
- PLATFORM: cli · windows · macos · linux
- CATEGORY: DEV TOOLS · PRODUCTIVITY
- Tags: pdf · 접근성 · 화면낭독기 · 검사
- How to start: Install to use
- SOURCES: Show HN https://github.com/visionably/outloud
- INSTALL: https://visionably.ai/research/outloud

## ACTIVITY

- Last commit: 2026-09-18 05:07 UTC
- Latest release: v0.2.0 (2026-09-17)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an organization
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

The pane headed "read as a screen reader would" does the persuading. Seeing table values announced against silence makes the point faster than any rule id.

## WHY IT MATTERS

The standard checkers are a Windows desktop program and a Java validator, neither of which fits a Mac or a CI pipeline. Both also test whether the keys exist, so alt text reading "IMG_2041.jpg" or an empty header cell still passes. outloud adds a second layer that catches those.

## BUILD FROM THIS

- Python, installed with pipx install outloud. Check a file from the terminal, or open a window with --view and drop PDFs in. Ninety rules (88 implemented, 2 reported as "not run") are split into conformance rules for ISO 14289-1 (PDF/UA-1) and semantic rules; on 58 fixtures and 102 real files the conformance layer agreed with veraPDF on all
- It emits SARIF for CI, needs no Java, and nothing is uploaded.

## WHO IT'S FOR

- Anyone publishing reports or notices as PDFs, accessibility reviewers, and teams producing public-sector or educational material.

## START IN 5 MINUTES

```
# Install with pipx install outloud, then run outloud file.pdf, or open the viewer with outloud --view and drop a PDF in.
```

## CAVEATS

- It says plainly that it is an evaluation, not a certification and not legal advice. Semantic rules are heuristics and can be wrong, colour contrast is not covered yet, and only PDF/UA-1 is tested. The project is only days old.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-18 05:45 UTC
- AT SOURCE: 2026-09-18 05:03 UTC
- KEPT: 2026-09-19 22:45 UTC
- Published on TESIGN: 2026-09-19 22:45 UTC
- Text last updated: 2026-09-19 22:45 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/outloud-dc98635606.png
