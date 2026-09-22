# BG0

> No-account background remover — Removes a photo's background entirely inside your browser — no upload, no server, no account.

- Page: https://tesign.com/en/item/bg0/
- JSON: https://tesign.com/en/item/bg0/index.json
- Korean Markdown: https://tesign.com/item/bg0/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 287 stars — checked on GitHub 2026-09-22 00:39 UTC
- 7-day +28 observed via GH Archive (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: MEDIA · API
- Tags: background-removal · privacy · webgpu · local-first · browser
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/opencoredev/bg0
- TRY: https://bg0.dev/

## ACTIVITY

- Last commit: 2026-09-19 20:46 UTC
- Latest release: no releases
- Contributors: 5
- Open issues (incl. PRs): 3
- Made by: an organization
- Checked on GitHub: 2026-09-22 00:39 UTC

## Signals and evidence

- NEW · 28h OLD WHEN SEEN

## TESIGN TAKE

One of the few background removers that actually keeps its "nothing is uploaded" promise — worth asking why any other one needs your photo on a server at all.

## WHY IT MATTERS

Most online background removers require uploading the photo to a server and cap free usage. BG0 does the opposite: it runs inference directly in the browser with WebGPU when available (falling back to WebAssembly), downloading and caching a BiRefNet-family ONNX model picked for the hardware. The photo and its output never leave browser memory, and there's no account, API key, billing, or usage limit.

## BUILD FROM THIS

- Make a passport photo's or product photo's background transparent, instantly
- Add the same local, private background removal to your own web app with @bg0/browser
- Study its Playwright layout-regression suite (11 viewports) as a reference for testing an image-processing UI

## WHO IT'S FOR

- Anyone privacy-conscious — when a face or ID photo shouldn't touch a server
- A small shop owner — cleaning up product photos quickly, with no account or bill
- A web developer — wiring the same feature into their own app via the library

## START IN 5 MINUTES

```
# Use it now: open https://bg0.dev and drop a photo
# Run locally (requires Bun 1.4):
$ bun install --frozen-lockfile
$ bun run dev
# → web app on port 3000, docs on port 4321
```

## CAVEATS

- The code is Apache-2.0; the downloaded model weights carry their own licences, listed in THIRD_PARTY_NOTICES.md
- The first run needs network access to fetch the model (it runs from a local cache after that)
- Devices without WebGPU fall back to WebAssembly and may be slower

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 21:33 UTC
- AT SOURCE: 2026-09-14 16:42 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/og/bg0.en.png
