# Capsule

> Single-file app player — A desktop player that packs an HTML app and its data into one SQLite file — no account, no server, just a file to share.

- Page: https://tesign.com/en/item/capsule/
- JSON: https://tesign.com/en/item/capsule/index.json
- Korean Markdown: https://tesign.com/item/capsule/index.md
- Generated: 2026-09-22 06:54 UTC

## Numbers

- 379 Show HN points — observed 2026-09-21 05:13 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: [unconfirmed]
- PLATFORM: macos · windows · linux · web
- CATEGORY: PRODUCTIVITY
- Tags: single-file-app · sqlite · offline-first · tauri · desktop
- How to start: Install to use
- SOURCES: Show HN https://withcapsule.app/
- INSTALL: https://withcapsule.app/

## Signals and evidence

- NEW · 0h OLD WHEN SEEN

## TESIGN TAKE

It isn't open source and there's no public repo to inspect, but the concept is clear and there's a real, downloadable player to try today.

## WHY IT MATTERS

Building an HTML page got easy, but saving its data still meant hosting it somewhere. Capsule (built in Rust with Tauri 2.0, per the maker's Show HN post) packs an HTML app and its assets directly into one SQLite database as a .capsule file. Data lives inside that same file as either a localStorage-style key/value store or MongoDB-style document collections, and attachments like PDFs or images ride along too. Documents have no filesystem access by default and need explicit permission to reach the internet; each data entry carries a unique UUID and timestamp so independent copies can later be merged.

## BUILD FROM THIS

- Build a small personal data app (a recipe box, a checklist) and send it as one file to family
- Open something offline-capable (a plane, a subway) without a web preview, using the desktop player
- Wire up a document-specific AI feature with a local or remote model

## WHO IT'S FOR

- Someone who wants to share a small data app with family or a group without hosting anything
- Anyone who needs a tool that works fully offline
- A developer prototyping a lightweight personal tool

## START IN 5 MINUTES

```
# Download the player for your OS (macOS, Windows, Linux) at https://withcapsule.app and open one of the ready-made templates (a browser preview is also available)
```

## CAVEATS

- No public repository or licence statement found — it appears free but closed-source
- Mobile (iOS/Android) apps are "coming soon"; the web preview has limited functionality
- Its 2026-09-15 Show HN post has 3 points and 0 comments, so traction is still small

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 14:01 UTC
- AT SOURCE: 2026-09-15 13:31 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/capsule-a4ee6c26d9.png
