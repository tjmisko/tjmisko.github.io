---
project-title: "TRMNL Dashboard"
project-type: "Software - E-Ink Dashboard - Bash, Go & Liquid"
project-status: "Active Development"
project-headline: A wall-mounted e-ink dashboard that pulls the day's transit, weather, calendar, and tasks from a dozen sources into one glanceable screen.
github: TRMNL-Configuration
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
arc:
  node:
    small: true
    label: "TRMNL Dashboard"
    sub: "E-ink daily brief · Bash + Go + Liquid"
    span: "Feb 2026 – Present"
    blurb: "A dozen sources aggregated into one wall-mounted screen I actually read every morning."
---
* **What it is.** A custom plugin for the TRMNL e-ink display that gathers everything the day needs — the next trains, the forecast and any rain or weather alerts, today's calendar events, today's tasks, birthdays, and the weekly and monthly checklists — and renders it as a single quiet screen. It hangs on a wall in my house and I read it every day.
* **Why it matters.** The information was already there, spread across a calendar, a notes vault, a weather app, and a transit app — each one a phone unlock and a context switch away. Putting it on a wall in e-ink makes it glanceable and unbaiting: it draws no attention until you look at it, and it has nothing to sell you when you do.

**Technical details**

* Built the aggregator as a fan-out of standalone executables: `update` runs each source's `fetch`, and every one prints a JSON document and exits zero even on failure, so a rate-limited API or an unreachable feed degrades to an empty section instead of taking down the screen. Each result is validated with `jq empty` against a typed fallback before it reaches the merge
* Wrote the BART departures module in Go against the agency's GTFS-Realtime protobuf feed, joining live trip updates to the static GTFS trip table to resolve route identities, filtered to the specific origin and destination platforms and the two routes I actually ride
* Pulled weather from the National Weather Service gridpoint API for two cities, deriving the rain call from the maximum hourly precipitation probability before the end of day rather than the daily summary, and merged active alert zones into a single banner
* Made events a pluggable aggregation of its own: source adapters (an ICS feed reader in Go, a recurring-events reader over my notes) each emit the same normalized event schema, and only the aggregator knows what "today" means
* Sourced tasks straight out of my plain-text Obsidian vault with ripgrep, matching the same dated-task syntax `taskbuffer.nvim` uses, so the wall screen and the editor read one set of files
* Wrote the display template in Liquid against a fixed 800×480 e-ink panel with no scroll: it counts the rows it is about to draw and steps the font size down through five stops so a heavy day still fits on one screen
* Publishes a single `trmnl.json` the device polls every fifteen minutes, with a containerized local preview server standing in for the endpoint during template work
