# HypoMux

> Combine network links on Windows — Windows tool that spreads Steam and IDM downloads over Ethernet, Wi-Fi and hotspot at once

- Page: https://tesign.com/en/item/hypomux/
- JSON: https://tesign.com/en/item/hypomux/index.json
- Korean Markdown: https://tesign.com/item/hypomux/index.md
- Generated: 2026-09-23 04:12 UTC

## Numbers

- 3,613 stars — checked on GitHub 2026-09-23 01:49 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-22 23:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: AGPL-3.0 (copyleft) — https://spdx.org/licenses/AGPL-3.0.html
- USAGE: Release source if you redistribute or host it as a service.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: windows
- CATEGORY: INFRA
- Tags: windows · networking · multi-wan · load-balancing · go · wails
- How to start: Install to use
- SOURCES: GitHub https://github.com/hypostasis-cat/hypomux
- INSTALL: https://hypomux.com/

## ACTIVITY

- Last commit: 2026-09-23 01:13 UTC
- Latest release: v2.6.0 (2026-09-13)
- Contributors: 7
- Open issues (incl. PRs): 13
- Made by: an individual
- Checked on GitHub: 2026-09-23 01:49 UTC

## Signals and evidence

- BACK CATALOG

## TESIGN TAKE

It earns trust by drawing the line itself: it spreads connections, it does not make one connection faster.

## WHY IT MATTERS

A PC with several links usually uses one at a time. HypoMux picks an outbound adapter for each new connection (source-address binding plus IP_UNICAST_IF), so downloads that open many connections, such as Steam updates, IDM and game launchers, spread across Ethernet, Wi-Fi, hotspot and USB tethering. The README states up front that it balances independent connections and cannot split one TCP connection; 2.5.0 moved the desktop to Go + Wails v3 and official installers are SignPath-signed.

## BUILD FROM THIS

- Its least-privilege split, a standard-user UI and a separate Go Core service owning TUN, WFP, routing and DNS, is a reference for Windows networking tools. AGPL-3.0 means even network-served modifications must publish source.

## WHO IT'S FOR

- Windows gamers with two or more links — spread Steam and launcher updates
- IDM and other multi-threaded downloader users — System Proxy mode, no virtual adapter
- Windows networking developers — Wintun, sing-box and WFP split routing as reference

## START IN 5 MINUTES

```
# 1. Download and run HypoMux_Setup_*.exe from GitHub Releases (publisher: SignPath Foundation)
# 2. Connect the PC to at least two working networks, such as Ethernet + Wi-Fi or broadband + USB/mobile tethering
# 3. Start HypoMux → refresh the Home page → select the adapters to include in the pool
# 4. Run Network Health and verify each link has a valid IPv4 address, gateway, DNS and working source binding
# 5. Choose System Proxy or Virtual NIC mode → enable the aggregation engine and start the download (restart Steam when prompted)
```

## CAVEATS

- Licence AGPL-3.0. Free (WeChat/Alipay donations).
- Windows 10/11 only. Cannot split one TCP connection and targets throughput, not latency (README advises direct rules for competitive games and voice chat). Virtual NIC mode needs Wintun/WFP and the Core service, and startup is blocked if another TUN/VPN owns the default route.
- Chinese-first project with an English README. Currently 2.6.0; maintained by a single student developer.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-13 09:42 UTC
- AT SOURCE: 2026-06-11 06:38 UTC
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

[Image] https://tesign.com/img/hypomux-e3bd36f578.png
