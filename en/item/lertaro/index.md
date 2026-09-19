# Lertaro

> Instant file search for Windows users — Windows search launcher reading the NTFS USN Journal and $MFT for near-instant file search

- Page: https://tesign.com/en/item/lertaro/
- JSON: https://tesign.com/en/item/lertaro/index.json
- Korean Markdown: https://tesign.com/item/lertaro/index.md
- Generated: 2026-09-19 23:10 UTC

## Numbers

- 627 stars — checked on GitHub 2026-09-19 22:59 UTC
- 7-day +2 observed via GH Archive (as of 2026-09-19 18:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: C#
- PLATFORM: windows
- CATEGORY: PRODUCTIVITY
- Tags: windows · file-search · launcher · ntfs · dotnet · wpf
- How to start: Install to use
- SOURCES: GitHub https://github.com/lertaro/lertaro
- INSTALL: https://lertaro.github.io/

## ACTIVITY

- Last commit: 2026-09-19 11:57 UTC
- Latest release: v5.6.9 (2026-09-19)
- Contributors: 3
- Open issues (incl. PRs): 2
- Made by: an organization
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

What sets it apart for Everything users is the MIT licence, the .NET plugin SDK and the native ARM64 build.

## WHY IT MATTERS

It folds what Everything and Listary each did — instant file search and a launcher — into one MIT-licensed open-source tool. Instead of walking directories it reads the NTFS USN Change Journal and $MFT directly, with a background service keeping the index in sync in real time. Native x64 and ARM64 (Windows on ARM) builds ship together, and an inline bar docks into Open/Save dialogs and file managers such as File Explorer and Total Commander.

## BUILD FROM THIS

- With the .NET 10 C# plugin SDK you can add an internal document store or wiki as a search provider and register frequent commands as aliases and actions; it is also compatible with Flow Launcher community plugins.

## WHO IT'S FOR

- Windows power users — a file search and launcher replacing Everything/Listary
- Windows on ARM (Snapdragon) laptop users — the native ARM64 build
- .NET developers — custom search providers and actions via the plugin SDK

## START IN 5 MINUTES

```
# 1. x64: download and run https://github.com/Lertaro/Lertaro/releases/latest/download/Lertaro-Setup.exe (recommended, supports the background service)
# 2. ARM64: https://github.com/Lertaro/Lertaro/releases/latest/download/Lertaro-Setup-arm64.exe
# 3. No install: unzip Lertaro-Portable.zip (ARM64: Lertaro-Portable-arm64.zip) and run
# 4. Build from source on Windows 10/11 with the .NET 10 SDK: build_and_run.bat (x64 and ARM64 Release builds: make.bat)
```

## CAVEATS

- Licence MIT. Windows 10/11 only (x64 and ARM64). Low-level indexing covers NTFS/ReFS; FAT32/exFAT is handled by monitoring. The installer runs a SYSTEM-level background service. The project started in August 2026 and its README warns to download only from official sources. Whether a separate .NET runtime install is required: [확인 필요].

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:55 UTC
- AT SOURCE: 2026-08-06 05:00 UTC
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

[Image] https://tesign.com/img/lertaro-9737ff54a1.png
