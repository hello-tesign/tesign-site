# Qwen2.5 Program Slicing Security Auditor

> JavaScript security audit for web devs — Paste JS or HTML; a fine-tuned 7B model traces each risky sink to an exploit and verdict.

- Page: https://tesign.com/en/item/qwen2-5-program-slicing-security-auditor/
- JSON: https://tesign.com/en/item/qwen2-5-program-slicing-security-auditor/index.json
- Korean Markdown: https://tesign.com/item/qwen2-5-program-slicing-security-auditor/index.md
- Generated: 2026-09-18 06:40 UTC

## Numbers

- 1 Hugging Face likes — observed 2026-09-13 09:30 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Licence unconfirmed
- USAGE: Unconfirmed — check before use.
- LANGUAGE: [unconfirmed]
- PLATFORM: web
- CATEGORY: SECURITY · AI
- Tags: security-audit · javascript · xss · program-slicing · gradio · zerogpu
- How to start: Use in the browser
- SOURCES: Hugging Face https://huggingface.co/spaces/face00/cybersecurity
- TRY: https://huggingface.co/spaces/face00/cybersecurity

## Signals and evidence

- NEW · 1h OLD WHEN SEEN

## TESIGN TAKE

Narrowing the scope with parsing before the model speaks keeps each finding small enough to check yourself.

## WHY IT MATTERS

Feeding a whole minified bundle to a model is expensive and scatters the context. This Space first beautifies the code, walks the syntax tree for dangerous sinks such as innerHTML, eval, sendFile and fetch, cuts a roughly 50-line slice around each, and hands the slices one by one to a Qwen2.5-Coder 7B model fine-tuned for security reasoning, which writes a dataflow trace → proof-of-concept → verdict. Snippets of 70 lines or fewer are audited whole, and you can upload .js, .html, .ts, .php or .json files instead of pasting.

## BUILD FROM THIS

- A second opinion on a frontend bundle or an Express route before release
- A teaching aid: the three built-in examples contrast a vulnerable path-traversal route, a DOM XSS snippet and a hardened version
- A draft 'why this is dangerous' note to attach to a code review

## WHO IT'S FOR

- Web developer — skims JavaScript or Node.js code for XSS and path traversal before shipping
- Security beginner — learns from the vulnerable-versus-hardened examples
- Bug-bounty hunter — picks the spots worth reading in a large bundle

## START IN 5 MINUTES

```
# Open https://huggingface.co/spaces/face00/cybersecurity
# Paste code in the 'Paste Code / 50k-Line Bundle' tab, or drop a .js, .html, .ts, .php or .json file in 'Upload File'
# Press '⚡ Run 4-Step Security Audit'; findings appear on the right and pipeline diagnostics below
# Or click one of the three 'Quick Verification Scenarios' examples to try it at once
```

## CAVEATS

- Apache-2.0 for both the Space and the model (face00/qwen2.5-7b-security-cot, fine-tuned from Qwen2.5-Coder-7B-Instruct)
- Runs on Hugging Face ZeroGPU — free, but queued and time-limited; each model call (one per slice) gets 35 s of GPU, and at most 4 slices are analysed per request
- A new Space published 2026-09-13; findings are model output and can miss or invent issues, so verify before acting on them
- The README is only the Space config; the only usage guidance is the app screen and app.py

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 07:43 UTC
- AT SOURCE: 2026-09-13 06:35 UTC
- KEPT: 2026-09-15 14:07 UTC
- Published on TESIGN: 2026-09-15 14:07 UTC
- Text last updated: 2026-09-15 14:07 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/qwen2-5-program-slicing-security-auditor-74b2ede37b.png
