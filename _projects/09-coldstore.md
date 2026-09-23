---
project-title: "Coldstore"
project-type: "Software - Storage Daemon - Go, React & SQLite"
project-status: "Deployed Aug 2026"
project-headline: "A home-server daemon that keeps Syncthing folders under a size budget by archiving old files to cold storage, with a web gallery of every file."
github: Coldstore
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
arc:
  node:
    small: true
    label: "Coldstore"
    sub: "Syncthing cold-storage daemon · Go, React, SQLite"
    span: "Aug 2026"
---
Coldstore is a daemon for my home server that keeps each Syncthing folder under a size budget by moving the least-recently-touched files to a cold archive on the same host. Syncthing propagates the deletion, so archiving on the server frees the phone and laptop. A SQLite catalog and web UI keep every archived file browsable and restorable.

*The Go and the React were written by coding agents under my direction and review.*

* A cross-filesystem move copies to a temp sibling, fsyncs, re-reads and SHA-256-verifies the copy, renames it into place, then unlinks the source.
* One process-wide mover mutex serializes the quota tick, the API, and the job worker. Crash recovery runs only at startup, before the mover or API exist.
* The React gallery is compiled into the Go binary and deployed as one file with a systemd unit.
* The end-to-end test tier pairs two Syncthing devices so it can observe the deletion propagating.
* I ran the 23-issue work breakdown as three Claude Code worktrees and two Codex branches over one week in August 2026, then merged and deployed it.
