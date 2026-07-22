---
project-title: "Switchboard"
project-type: "Software - Systems Daemon - Go"
project-status: "Active Development"
project-headline: Toolbar that color-codes the status of AI agents (working, idle, waiting for input), making agent status viewable at a glance and navigable at a single keystroke across all desktops and applications. Driven by a background daemon that monitors agent state and makes jumping to any of them a single keystroke or click.
github: switchboard
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    label: "Switchboard"
    sub: "Agent-session daemon · shipped"
---
* **What it is.** A lightweight Go daemon that automatically discovers every Claude Code session running across your terminals and windows, shows each one's live status — working, idle, or waiting for input — and lets you switch to any of them from a status-bar chip.
* **Why it matters.** When you run many AI agents at once it's easy to lose track of which one needs attention. Switchboard turns a scattered set of sessions into one glanceable, clickable list, with zero configuration.

**Technical details**

*Design and direction mine; the Go implementation was built by AI coding agents to my specification. The original Bash/Lua prototype was hand-written.*

* Designed the daemon to correlate each Claude process across three namespaces that share no common identifier (`/proc`, wezterm, Hyprland), anchoring the join on the kernel-owned controlling terminal as the one match key that cannot drift
* Specified death detection around `pidfd_open(2)` and `poll` instead of polling or signals — the chip vanishes the instant the kernel marks the process a zombie, however it died (Ctrl+C, `/exit`, `kill`, OOM, parent shell death)
* Designed discovery as the source of truth: sessions need no naming, tagging, or registration, and Claude hooks are pure enrichment that degrade gracefully to working/idle/permission status colors
* Designed the daemon to multiplex four signal sources — a 1 Hz `/proc` scan, the Hyprland `socket2` event stream, a 5 s reconciler, and a Unix-socket RPC server — through a single write-locked store with atomic-rename JSON persistence
* Directed a rewrite from a ~25-file Bash/Lua prototype I had hand-written: a FIFO single-writer daemon built to serialize state writes collapsed into one `sync.Mutex`, eliminating a whole class of state-corruption bugs
