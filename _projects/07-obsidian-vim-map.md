---
project-title: "Vim Map"
project-type: "Software - Obsidian Plugin - TypeScript"
project-status: "Active"
project-headline: "A fork of Obsidian's Map View plugin with vim-style modal navigation over the vault's places and boundary regions kept in notes."
github: obsidian-vim-map
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    small: true
    order: 4
    kind: web
    label: "Vim Map"
    sub: "Obsidian plugin · TypeScript · agent-built to my direction"
    span: "Jul – Aug 2026"
---
Vim Map is a fork of Map View, the Obsidian plugin that places a vault's geolocated notes on an interactive map. The fork adds a modal, keyboard-first way to drive the map and a layer system for boundary regions kept in notes.

*The TypeScript was written by coding agents under my direction and review. All 29 fork commits carry an agent co-author trailer.*

* A normal mode for the map, with a mode badge, a command that focuses the map, vim-like keys for panning, zooming, and moving between markers, and a go-to place finder on `Shift+G`.
* Boundary layers: GeoJSON regions stored in notes, with per-note color, per-level hover panes, nested regions, and a layers toggle in the map controls. Regions inherit their note's tags, so tag queries match them.
* Keyboard interaction degrades gracefully on mobile, where the plugin also runs.
* A deviations file catalogs every place the fork departs from upstream.
