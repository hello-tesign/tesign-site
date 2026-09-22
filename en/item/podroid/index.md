# Podroid

> Linux container VM for your phone — Boots a real, separately-kernelled Alpine Linux VM on an unrooted Android phone, running Podman, Docker and LXC exactly as they behave on a server.

- Page: https://tesign.com/en/item/podroid/
- JSON: https://tesign.com/en/item/podroid/index.json
- Korean Markdown: https://tesign.com/item/podroid/index.md
- Generated: 2026-09-22 07:26 UTC

## Numbers

- 2,910 stars — checked on GitHub 2026-09-22 00:37 UTC
- 7-day +9 observed via GH Archive (as of 2026-09-22 03:00 UTC)
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.

## AT A GLANCE

- LICENSE: GPL-2.0 (copyleft) — https://spdx.org/licenses/GPL-2.0.html
- USAGE: Use freely. Release your source if you redistribute (copyleft).
- OPEN SOURCE: YES
- LANGUAGE: Kotlin
- PLATFORM: android
- CATEGORY: DEV TOOLS
- Tags: android · linux-vm · containers · qemu · no-root
- How to start: Install to use
- SOURCES: GitHub https://github.com/extv/podroid
- INSTALL: https://extv.github.io/Podroid

## ACTIVITY

- Last commit: 2026-09-21 14:06 UTC
- Latest release: v1.2.9 (2026-09-21)
- Contributors: 7
- Open issues (incl. PRs): 24
- Made by: an individual
- Checked on GitHub: 2026-09-22 00:37 UTC

## TESIGN TAKE

The claim of "a real, separately-kernelled VM on Android" is backed by a specific mechanism (QEMU or pKVM AVF), which is what separates it from the usual chroot-based imitations.

## WHY IT MATTERS

Most "Linux containers on Android" apps fake it with chroot or proot tricks, not a real container runtime. Podroid instead boots a genuine VM with its own kernel via QEMU (or hardware-accelerated AVF on supported pKVM devices), so Podman, Docker and LXC behave exactly as they do on a server. It ships a full xterm-256color terminal with 122 colour themes, an X11 viewer for GUI Linux apps, USB passthrough, SSH, port forwarding and a guest-to-Android bridge — no root required.

## BUILD FROM THIS

- Run a real container on your phone to test something before deploying it to a server
- Expose a container to your phone's LAN with podroid-forward and hit it from another device
- SSH in to handle a quick server task from just a phone, no laptop needed

## WHO IT'S FOR

- A developer who only has their phone and needs to test a container without a laptop
- An embedded or mobile developer who needs a real Linux kernel environment
- Someone learning Linux who wants a genuine terminal on their Android phone

## START IN 5 MINUTES

```
# 1) Download the APK from https://github.com/ExTV/Podroid/releases/latest and install it
# 2) Tap Start VM, wait for Ready!, open the terminal
$ podman run --rm alpine echo "hello from a container"
$ ssh root@<phone-ip> -p 9922  (password: podroid)
```

## CAVEATS

- GPLv2 · supports arm64 Android 8+ devices only
- Building from source needs Docker and the Android SDK/NDK (using the app itself only needs the APK)

## RECEIPT

- FIRST SEEN BY TESIGN: 2026-09-15 03:29 UTC
- AT SOURCE: 2026-03-16 01:04 UTC
- KEPT: 2026-09-17 01:24 UTC
- Published on TESIGN: 2026-09-17 01:24 UTC
- Text last updated: 2026-09-17 01:26 UTC

## How to read this

- This file was produced by the same build, from the same data, as the tesign.com item page. The text is editorial; the numbers are stored observations.
- null in the JSON means not observed — never zero. The Markdown writes [unconfirmed] for it.
- Star total = the value last checked on GitHub (stars_checked_at) + increases observed via GH Archive since. The 24h · 7d · 30d gains are GH Archive hourly events summed to the reference time (as_of). No score of ours.
- A summary, not legal advice.

[Image] https://tesign.com/img/podroid-0f16dc4f02.png
