---
project-title: "Retend"
project-type: "Software - Time Tracking - Bash, Neovim & Go"
project-status: "Completed Early 2024 - Still In Daily Use"
project-headline: A retrospective time-tracking system that turns a plain-text file and a Neovim keystroke into a full day's record of where the hours went.
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
  label: "Retend"
  sub: "Time tracking · Bash + nvim"
  span: "Late 2022 – Early 2024"
  blurb: "Intend, attend, retend: a day as 96 quarter-hour lines you fill in after the fact."
---
* **What it is.** A time-tracking system with almost no interface. Each day is one plain-text file of 96 lines, one per quarter hour; typing `retend` opens today's file in Neovim with the cursor already on the line for the current quarter hour, and you write down what you actually did. Categories and titles are tagged inline, so a year of days is greppable.
* **Why it matters.** Every time tracker I tried asked me to declare what I was doing before I did it, which is exactly when I'm least willing to stop and type. Recording retrospectively removes that friction entirely — the cost of logging an hour is one keystroke and a few words afterward — and because the record is plain text I own, it stays queryable long after any app would have gone away.

**Technical details**

* Arrived at the design by discarding two others: a Google Calendar-based log in late 2022, whose entry cost was higher than the value of the record, and an abandoned Neo4j and Java application that modeled time as a graph before it was clear a graph was the wrong shape for the problem
* Landed on plain text in early 2023 — one `.retend` file per day, where a line's position *is* its timestamp, so no line has to carry a time and the file needs no parser to be read by a human
* Computed the cursor jump arithmetically from the wall clock (`hours × 4 + ⌈minutes ÷ 15⌉`) so the editor opens on the right line rather than searching for it
* Built the review tooling out of the same plain-text assumption: a catch-up mode that opens the last week side by side in vertical splits, a ripgrep-backed audit that finds days where the category or title placeholders were left unfilled, and per-category rollups across arbitrary date ranges
* Wrote a Go exporter that reads the daily files, coalesces consecutive quarter hours sharing a category into contiguous time blocks, and emits standard ICS — so the retrospective record can be read back into any calendar
* Tried and abandoned an Obsidian plugin port in TypeScript; the editor-native version was already faster than the plugin would have been
