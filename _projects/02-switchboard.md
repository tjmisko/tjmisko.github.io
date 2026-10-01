---
project-title: "Switchboard"
project-type: "Software - Systems Daemon - Go"
project-status: "Active - Daily Use; Working on Cross-Platform Porting"
project-headline: "Interactive status bar driven by a Go daemon that reports the status of every coding-agent session, across harnesses and remote sessions, and jumps into any of them with a keypress or click. Linux build live, macOS port in progress."
github: switchboard
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    label: "Switchboard"
    sub: "Agent-Session Switcher"
    span: "Feb 2026 – Present"
---
Switchboard is an agent status bar that makes agent sessions viewable at a glance and navigable at a single keystroke across providers from anywhere on your machine. A Go daemon discovers coding agents by managing processes, collects hook events emited by agents to compute live status (working, idle, needs permission), and publishes a status file consumed by the status bar.

I've been using this tool daily since June, with 300-700+ navigation events handled by Switchboard on coding-agent heavy days. I'm the sole user for now, but work is ongoing toward making the code cross platform, release ready.

## Technical Details
* Scans `/proc` at 1 Hz to establish ground truth about running agent processes. Sessions need no registration: the daemon discovers them whenever they become live.
* Status hooks emited by agents throughout their lifecycle provide the status information. Agents are modeled as a state machine, with events corresponding to transition edges.
* Process-to-window join spans the process table, terminal / terminal multiplexer, compositor, and window manager, all anchored on the controlling `tty` of the agent process. Defaults to no-op if a navigation destination cannot be established.
* Death detection uses `pidfd_open` and `poll`, backed by a reconciler sweep because restarts orphan `pidfd`s.
* The agent lifecycle event stream and user window focus events are optionally persisted to serve a dashboard, which shows usage patterns, tracks agent interruptions, and documents the time spent steering agents to provide users feedback.
* Built with coding agents, designed and heavily steered by me when necessary.
