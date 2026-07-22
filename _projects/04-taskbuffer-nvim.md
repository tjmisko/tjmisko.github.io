---
project-title: "taskbuffer.nvim"
project-type: "Software - Neovim Plugin - Go & Lua"
project-status: "Active Development"
project-headline: A Neovim plugin that gathers to-dos scattered across your markdown notes into one unified, time-sorted task list.
github: taskbuffer.nvim
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    label: "taskbuffer"
    sub: "Pure-Lua rewrite · agent-directed"
---
* **What it is.** A Neovim plugin that scans your plain-text markdown files, pulls out every task — checkboxes, dates, tags, durations — and collects them into a single buffer grouped by when they're due (Overdue, Today, This Week). You can complete, defer, or time tasks right from that view.
* **Why it matters.** Notes accumulate to-dos everywhere. This brings them together without leaving the editor or adopting a separate task app, so your tasks stay in plain text you own.

**Technical details**

* Built the tool first as Bash scripts, then as a compiled Go binary behind a Neovim Lua UI — a config-driven Go parsing engine (regex generated from user config; checkboxes, dates, tags, durations, markers), ripgrep-backed recursive scanning, and output formatted into time-bucketed horizons (Overdue, Today, This Week)
* Implemented in-place file mutation for task state changes (defer, complete, mark irrelevant) with marker tracking and timer start/stop/complete workflows, plus multiplatform test coverage in Docker and GitHub Actions CI
* Directed AI coding agents to rewrite the plugin to pure Lua, dropping the Go build step so the current taskbuffer.nvim installs with zero external binary
* Directed a TypeScript port (obsidian-taskbuffer) bringing the same plain-text task workflow to Obsidian
