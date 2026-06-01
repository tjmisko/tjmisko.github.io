---
project-title: "Switchboard"
project-type: "Software - Systems Daemon - Go"
project-status: "Active Development"
project-headline: A zero-configuration Go daemon that discovers every Claude Code agent on a Hyprland/wezterm desktop and makes them switchable from a status-bar chip, correlating each across /proc, the terminal, and the Wayland compositor.
github: switchboard
tags:
  - "all"
  - "software"
  - "tooling"
---
* Correlated each Claude process across three namespaces that share no common identifier (`/proc`, wezterm, Hyprland), anchoring the join on the kernel-owned controlling terminal as the one match key that cannot drift
* Detected process death with `pidfd_open(2)` and `poll` instead of polling or signals — the chip vanishes the instant the kernel marks the process a zombie, however it died (Ctrl+C, `/exit`, `kill`, OOM, parent shell death)
* Designed discovery as the source of truth: sessions need no naming, tagging, or registration, and Claude hooks are pure enrichment that degrade gracefully to working/idle/permission status colors
* Multiplexed four signal sources — a 1 Hz `/proc` scan, the Hyprland `socket2` event stream, a 5 s reconciler, and a Unix-socket RPC server — through a single write-locked store with atomic-rename JSON persistence
* Distilled from a ~25-file Bash/Lua prototype: a hand-rolled FIFO single-writer daemon built to serialize state writes collapsed into one `sync.Mutex` in the ~2,100-line Go rewrite, eliminating a whole class of state-corruption bugs
