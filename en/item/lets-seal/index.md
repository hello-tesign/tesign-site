# Let's Seal

> Prove a file is unaltered and dated — Free web app and open SEAL standard that proves a file is unaltered and existed by a date

- Page: https://tesign.com/en/item/lets-seal/
- JSON: https://tesign.com/en/item/lets-seal/index.json
- Korean Markdown: https://tesign.com/item/lets-seal/index.md
- Generated: 2026-09-19 23:10 UTC

## Numbers

- 371 stars — checked on GitHub 2026-09-19 22:59 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-19 18:00 UTC)
- 94 Show HN points — observed 2026-09-13 14:52 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: web · cli
- CATEGORY: SECURITY
- Tags: digital-signature · c2pa · pades · opentimestamps · document-authentication · open-standard
- How to start: Use in the browser
- SOURCES: Show HN https://github.com/letsseal/letsseal
- TRY: https://letsseal.org/

## ACTIVITY

- Last commit: 2026-09-14 23:57 UTC
- Latest release: v0.1.0 (2026-07-23)
- Contributors: 2
- Open issues (incl. PRs): 18
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

It opens up what paid document-sealing services sell, in standard formats and for free; just remember it is not notarisation or identity verification.

## WHY IT MATTERS

Once a quote, contract or delivery photo leaves your hands, there has been no easy way to prove later that it is the original and when it was made. Let's Seal embeds a PAdES signature in PDFs and a C2PA manifest in images, video and audio, anchors the time to Bitcoin through OpenTimestamps, and writes every seal to an RFC 6962 transparency log. Sealing and verifying are free, and verification needs no account, at verify.letsseal.org or offline with standard tools.

## BUILD FROM THIS

- Add an automatic sealing step for outgoing PDFs and images through the REST API or the sealbot CLI, or wire the provided GitHub Action into CI to sign build artifacts and attach SBOM attestations.

## WHO IT'S FOR

- Small businesses and freelancers — seal quotes and contract PDFs to prove they are unaltered
- Development teams — sign build artifacts and containers with SBOM attestations in CI
- Photographers and video makers — embed C2PA Content Credentials in media files

## START IN 5 MINUTES

```
# # No install: seal at https://app.letsseal.org, verify at https://verify.letsseal.org
# npm i -g sealbot
# sealbot seal contract.pdf          # seal a PDF or any file
# sealbot verify contract.sealed.pdf # verify a seal, offline
# python spec/verify.py sealed.pdf sealed.pdf.ots
```

## CAVEATS

- Licence Apache-2.0 (the SEAL specification is free to implement). The proof covers integrity, time and the issuing certificate only; the README states it is not notarisation and does not assert a person's legal identity.
- Self-hosting means running a CA, a Python signing service and a Next.js/Prisma web app yourself, and a paid AATL/eIDAS .p12 certificate is needed if you want third-party PDF readers to show their automatic green check.
- Started 2026-07 and described as a foundation-run public-benefit project; long-term operating record [확인 필요].

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:52 UTC
- AT SOURCE: 2026-07-27 15:52 UTC
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

[Image] https://tesign.com/img/lets-seal-91fec09c76.png
