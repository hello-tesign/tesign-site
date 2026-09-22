# Solar Wanderer

> Real-time 1:1 solar system, no install — 1:1 real-time solar system in the browser, driven by NASA JPL ephemerides; phone-friendly

- Page: https://tesign.com/en/item/solar-wanderer/
- JSON: https://tesign.com/en/item/solar-wanderer/index.json
- Korean Markdown: https://tesign.com/item/solar-wanderer/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 743 stars — checked on GitHub 2026-09-22 00:38 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: JavaScript
- PLATFORM: web
- CATEGORY: EDUCATION · SCIENCE
- Tags: astronomy · threejs · webgl · education · simulation · nasa
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/hyqzz/solar-wanderer
- TRY: https://sw.icodestar.net/

## ACTIVITY

- Last commit: 2026-08-23 16:05 UTC
- Latest release: v2.2.0 (2026-06-21)
- Contributors: 4
- Open issues (incl. PRs): 1
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:38 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

Publishing an accuracy table and a verify script is what separates this from solar system apps that only look right.

## WHY IT MATTERS

Space apps usually make you choose between accuracy and immersion; this one puts both in a web page. The README's accuracy table lists planet positions within 0.0007°–0.074° of NASA JPL Horizons, the Moon at 0.12° and 21 moons within 0.22° after ten days, and `npm run verify` re-checks against Horizons live. It runs at true 1:1 km scale from the Sun to the 100,000 AU Oort Cloud, ships about 200 kB of gzipped JS and supports phone touch.

## BUILD FROM THIS

- The ephemeris layer is pure functions testable in Node, so it can feed your own astronomy visualisation or lesson material, and the roadmap's guided tours and courses are open for education content. MIT allows commercial use; the textures carry their own CC-BY-4.0 and similar attribution terms.

## WHO IT'S FOR

- Teachers and students — land on the Moon and look up at Earth, get a feel for scale
- Astronomy enthusiasts — today's real planet positions, 28 TNOs and 4 comets
- Web 3D developers — floating-origin rendering and a logarithmic depth buffer at 1:1 km scale

## START IN 5 MINUTES

```
# # No install: open https://sw.icodestar.net
# git clone https://github.com/hyqzz/Solar-Wanderer.git
# cd Solar-Wanderer
# npm install
# npm run dev      # → http://localhost:5173
```

## CAVEATS

- Licence MIT (code). Textures come from Solar System Scope (CC-BY-4.0), Steve Albers SOS and NASA JPL Photojournal (public domain), each with its own terms.
- Needs a WebGL2 browser. Free, no account or backend. Interface in Chinese and English per the homepage.
- Moon position uses a truncated ELP at 0.12° error. Real DEM terrain, eclipse shadows and VR are roadmap items, not shipped. 737 stars.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:29 UTC
- AT SOURCE: 2026-06-12 06:25 UTC
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

[Image] https://tesign.com/img/solar-wanderer-da83ecda5c.jpg
