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
    order: 2
    kind: cli
    era: 2
    label: "Taskbuffer"
    sub: "Neovim + Obsidian plugins · Lua, TypeScript · agent-directed"
    span: "Feb 2026 – Present"
---
Taskbuffer collects the checkbox tasks in my markdown notes into one Neovim buffer, sorted into horizons from Overdue to Someday, and edits the source notes in place. It is pure Lua with no build step and depends only on ripgrep. I use it daily.

*I hand-wrote the first two versions, about ninety lines of Bash and a 62-line Go filter in a separate repo, and coding agents under my direction wrote all of taskbuffer.nvim, Go version included, and the Obsidian port.*

* It began as a Bash script, with a small Go program taking over date bucketing when the vault grew.
* The first plugin version required a Go toolchain and a build step on the user's machine, so I had agents rebuild it in pure Lua.
* The Lua cutover ran behind a flag, gated on parity with the Go binary it replaced.
* A TypeScript port for Obsidian drives the same notes from my phone, held in parity by a written contract and a ported test corpus.
