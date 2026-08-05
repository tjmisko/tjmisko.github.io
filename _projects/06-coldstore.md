---
project-title: "Coldstore"
project-type: "Software - Storage Daemon - Go, React & ZFS"
project-status: "Completed Mar 2026"
project-headline: A home-server daemon that keeps synced folders inside a size budget by moving old files to cold storage, with a web gallery that still shows every one of them.
github: Microserver
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
arc:
  node:
    label: "Coldstore"
    sub: "Syncthing cold storage · Go + React + ZFS"
    span: "Jan – Mar 2026"
    blurb: "Synced folders stay inside a budget; the files that age out stay browsable and one click from coming back."
---
* **What it is.** A Go daemon running on a home server that watches each Syncthing folder against a size budget. When a folder runs over, the oldest and least-touched files are moved off to a ZFS cold-storage pool, and Syncthing propagates the deletion so they leave every phone and laptop too. A React web interface shows the whole library — archived files alongside synced ones, with thumbnails — and any file can be restored to sync or downloaded straight from the browser.
* **Why it matters.** Syncthing keeps every device in step, which means every device carries the whole library and the smallest disk sets the ceiling. This puts a budget on each folder and makes the overflow addressable instead of gone: the photo from four years ago is still there with a thumbnail, one click from coming back.

**Technical details**

*Direction and architecture mine; the Go and React implementation was built by AI coding agents I ran to my specification, in six reviewed phases. The original Flask prototype was hand-written.*

* Provisioned the storage underneath it: three drives in a ZFS raidz1 pool giving ~3.6TB usable with single-drive fault tolerance, LZ4 compression, snapshots, and block checksumming that pairs with the daemon's own SHA-256 move verification for end-to-end integrity
* Directed the offload policy as a scored eviction: files rank on `max(mtime, atime)` and the lowest goes first, with per-folder glob patterns marking directories that must never be evicted whatever their age
* Made the daemon safe to run against a live sync rather than fighting it — it only moves files on disk and lets Syncthing's watcher notice, holds a grace period so it can't race an in-flight transfer, re-checks mtime immediately before moving, and reconciles on every pass so a file another device re-syncs is caught and marked back to synced
* Directed the failure handling the design actually needs: cross-filesystem moves fall back to copy, verify, then delete when `os.Rename` returns `EXDEV`; offloading pauses with a warning under 5% free on the cold pool; and no eviction happens at all until the first full scan has completed
* Specified a SQLite catalog as the one source of truth for what exists where — every file synced or archived, its status, metadata, and thumbnail — so the web interface can present one library across two filesystems
* Directed a thumbnail pipeline over a bounded worker pool covering images, video, and PDF through three different tools, so the gallery works for a folder of books as well as a camera roll
* Directed the React frontend as a single page with no state-management library — an infinite-scroll gallery on an IntersectionObserver, a sortable file browser, and a config panel for budgets and never-evict rules — compiled into the Go binary at build time so deployment is one file plus a systemd unit
* Directed a two-tier test setup: in-process end-to-end tests behind a build tag that exercise the full scan-offload-restore pipeline on temp directories, plus a Docker Compose tier that runs the daemon against a real Syncthing instance with a health-gated startup
