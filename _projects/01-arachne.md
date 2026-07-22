---
project-title: "Arachne"
project-type: "Software - Local-First Automation Platform - Rust & React"
project-status: "Active Development"
project-headline: Platform for automating the mechanical parts of knowledge work. A visual canvas captures a repeatable process, allows rapid iteration, delegate chunks of work to AI responsibly, and automates bookkeeping and auditability of information flowing through the system.
tags:
  - "all"
  - "software"
  - "automation"
arc:
  node:
    label: "Arachne"
    sub: "Auditable AI-pipeline canvas · directing agent fleets"
---
* **What it is.** A desktop platform where you describe a task in plain language and an AI agent assembles it as a visual graph of small, inspectable steps. You review the graph before it runs, the same inputs always produce the same outputs, and every result links back to the source data that produced it.
* **Why it matters.** Most AI tools ask you to trust a black box. Arachne lets non-programmers build and audit their own automations — and because it runs locally and deterministically, the results are reproducible and safe to rely on for real work.

**Technical details**

*Architecture and direction mine; the Rust + React implementation was built by a fleet of AI coding agents I ran to my specification.*

* Designed code-safety as a property of the language instead of a jail: agent-authored transforms run in a structurally-hermetic Starlark sandbox (engine `starlark-1`), a Python dialect with no primitives for I/O, the clock, entropy, sockets, or subprocess — so purity, determinism, and hermeticity hold by absence of capability rather than runtime enforcement, retiring a parked `seccomp`/`landlock` design as unnecessary. A 35-case adversarial escape corpus asserts every attempt — open a socket, `__import__`, `os.urandom`, `eval`/`exec` — fails closed.
* Specified the confinement of an uncancellable, `!Send` Starlark interpreter that can't be stopped mid-run: it executes on a dedicated OS thread that owns its heap end-to-end and only sends back `Send` data, while the host services its calls over an `mpsc` channel under a `recv_timeout` wallclock deadline — so a runaway transform is abandoned on a deadline rather than wedging the server, backstopped by `RLIMIT_AS` heap and output caps.
* Architected the execution engine as a parallel DAG scheduler around `PlanCursor`, a pure single-owner data structure with no `Arc<Mutex>` on the hot path: one dispatcher owns the cursor per run and pumps the ready frontier through a `tokio` `JoinSet`. Per-resource semaphores are acquired in canonical sorted order to make rate-limiting deadlock-free, and a serializable `CursorSnapshot` lets a run paused on a human-review gate survive a server restart losslessly, resuming without re-firing upstream side effects.
* Specified the node-graph canvas — React 18, no react-flow, no state-management library. Nodes are DOM `<div>`s and edges are SVG `<path>`s living inside one `CanvasViewport` transform applied exactly once, so zoom alignment is correct by construction; off-screen nodes and edges are unmounted from the DOM (not merely hidden) by viewport culling, and a Playwright spec enforces a hard p95 < 20ms frame budget for both pan and zoom.
* Directed the build with a self-governing fleet of AI coding agents running unattended in Docker: a concurrency-capped pool materializes one git worktree per agent, a markdown + YAML task-graph encodes preconditions and definitions-of-done, and three independent watchdogs keep it alive — a hysteresis disk monitor (pause < 10 GB, panic < 5 GB), a stale-log hang killer (15 min), and a Wi-Fi-firmware reset for the Apple-Silicon `brcmfmac` wedge — all behind a hard `iptables` egress allowlist.
* Designed auditability in from the start: every file carries an append-only provenance chain, every AI claim references the specific source passage that supports it, and ambient impurities like the clock and randomness are lifted into explicit upstream source blocks — so a transform stays mechanically pure and its inputs are honestly attributed in provenance.
