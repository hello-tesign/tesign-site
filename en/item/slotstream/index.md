# Slotstream

> Run a 105 GB model on a 48 GB Mac — Run a 105 GB Qwen model on a 48 GB Mac: experts stream from SSD, Ollama-compatible API

- Page: https://tesign.com/en/item/slotstream/
- JSON: https://tesign.com/en/item/slotstream/index.json
- Korean Markdown: https://tesign.com/item/slotstream/index.md
- Generated: 2026-09-23 04:12 UTC

## Numbers

- 391 stars — checked on GitHub 2026-09-23 01:49 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 23:00 UTC)
- 240 Show HN points — observed 2026-09-13 13:59 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos · cli
- CATEGORY: AI
- Tags: local-llm · apple-silicon · mixture-of-experts · mlx · ollama · swift
- How to start: Install to use
- SOURCES: Show HN https://github.com/carloslfu/slotstream
- INSTALL: https://sevrahq.com/

## ACTIVITY

- Last commit: 2026-09-22 22:37 UTC
- Latest release: v0.2.23 (2026-09-22)
- Contributors: 3
- Open issues (incl. PRs): 16
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:49 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Streaming a model larger than RAM from SSD really works here, but it supports exactly one model and speed varies widely by machine.

## WHY IT MATTERS

Qwen3.8-Flash-Next is a 105 GB mixture-of-experts model (per the README); Slotstream keeps the shared weights in RAM and reads only the experts it needs from SSD into a cache. The developer's 48 GB M5 Pro measured 13.47 tok/s after warm-up (a 0.2.16 pre-release benchmark), while a community report on a 16 GB M2 Mac mini was 1.41 tok/s. After a one-time download it works offline with no Python or cloud account.

## BUILD FROM THIS

- Point Open WebUI or an agent such as Hermes or fx at its OpenAI/Ollama-compatible API and you have a personal AI server on one Mac that answers questions about files and pictures without an internet connection. A Swift library lets you embed it in a Mac app directly.

## WHO IT'S FOR

- Apple Silicon Mac owners — run a large model locally without a cloud account
- Privacy-conscious users — keep document and image questions on the device
- Local-LLM developers — study an MLX + Swift expert-streaming implementation

## START IN 5 MINUTES

```
# curl -fsSL https://raw.githubusercontent.com/carloslfu/slotstream/main/install.sh | sh
# slotstream doctor
# slotstream run --prompt "Why is the sky blue?"
```

## CAVEATS

- MIT for the code; model weights carry a separate Qwen community licence.
- Requires an Apple Silicon Mac with 16 GB+ RAM, macOS 14+ and about 110 GB of free SSD; 8 GB Macs refuse to start, and Windows, Linux and Intel Macs are not supported.
- The model download can take hours, long prompts can take minutes before the first token, and only one generation runs at a time.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 13:59 UTC
- AT SOURCE: 2026-09-01 16:42 UTC
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

[Image] https://tesign.com/img/og/slotstream.en.png
