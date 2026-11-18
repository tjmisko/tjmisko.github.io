---
project-title: "Coldstore"
project-type: "Storage Daemon - Go, React & SQLite"
project-status: "Active - Deployed Aug 2026"
project-headline: "A home-server daemon that keeps Syncthing folders under a size budget by archiving old files to cold storage, with a keyboard-driven web gallery for browsing, tagging, and restoring them."
github: Coldstore
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
arc:
  node:
    small: true
    order: 2
    label: "Coldstore"
    sub: "Syncthing cold-storage daemon · Go, React, SQLite"
    span: "Aug 2026"
---
Coldstore handles storage, syncing, and file management for my home server. Syncthing syncs phones and laptops to the server; Coldstore's daemon keeps each Syncthing folder under a size budget by moving the least-recently-touched files to a cold archive on the server. Syncthing propagates the deletion to the client devices, so archiving on the server frees space on the phone and laptop.

A web gallery compiled into the Go binary enables navigation, browsing, and restoration from the archive. It supports filtering over tags, descriptions, capture date, and location, along with Live Photo pairing, document previews, and reading views for EPUBs and PDFs. It is served over Tailscale with access limited to an allowlist of Tailscale logins.

Go, React, and SQLite, deployed as one binary with a systemd unit. Built with coding agents under my direction.

## Technical Details
* **Archive**: Each file is stored once, as an immutable blob named by its SHA-256. An append-only, checksummed journal records every change and is the source of truth, so the SQLite index and the browsable folder tree (hardlinks into the blobs) can both be rebuilt from it. A complete backup is the blobs plus the journal, and a scrub re-hashes blobs to detect corruption.
* **Concurrency:** A process-wide mover mutex serializes a periodic disk quota check, the API, and the job worker.
* **Safe Moves**: Executes safe cross-filesystem moves by copying the original to a temp sibling, running `fsync`, checking the SHA-256 of the copy, renaming it into place, then unlinking the source.
* **Recovery**: Crash recovery runs at startup, before the mover or API exist, ensuring interrupted moves are resolved before anything else can touch them.
* **Testing:** Crash tests kill the process at each registered crash point and check that the archive's journal recovers; recovery from index deletion and blob corruption are also tested.
* **Deployment**: Runs on a Debian 12 HP N40L microserver. The archive lives on a btrfs RAID1 pair, so either disk can fail without data loss.
