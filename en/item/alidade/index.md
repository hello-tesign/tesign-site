# Alidade

> Build and style maps in the browser — An open Web-GIS: drop in spatial data, style it, and fly over 3D terrain in the browser.

- Page: https://tesign.com/en/item/alidade/
- JSON: https://tesign.com/en/item/alidade/index.json
- Korean Markdown: https://tesign.com/item/alidade/index.md
- Generated: 2026-09-21 00:32 UTC

## Numbers

- 13 stars — checked on GitHub 2026-09-19 22:57 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-20 10:00 UTC)
- 2 Show HN points — observed 2026-09-19 23:22 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: Apache-2.0 (permissive) — https://spdx.org/licenses/Apache-2.0.html
- USAGE: Commercial use, redistribution OK. Keep notices; mark changes.
- OPEN SOURCE: YES
- LANGUAGE: TypeScript
- PLATFORM: web
- CATEGORY: DATA
- Tags: 지도 · gis · 위성사진 · 오픈소스
- How to start: Use in the browser
- SOURCES: Show HN https://github.com/AysanZ/alidade
- TRY: https://alidade.aysanz.dev/

## ACTIVITY

- Last commit: 2026-09-17 09:12 UTC
- Latest release: v0.1.0 (2026-09-09)
- Contributors: 1
- Open issues (incl. PRs): 0
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:57 UTC

## Signals and evidence

- NEW · 1h OLD WHEN SEEN

## TESIGN TAKE

Filters are structures rather than strings, so the condition you built on screen is also shown as SQL — a way to check the map when you doubt it.

## WHY IT MATTERS

Most mapping stacks start with an API key, and a map dies when someone’s free tier changes. Alidade is built so nothing needs one — described by its author as a constraint rather than a boast.

## BUILD FROM THIS

- A map is a single JSON document: editing the document changes the map, swapping the basemap does not destroy your layers, and undo goes sixty documents deep. Drop a GeoJSON, zipped Shapefile, GeoPackage, KML or GPX and it is reprojected into PostGIS and served back as vector tiles in the same request; links and WMS endpoints work too. Imagery becomes Cloud-Optimised GeoTIFFs, mosaicked on demand by rules such as newest or sharpest. Basemaps come from OpenFreeMap, terrain from SRTM.

## WHO IT'S FOR

- People working with spatial data who do not need a full commercial GIS, and teams turning survey or field data into maps.

## START IN 5 MINUTES

```
# Open the live demo at alidade.aysanz.dev and drag in a single GeoJSON file.
```

## CAVEATS

- Self-hosting needs PostGIS and GDAL in place. With a dozen stars it is an early project, with the risk that carries when one person maintains it.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-17 08:48 UTC
- AT SOURCE: 2026-09-17 06:52 UTC
- KEPT: 2026-09-19 22:45 UTC
- Published on TESIGN: 2026-09-19 22:45 UTC
- Text last updated: 2026-09-19 22:45 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/alidade-f3670de6ce.jpg
