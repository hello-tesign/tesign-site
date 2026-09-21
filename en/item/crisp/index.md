# Crisp

> Controls for Mac external monitors — Free macOS menu bar app: HiDPI scaling, DDC brightness and presets for external monitors.

- Page: https://tesign.com/en/item/crisp/
- JSON: https://tesign.com/en/item/crisp/index.json
- Korean Markdown: https://tesign.com/item/crisp/index.md
- Generated: 2026-09-21 05:13 UTC

## Numbers

- 1,788 stars — checked on GitHub 2026-09-19 22:59 UTC
- 7-day +2 observed via GH Archive (as of 2026-09-21 00:00 UTC)
- 4 Show HN points — observed 2026-09-13 14:56 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Swift
- PLATFORM: macos · cli
- CATEGORY: PRODUCTIVITY
- Tags: macos · menu-bar · external-monitor · hidpi · ddc · swift
- How to start: Install to use
- SOURCES: Show HN https://github.com/didriksg/Crisp
- INSTALL: https://crispmac.app/

## ACTIVITY

- Last commit: 2026-09-16 22:21 UTC
- Latest release: v1.6.0 (2026-09-08)
- Contributors: 12
- Open issues (incl. PRs): 8
- Made by: an individual
- Checked on GitHub: 2026-09-19 22:59 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

The features that sell BetterDisplay licences are the baseline here.

## WHY IT MATTERS

macOS renders text blurry or tiny on non-Apple monitors and leaves the brightness keys dead; BetterDisplay and Lunar fill that gap but charge for the core features. Crisp gives HiDPI scaling (automatic on 1440p and larger, always at the panel's full refresh rate), DDC hardware brightness and volume, Extra Brightness from the HDR reserve, presets and virtual displays, all free with no Pro tier. Every release is signed and notarized by Apple, and the `crispctl` command line tool exposes the same controls to scripts and Shortcuts.

## BUILD FROM THIS

- Script a KVM desk where one button runs `crispctl display toggle`, or a Shortcut that switches brightness and HDR by time of day.

## WHO IT'S FOR

- Mac users with external 4K or 1440p monitors — sharp HiDPI text instead of blurry
- People switching between display setups — resolution, brightness and arrangement in one preset
- Developers automating their desk — script brightness, connection and HDR with crispctl

## START IN 5 MINUTES

```
# brew install --cask crisp
# # or download Crisp.dmg and drag Crisp to Applications: https://github.com/didriksg/Crisp/releases/latest/download/Crisp.dmg
# Build from source:
# brew install xcodegen
# xcodegen generate   # generates Crisp.xcodeproj from project.yml
```

## CAVEATS

- MIT licence (began as a fork of FreeDisplay, also MIT). macOS 14 Sonoma or later only; disconnecting and reconnecting displays works on Apple Silicon only. Smooth scaling asks for an administrator password once per monitor, and the Brightness Keys feature needs Accessibility permission. Free; the developer accepts sponsorship toward the $99/year Apple Developer Program fee.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 14:56 UTC
- AT SOURCE: 2026-07-24 16:05 UTC
- KEPT: 2026-09-14 19:27 UTC
- Published on TESIGN: 2026-09-14 19:27 UTC
- Text last updated: 2026-09-15 07:17 UTC
- ◌ BACK CATALOG: Reconstructed from archive data, not a live discovery.

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- Reconstructed from archive data, not a live discovery.
- A summary, not legal advice.

[Image] https://tesign.com/img/crisp-2d184b1a82.png
