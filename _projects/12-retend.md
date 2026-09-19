---
project-title: "Retend"
project-type: "Software - Time Tracking - Bash, Neovim & Go"
project-status: "Completed Early 2024 - Still In Daily Use"
project-headline: "Time tracking in which each day is a 96-line plain-text file, one line per quarter hour, filled in after the fact from Neovim."
github: RetendExport
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  lane: software
  row: 6
  start: 2022.75
  end: 2024.1
  kind: cli
  label: "Retend"
  sub: "Time tracking · Bash + nvim"
  span: "Late 2022 – Early 2024"
---
Each day is one plain-text `.retend` file of 96 lines, one per quarter hour, and the whole record is greppable. Running `retend` opens today's file in Neovim with the cursor on the current quarter hour, and I write down what I did after the fact.

* Two designs were discarded, a Google Calendar log in late 2022 and a Neo4j and Java application, before the plain-text format in early 2023.
* A line's position is its timestamp, so lines carry no time and the file needs no parser.
* The review tooling is a catch-up mode opening the last week in splits, a ripgrep audit for unfilled days, and per-category rollups over date ranges.
* A small Go exporter from late 2024 coalesces consecutive quarter hours in the same category into blocks and emits ICS.
