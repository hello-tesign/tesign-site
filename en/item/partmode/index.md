# PartMode

> Mechanical CAD in the browser — Parametric mechanical CAD in the browser: constrained sketches, assemblies, drawings, STEP

- Page: https://tesign.com/en/item/partmode/
- JSON: https://tesign.com/en/item/partmode/index.json
- Korean Markdown: https://tesign.com/item/partmode/index.md
- Generated: 2026-09-15 20:32 UTC

## Numbers

- 526 stars — checked on GitHub 2026-09-15 19:34 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-15 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: web
- CATEGORY: DESIGN
- Tags: cad · parametric · opencascade · webassembly · step · mcp
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/bomwiki/partmode
- TRY: https://partmode.com/

## ACTIVITY

- Last commit: 2026-08-17 16:55 UTC
- Latest release: source-snapshot-2026-08-11 (2026-08-10) · pre-release
- Contributors: 1
- Open issues (incl. PRs): 11
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Browser CAD with exact B-rep and STEP exchange, and agent access that defaults to human approval.

## WHY IT MATTERS

In PartMode the shaded three.js scene is only a view; the geometry itself is exact B-rep evaluated by OpenCascade WebAssembly. It offers constrained sketches, editable feature history, assembly mates, hidden-line drawings (SVG and PDF), STEP import and export and STL, AMF and 3MF output without a desktop CAD installation. You can model anonymously at partmode.com with projects kept in browser storage, and coding agents work on the same document model through typed operations: in a browser-approved session they commit only changes a person has approved, while unattended work needs a separate, explicitly granted headless key.

## BUILD FROM THIS

- Keep parts that only change in dimension, such as packaging jigs, brackets or enclosures, as templates and hand STEP files to your machine shop, or connect a coding agent over MCP so it takes dimensions and runs preview → approval → export.

## WHO IT'S FOR

- Small manufacturers and prototypers — model parts without an install and send STEP to the machine shop
- Makers and 3D-printer owners — sketch → solid → STL/3MF export
- Agent developers — automate typed CAD operations over MCP

## START IN 5 MINUTES

```
# # No install: https://partmode.com (no account needed)
# git clone https://github.com/BOMWiki/partmode.git
# cd partmode
# npm ci
# npm run build
# npm start   # http://127.0.0.1:4401
```

## CAVEATS

- Licence AGPL-3.0-only: modify it and offer it as a network service and you must publish your source. partmode.com needs no account, but projects live only in browser storage, so backups are on you.
- Self-hosting requires Node.js 22.13 or newer. Agent (MCP) access needs an account and a revocable key, and the README notes the hosted relay is not end-to-end encrypted.
- No simulation, CAM, native DWG authoring or certified GD&T, and imported STEP does not reconstruct the original feature history. Copyright is held by Sphinx (2026).

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:14 UTC
- AT SOURCE: 2026-08-06 04:51 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 04:36 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/partmode-fbd032813a.png
