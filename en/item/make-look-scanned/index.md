# make-look-scanned

> Make a PDF look like a paper scan — Makes a PDF look like a physical scan (skew, paper tone, grain); Go CLI or in-browser WASM

- Page: https://tesign.com/en/item/make-look-scanned/
- JSON: https://tesign.com/en/item/make-look-scanned/index.json
- Korean Markdown: https://tesign.com/item/make-look-scanned/index.md
- Generated: 2026-09-15 19:35 UTC

## Numbers

- 807 stars — checked on GitHub 2026-09-15 19:34 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-15 15:00 UTC)
- 155 Show HN points — observed 2026-09-13 15:54 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: cli · web
- CATEGORY: PRODUCTIVITY
- Tags: pdf · go · wasm · cli · document · scan
- How to start: Use in the browser
- SOURCES: Show HN https://github.com/overflowy/make-look-scanned · GitHub https://github.com/overflowy/make-look-scanned
- TRY: https://overflowy.github.io/make-look-scanned

## ACTIVITY

- Last commit: 2026-06-21 10:39 UTC
- Latest release: v1.1.0 (2026-06-21)
- Contributors: 1
- Open issues (incl. PRs): 1
- Made by: an individual
- Checked on GitHub: 2026-09-15 19:34 UTC

## Signals and evidence

- CROSS-SIGNAL · Show HN + GitHub
- BACK CATALOG

## TESIGN TAKE

It makes 'looks scanned' reproducible: same input, same bytes out.

## WHY IT MATTERS

Each page is rasterized, run through the effect pipeline and reassembled into an image-only PDF; the original selectable text is gone, which is exactly what a basic scanner does. The seed is derived from the input file's content, so the same file always yields a byte-identical PDF, and `--seed N` gives a different but reproducible look. The browser build rasterizes with PDF.js and hands the pixels to the same Go effects code compiled to WASM; nothing is uploaded.

## BUILD FROM THIS

- Define a house 'scan look' as a TOML preset, or build the ~8 MB single-file HTML with `task build:web` and hand it out as an offline internal tool.

## WHO IT'S FOR

- People who need a scan-style document for a submission — convert the PDF without printing
- OCR and document-pipeline developers — generate scan-quality test data
- Designers — paper-document texture for mockups

## START IN 5 MINUTES

```
# go build -o make-look-scanned .
# make-look-scanned in.pdf                 # -> in.scanned.pdf
# make-look-scanned in.pdf --noise 0.4 --skew 2.5 --jpeg-quality 30
# make-look-scanned --preset medium in.pdf
# Browser version: https://overflowy.github.io/make-look-scanned/
```

## CAVEATS

- AGPL-3.0 — the CLI statically links MuPDF (via go-fitz), so distributing the binary requires offering the source. The browser build has no MuPDF and uses PDF.js (Apache-2.0). Building needs Go and a C toolchain (cgo). Output is an image-only PDF, so text cannot be searched or selected. CLI and browser output are visually equivalent but not byte-identical. Last push 2026-06-21.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:24 UTC
- AT SOURCE: 2026-06-20 18:17 UTC
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

[Image] https://tesign.com/img/make-look-scanned-bf573df87d.jpg
