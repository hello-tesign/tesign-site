# liarjs

> Check where a browser contradicts itself — Reads what a browser says about itself, compares it with what the network actually saw, and reports every disagreement.

- Page: https://tesign.com/en/item/liarjs/
- JSON: https://tesign.com/en/item/liarjs/index.json
- Korean Markdown: https://tesign.com/item/liarjs/index.md
- Generated: 2026-09-22 06:54 UTC

## Numbers

- 383 stars — checked on GitHub 2026-09-22 00:37 UTC
- 7-day +21 observed via GH Archive (as of 2026-09-21 20:00 UTC)
- 24h +2 ★ · 30d +23 ★ (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web · cli
- CATEGORY: SECURITY · DEV TOOLS
- Tags: 브라우저 · 지문 · 프라이버시 · 점검
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/liarjsdev/liarjs
- TRY: https://liarjs.dev/

## ACTIVITY

- Last commit: 2026-08-20 07:14 UTC
- Latest release: no releases
- Contributors: 1
- Open issues (incl. PRs): 70
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:37 UTC

## TESIGN TAKE

Its usefulness is in showing you what a site can read about a visitor. If you have wondered what your browser leaks, opening the page answers it immediately.

## WHY IT MATTERS

A browser controls its own JavaScript, but not the network it connects over. liarjs exploits that gap: it reads the fingerprint inside the browser, reads the TLS, HTTP and ASN view from the edge that served the request, and flags every place the two stories disagree.

## BUILD FROM THIS

- TypeScript under MIT, split into three parts: a CLI and driver, 19 browser-side fingerprint probes, and 40 consistency rules as pure functions. liarjs.dev runs exactly these checks.

## WHO IT'S FOR

- People checking whether their privacy settings actually hold, and developers working on bot detection or traffic analysis.

## START IN 5 MINUTES

```
# Open liarjs.dev and it scans your browser right away — no install, no signup.
```

## CAVEATS

- A diagnostic tool: the result tells you where two views disagree, not who someone is or whether they are safe.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 23:33 UTC
- AT SOURCE: 2026-07-28 06:35 UTC
- KEPT: 2026-09-18 21:07 UTC
- Published on TESIGN: 2026-09-18 21:07 UTC
- Text last updated: 2026-09-18 21:07 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/liarjs-a40040e79f.png
