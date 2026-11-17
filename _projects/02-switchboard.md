---
project-title: "Switchboard"
project-type: "Software - Systems Daemon - Rust"
project-status: "Active - Daily Use"
project-headline: "Interactive status bar driven by a Rust daemon that reports the status of every coding-agent session, across harnesses and remote sessions, and jumps into any of them with a keypress or click."
github: switchboard
website: switchboard.nexus
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    group: agent-devtools
    label: "Switchboard"
    sub: "Jump to Any Agent Session"
    span: "Feb 2026 – Present"
---
Switchboard is an agent status bar that makes agent sessions viewable at a glance and navigable at a single keystroke across providers from anywhere on your machine. A Rust daemon discovers coding agents from the process table, collects hook events emitted by agents to compute live status (working, idle, needs permission), and publishes a status file consumed by the status bar.

I've used Switchboard daily since June 2026. On coding-agent heavy days it handles 300-700+ navigation events. I'm the sole user for now, ahead of an open-source release.

## Technical Details
* Scans `/proc` once per second to establish ground truth about running agent processes. The scan discovers sessions whenever they become live.
* Status hooks emitted by agents throughout their lifecycle provide the status information. Agents are modeled as a state machine, with events corresponding to transition edges.
* Process-to-window join spans the process table, terminal / terminal multiplexer, compositor, and window manager, all anchored on the controlling `tty` of the agent process. Defaults to no-op if a navigation destination cannot be established.
* Death detection uses `pidfd_open` with Tokio's `AsyncFd`. On restart, open sessions are replayed from SQLite and reconciled against live processes by boot ID, PID, and start time.
* A single task owns all session state and is its only writer. Rendering, feed publishing, and SQLite writes run outside the latency-critical navigation path.
* The agent lifecycle event stream and user window focus events are optionally persisted to serve a dashboard, which shows usage patterns, tracks agent interruptions, and documents the time spent steering agents to provide users feedback.
* Built on Linux and ported to macOS behind a shared platform layer: `libproc` for process discovery, the Accessibility API for window focus, and global hotkeys.
* Built with coding agents in Go, then redesigned in Rust, partially handwritten and otherwise heavily steered.
