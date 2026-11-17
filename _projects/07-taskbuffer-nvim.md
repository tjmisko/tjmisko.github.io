---
project-title: "Taskbuffer"
project-type: "Software - Neovim Plugin - Lua, with a TypeScript Obsidian Port"
project-status: "Completed April 2026"
project-headline: "Centralizes and sorts plaintext tasks across markdown notes or codebases into one time-sorted interactive Neovim buffer (or Obsidian window, for mobile support)."
github: taskbuffer.nvim
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  # One project, two eras, drawn in two places. The 2024 shell tool is a mini on
  # the side-projects row beside BinderBuilder; the 2026 plugins are a mini in
  # the panel's Software Tools band. Both open this one card, both list the
  # same two phases, and each lights its own (arc.era / arc.node.era).
  lane: software
  row: 6
  start: 2024.5
  end: 2025
  kind: cli
  era: 1
  label: "Taskbuffer"
  sub: "Bash CLI + Go date filter · hand-written"
  span: "Oct 2024 – Jun 2025"
  # No blurb override: the popover reads the headline, and the lit line of the
  # phase list below is what says which era this chip is.
  phases:
    - start: 2024.75
      end: 2025.5
      span: "Oct 2024 – Jun 2025"
      note: "Hand-wrote a ~90-line Bash CLI and a 62-line Go filter that bucketed tasks into six date horizons, still the plugin's defaults today."
    - start: 2026.13
      end: 2027
      span: "Feb 2026 – Present"
      note: "Directed the agent-built Neovim plugin, its pure-Lua rewrite cut over on byte-parity with the binary it replaced, and the Obsidian port that drives the same notes from a phone."
  node:
    small: true
    order: 3
    kind: cli
    era: 2
    label: "Taskbuffer"
    sub: "Neovim + Obsidian plugins · Lua, TypeScript · agent-directed"
    span: "Feb 2026 – Present"
---
Taskbuffer collects tasks from my notes and projects into one Neovim buffer, sorted and grouped into horizons. Edits in the central virtual buffer modify the source notes in place. Task state remains distributed, making it easy to create and group tasks locally.

Today, Taskbuffer in Neovim is pure Lua with a ripgrep dependency. I use it daily.

## History
* Taskbuffer began as a Bash script, with a small Go program taking over date bucketing when the vault grew.
* I converted and extended this to a Go-based Neovim plugin in early 2026, but this required a clunky `go build` step on the user's machine, so I had agents rebuild it in pure Lua.
* A TypeScript port for Obsidian implements the same core behavior, held in parity by a written contract and a ported test corpus. It enables me to work from the taskbuffer on my phone.

I hand-wrote the early versions, then used coding agents to port and extend functionality to taskbuffer.nvim and obsidian-taskbuffer.
