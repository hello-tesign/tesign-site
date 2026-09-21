# PDFx

> Bundle many PDFs into one valid PDF — Bundles many PDFs into one file that is still a valid PDF; its viewer splits them back

- Page: https://tesign.com/en/item/pdfx/
- JSON: https://tesign.com/en/item/pdfx/index.json
- Korean Markdown: https://tesign.com/item/pdfx/index.md
- Generated: 2026-09-21 05:13 UTC

## Numbers

- 1,065 stars — checked on GitHub 2026-09-19 22:58 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 00:00 UTC)
- 1 Show HN points — observed 2026-09-13 15:40 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: macos · windows · linux · web
- CATEGORY: PRODUCTIVITY
- Tags: pdf · electron · file-format · document-bundle · pdfjs
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/alexandrosgounis/pdfx · Show HN https://github.com/alexandrosgounis/pdfx/
- TRY: https://pdfx.zip/

## ACTIVITY

- Last commit: 2026-09-19 14:27 UTC
- Latest release: v0.2.0 (2026-08-10)
- Contributors: 5
- Open issues (incl. PRs): 3
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:58 UTC

## Signals and evidence

- CROSS-SIGNAL · GitHub + Show HN
- BACK CATALOG

## TESIGN TAKE

The point is that this is not a new file format but a PDF with one JSON sheet inside, so the receiving side installs nothing.

## WHY IT MATTERS

The whole format extension is one embedded file attachment, `pdfx-manifest.json` (SPEC.md, version 1.0 draft). Any PDF viewer therefore shows every page in sequence, and PDFx restores the document boundaries. The viewer is Electron with pdf.js and pdf-lib for macOS, Windows and Linux: drop PDFs, images or folders in, each document renders as a horizontal strip of pages, documents stack vertically, reorder them and Export PDF writes one file.

## BUILD FROM THIS

- Because the spec is one JSON manifest, adding PDFx read/write to your own tool is small work — for example a back-office export that ships invoices and contracts as one file.

## WHO IT'S FOR

- Office workers who send document sets — a review packet as one file
- Developers — add bundled-PDF support to an app from the manifest spec
- PDF tool users — reorder documents on the canvas and Export

## START IN 5 MINUTES

```
# yarn              # install
# yarn dev          # run in development
# yarn dev:web      # run on the web
# yarn build:mac    # build:win for windows, build:linux for linux
# Live demo: https://pdfx.zip
```

## CAVEATS

- MIT. The viewer targets macOS, Windows and Linux (Electron), but the README's only download badge carries an Apple mark; for Windows and Linux it gives only the build:win / build:linux commands (prebuilt downloads [확인 필요]). The optional AI assistant needs your own provider API key (Google, Anthropic or OpenAI), so usage costs are yours. The spec is a 1.0 draft. Last push 2026-08-16.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:30 UTC
- AT SOURCE: 2026-06-29 16:17 UTC
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

[Image] https://tesign.com/img/pdfx-c0957268ce.webp
