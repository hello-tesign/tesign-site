# anydoc

> Office docs to Markdown for LLM input — Converts Word, PowerPoint, Excel, PDF and EPUB to Markdown; run via npx or in the browser

- Page: https://tesign.com/en/item/anydoc/
- JSON: https://tesign.com/en/item/anydoc/index.json
- Korean Markdown: https://tesign.com/item/anydoc/index.md
- Generated: 2026-09-17 01:56 UTC

## RANKS

- PRODUCTIVITY #19 (As of 2026-09-16 21:00 UTC)

## Numbers

- 21,535 stars — checked on GitHub 2026-09-15 19:34 UTC (+2 observed since the check)
- 7-day +40 observed via GH Archive (as of 2026-09-16 21:00 UTC)
- 24h +2 ★ · 30d +122 ★ (as of 2026-09-16 21:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Rust
- PLATFORM: cli · web
- CATEGORY: PRODUCTIVITY · DEV TOOLS
- Tags: markdown · document-conversion · rust · wasm · cli · docx
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/firecrawl/anydoc
- TRY: https://firecrawl.github.io/anydoc

## ACTIVITY

- Last commit: 2026-08-28 02:13 UTC
- Latest release: v0.2.4 (2026-08-27)
- Contributors: 5
- Open issues (incl. PRs): 93
- Made by: an organization
- Checked on GitHub: 2026-09-15 19:34 UTC

## TESIGN TAKE

It is a library at heart, but the one-line npx CLI and the browser demo make it usable without code; just remember that a scanned PDF leaves for Firecrawl's servers only when you opt in with --ocr hosted.

## WHY IT MATTERS

anydoc parses .doc/.docx, .ppt/.pptx, .xls/.xlsx, OpenDocument, RTF, EPUB, CSV and PDF into one document model and renders through one GFM serializer, so tables, footnotes and equations (as LaTeX) behave the same whatever the input. On its 100-document benchmark it converted in a median 4.4 ms per document and, per the README, was the only tool covering all fourteen formats (quality judged by an LLM). The browser demo runs as WebAssembly, so files never leave the machine.

## BUILD FROM THIS

- Turn supplier quotes and product sheets (xlsx, docx, pdf) into Markdown with one npx line for a searchable archive or LLM input, or use the WASM package to build a browser-only upload converter with no server.

## WHO IT'S FOR

- People feeding office files to an LLM — docx, pptx, xlsx to clean Markdown
- RAG and agent developers — Node, Python, Rust and WASM bindings plus an Agent Skill
- Privacy-conscious users — convert in the browser demo without uploading anything

## START IN 5 MINUTES

```
# npx @firecrawl/anydoc report.docx               # Markdown to stdout
# npx @firecrawl/anydoc slides.pptx -o slides.md  # or to a file
# npm install -g @firecrawl/anydoc
# pip install firecrawl-anydoc
```

## CAVEATS

- MIT. Text-based PDFs convert locally, but scanned or image-only PDFs fail with NeedsOcr since there is no built-in OCR; opting into --ocr hosted sends the whole document to Firecrawl Parse (no signup needed, a key raises limits).
- Images appear only as alt text in the Markdown, with the raw bytes kept on the document model.
- The benchmark corpus is not redistributable and is not in the repo.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-08-03 16:36 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 04:36 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/anydoc-272a346a4a.png
