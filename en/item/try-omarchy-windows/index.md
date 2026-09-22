# Try Omarchy for Windows

> Try the Omarchy Linux desktop on Windows — An app that boots the real Omarchy Linux desktop inside a window on Windows — no VM software to install.

- Page: https://tesign.com/en/item/try-omarchy-windows/
- JSON: https://tesign.com/en/item/try-omarchy-windows/index.json
- Korean Markdown: https://tesign.com/item/try-omarchy-windows/index.md
- Generated: 2026-09-22 05:53 UTC

## Numbers

- 440 stars — checked on GitHub 2026-09-21 03:05 UTC
- no 7-day star increase observed (GH Archive) (as of 2026-09-21 20:00 UTC)
- 5 Show HN points — observed 2026-09-22 00:33 UTC
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: MIT (permissive) — https://spdx.org/licenses/MIT.html
- USAGE: Use, change and redistribute, commercially too. Keep the notice.
- OPEN SOURCE: YES
- LANGUAGE: Go
- PLATFORM: windows
- CATEGORY: DEV TOOLS · INFRA
- Tags: 윈도우 · 리눅스 · 가상화 · hyprland
- How to start: Install to use
- SOURCES: Show HN https://github.com/omacom/try-omarchy-windows
- INSTALL: https://tryomarchy.com/

## ACTIVITY

- Last commit: 2026-09-20 22:20 UTC
- Latest release: [unconfirmed]
- Contributors: [unconfirmed]
- Open issues (incl. PRs): [unconfirmed]
- Made by: [unconfirmed]
- Checked on GitHub: 2026-09-21 03:05 UTC

## Signals and evidence

- NEW · 3h OLD WHEN SEEN

## TESIGN TAKE

The difference is that it rides on virtualization Windows already has, rather than a separate VM product — one file, nothing else to install.

## WHY IT MATTERS

Trying Omarchy — Arch Linux with Hyprland — usually means installing VMware or VirtualBox and weighing a dual boot. Try Omarchy boots the real Arch image straight from Windows’ own virtualization (WHPX) and QEMU, rendering on your actual GPU so it feels close to the real thing.

## BUILD FROM THIS

- One ~10 MB executable, TryOmarchy.exe, switches on Windows Hypervisor Platform, downloads the Arch image, and supervises boot; graphics render on the GPU through virtio-gpu virgl and Venus Vulkan, falling back to CPU rendering automatically when that is not available. Two-way clipboard sharing with Windows and folder sharing over virtio-9p are built in.

## WHO IT'S FOR

- Windows users curious about Hyprland and Omarchy, and anyone testing the water before switching to Linux.

## START IN 5 MINUTES

```
# Download TryOmarchy.exe from tryomarchy.com, run it, and allow the virtualization prompt it asks for.
```

## CAVEATS

- It is still a v0.0.20 preview, and the repository says real-world testing has centred on one AMD Windows 11 laptop. Network-location folders are not supported.

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-21 02:05 UTC
- AT SOURCE: 2026-09-20 22:56 UTC
- KEPT: 2026-09-22 05:53 UTC
- Published on TESIGN: 2026-09-22 05:53 UTC
- Text last updated: 2026-09-22 05:53 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/try-omarchy-windows-b6d7cb8793.jpg
