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
Switchboard is a Go daemon that finds each running coding-agent session on my desktop, works out its terminal window, and publishes a status file. The status bar shows one chip per session, and clicking it jumps there.

* A once-a-second scan of `/proc` is the source of truth, so sessions need no registration. Claude Code hooks add status color, and the daemon works without them.
* The process-to-window join spans process table, terminal multiplexer, and compositor, anchored on the controlling TTY, and fails closed on zero or multiple matches.
* Death detection uses `pidfd_open` and `poll`, backed by a reconciler sweep because a restart orphans the pidfds. Both were agent proposals I approved.
* I had the Bash/Lua prototype rebuilt in Go after reading its single-writer FIFO daemon as a mutex reimplemented in shell.
* CI runs `go test -race` on amd64 and arm64, and the deploy script rolls back unless the running process reports the intended revision.

Linux only, one user, running daily as a systemd unit.
