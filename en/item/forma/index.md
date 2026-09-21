# Forma

> ONNX graph editor for ML engineers — Drop an .onnx file in the browser, see the graph, edit a node and export — no Python.

- Page: https://tesign.com/en/item/forma/
- JSON: https://tesign.com/en/item/forma/index.json
- Korean Markdown: https://tesign.com/item/forma/index.md
- Generated: 2026-09-21 05:13 UTC

## Numbers

- 3 stars — checked on GitHub 2026-09-19 22:57 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 00:00 UTC)
- 2 Show HN points — observed 2026-09-20 05:34 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: DEV TOOLS · AI
- Tags: onnx · tflite · model-visualization · webassembly · graph-editor
- How to start: Use in the browser
- SOURCES: Show HN https://github.com/Hussain004/forma
- TRY: https://forma-ml.vercel.app/

## ACTIVITY

- Last commit: 2026-09-02 15:22 UTC
- Latest release: v2.5.0 (2026-09-02)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:57 UTC

## Signals and evidence

- NEW · 1h OLD WHEN SEEN

## TESIGN TAKE

The point is that graph editing and validation finish in the browser without your model ever being uploaded.

## WHY IT MATTERS

Most ONNX tooling stops at looking: you can read the graph, but changing one attribute sends you back to Python scripts. Forma renders the full computation graph when you drop an .onnx or .tflite file on the canvas, lets you click a node to edit attributes or rewire connections, and exports the result as a valid ONNX file. Everything runs in the browser via WebAssembly, so the model never leaves your machine; only the edit sequence is shared, as a link carrying the original file's SHA-256 fingerprint.

## BUILD FROM THIS

- Pre-deployment surgery: turn a fixed batch size into a symbolic `batch` dimension or rename tensors
- A validation run that feeds the original and edited model identical inputs and compares outputs
- A minimal-repro ONNX file cut from just the nodes that misbehave (Extract Repro)
- A side-by-side text report comparing two model files' structure, attributes and latency

## WHO IT'S FOR

- ML engineer — fixes ONNX inputs, outputs and attributes right before deployment, without Python
- Developer converting models — compares two files' structure before and after conversion
- Deep-learning learner — clicks through a public model's layers and parameter counts

## START IN 5 MINUTES

```
# 1. Open forma-ml.vercel.app
# 2. Drag any .onnx model file onto the canvas
# 3. Click any node to inspect it in the Layer Inspector panel
# 4. Make an edit and choose Share Edits to copy a verified edit link
# Run locally (Node.js 18+):
$ git clone https://github.com/Hussain004/Forma.git
$ cd Forma
$ npm install
$ npm run dev
# → open http://localhost:5173
```

## CAVEATS

- License unconfirmed — the README badge and the Show HN post say MIT, but the repository has no LICENSE file and GitHub metadata shows none
- ONNX and TFLite only; TFLite is read-only (no attribute editing, benchmark or Export Modified); convert .pt or .safetensors to ONNX first
- Desktop-first — a gate appears below 900px screen width
- Share links never contain the model, so the recipient needs the exact original file; INT8 sizes are analytical estimates
- No pricing stated; the web app opens without payment and the README links a donation page · shown on HN 2026-09-13 · the README lists releases up to v2.5.0 and 406 tests

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-09-13 05:49 UTC
- KEPT: 2026-09-15 14:07 UTC
- Published on TESIGN: 2026-09-15 14:07 UTC
- Text last updated: 2026-09-15 14:07 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/forma-6622496fbc.png
