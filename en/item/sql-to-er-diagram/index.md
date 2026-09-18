# SQL to ER Diagram

> SQL schema to ER diagram, in-browser — Paste CREATE TABLE DDL, get an interactive ER diagram drawn entirely in your browser

- Page: https://tesign.com/en/item/sql-to-er-diagram/
- JSON: https://tesign.com/en/item/sql-to-er-diagram/index.json
- Korean Markdown: https://tesign.com/item/sql-to-er-diagram/index.md
- Generated: 2026-09-18 21:08 UTC

## Numbers

- 619 stars — checked on GitHub 2026-09-17 18:40 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-18 15:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: HTML
- PLATFORM: web
- CATEGORY: DATA · DEV TOOLS
- Tags: erd · sql · database · diagram · canvas · static-site
- How to start: Use in the browser
- SOURCES: GitHub https://github.com/royalbhati/sqltoerdiagram
- TRY: https://sqltoerdiagram.com./

## ACTIVITY

- Last commit: 2026-07-17 16:17 UTC
- Latest release: no releases
- Contributors: 2
- Open issues (incl. PRs): 1
- Made by: an individual
- Checked on GitHub: 2026-09-17 18:40 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The design point: the SQL file stays the source of truth, and the diagram is a two-way editor for it.

## WHY IT MATTERS

There is no server, so the schema never leaves the machine, and a share link carries the whole project (SQL, layout, camera, dialect) gzip+base64-encoded in the URL hash. The canvas renderer (cached bitmaps plus viewport culling) was benchmarked at ~120 fps zooming 300 tables and 593 FKs, and double-clicking a table or column name on the canvas writes the change back into the SQL text with comments and formatting preserved. Two dependencies, 32 KB gzip bundle.

## BUILD FROM THIS

- dist/ is plain static files, so it can sit on an internal wiki or GitHub Pages as the team's schema page; MIT means you can fork it and add your own SQL dialect parser.

## WHO IT'S FOR

- Backend developers — paste a migration file and check the relationships
- Data analysts — visualize CTE dependencies of a BigQuery WITH query
- Team leads — share a schema review as one link, no accounts

## START IN 5 MINUTES

```
# npm install
# npm run dev      # http://localhost:5173
# npm run build    # outputs static files to dist/
# npm run preview  # preview the production build locally
# No install: https://sqltoerdiagram.com
```

## CAVEATS

- MIT. Browser-only app. Per the README the parser covers PostgreSQL, MySQL, SQLite, SQL Server and Snowflake plus a BigQuery mode (the live site also lists Oracle, MariaDB, Prisma, DBML and others, which the README does not). Parsing centres on CREATE/ALTER TABLE with PK, FK and UNIQUE constraints; views, indexes and triggers are not in the supported list. Last push 2026-07-17.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 08:17 UTC
- AT SOURCE: 2026-06-14 04:12 UTC
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

[Image] https://tesign.com/img/sql-to-er-diagram-ee5a44a02c.png
