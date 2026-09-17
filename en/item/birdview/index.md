# Birdview

> Change maps for AI-coding teams — Maps which modules an agent will touch before it edits a line.

- Page: https://tesign.com/en/item/birdview/
- JSON: https://tesign.com/en/item/birdview/index.json
- Korean Markdown: https://tesign.com/item/birdview/index.md
- Generated: 2026-09-17 01:30 UTC

## Numbers

- 285 stars — checked on GitHub 2026-09-15 19:34 UTC
- 7-day +23 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: cli · web
- CATEGORY: DEV TOOLS · AI
- Tags: architecture · code-visualization · agents · diagram-as-code
- How to start: Install to use
- SOURCES: GitHub https://github.com/qiuner/birdview
- INSTALL: https://qiuner.github.io/birdview

## ACTIVITY

- Last commit: 2026-09-15 03:32 UTC
- Latest release: v0.2.0 (2026-09-15)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- NEW · 27h OLD WHEN SEEN

## TESIGN TAKE

The core is a rule forced on the agent: draw where you are going to touch before you touch it.

## WHY IT MATTERS

Agent coding logs say what happened; diffs say which lines changed. Birdview inserts a structural check before either: build the project's architecture map first, mark the modules and evidence the agent plans to touch, then let it edit. The output is a standalone HTML file with no server, and maps and activity records are validated against JSON schemas. Published under MIT, with one honest limit: activity is declared by the agent, not observed automatically.

## BUILD FROM THIS

- A team review step that checks scope before the agent starts
- An evidence-linked architecture map kept for onboarding
- A before/after structure comparison attached to release notes

## WHO IT'S FOR

- Developer on agents — has seen a change sprawl beyond what was asked
- Tech lead — wants affected modules visible before review

## START IN 5 MINUTES

```
$ npm ci
$ npm run validate:examples
$ npm test
$ npm run build:demo
# Node.js 18+ · then open examples/harness-activity.html in a browser
# For use inside an agent, follow docs/installation.md
```

## CAVEATS

- Activity is agent-declared; edits are not observed automatically
- Updates mean regenerating the HTML and refreshing the browser
- Marked private and not published to npm (v0.1)

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 10:29 UTC
- AT SOURCE: 2026-09-12 06:59 UTC
- KEPT: 2026-09-14 02:41 UTC
- Published on TESIGN: 2026-09-14 02:41 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/birdview-ae29760b36.png
