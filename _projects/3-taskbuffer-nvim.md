---
project-title: "taskbuffer.nvim"
project-type: "Software - Neovim Plugin - Go & Lua"
project-status: "Active Development"
project-headline: Built a Neovim plugin with a Go backend and Lua frontend that scans, parses, and aggregates tasks from plain-text markdown files into a unified, time-bucketed task buffer.
github: taskbuffer.nvim
tags:
  - "all"
  - "software"
  - "tooling"
---
* Built a Go binary that uses ripgrep to scan markdown files, parses task syntax (checkboxes, dates, tags, durations, markers) via config-driven regex, and formats output into time-bucketed horizons (Overdue, Today, This Week, etc.)
* Implemented in-place file mutation for task state changes (defer, complete, mark irrelevant) with marker tracking and timer start/stop/complete workflows
* Wrote the Lua frontend for Neovim: buffer management, keymaps, Telescope tag picker, and autocmds for live refresh
* Evolved from a set of bash scripts to a compiled Go binary with multiplatform test coverage in Docker and GitHub Actions CI
