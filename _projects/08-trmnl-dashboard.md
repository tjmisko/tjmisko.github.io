---
project-title: "TRMNL Dashboard"
project-type: "Software - E-Ink Dashboard - Bash, Go & Liquid"
project-status: "Active Development"
project-headline: "A plugin for a TRMNL e-ink dashboard that displays the day's birthdays, events, tasks, transit, and weather on my wall at home."
github: TRMNL-Configuration
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
arc:
  node:
    small: true
    order: 5
    label: "TRMNL Dashboard"
    sub: "E-ink dashboard plugin · Bash, Go, Liquid"
    span: "Feb 2026 – Present"
---
A plugin for a TRMNL e-ink display, integrating the day's events, tasks, birthdays, and recurring checklists (Nighttime, Sunday, and Evening) into one easy-to-read dashboard. 

## Details
* A Go module reads BART's GTFS-Realtime feed, joins it to the static GTFS trip table, and filters to the platforms and routes I ride.
* Tasks and events data are parsed from YAML frontmatter and from Taskbuffer in my Obsidian vault.
* Weather and active alerts come from the National Weather Service API for Oakland, California, and the Berkeley Marina.
* The device polls one JSON file every fifteen minutes.
