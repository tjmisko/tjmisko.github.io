---
project-title: "Retend"
project-type: "Software - Time Tracking - Bash, Neovim & Go"
project-status: "Completed Early 2024" 
project-headline: "Retrospective time tracking system and dashboard in fifteen minute intervals." 
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
Iterated through several form factors for a simple, keyboard based timetracking tool.

## Project Arc
- Began using Google Calendar to keep track of what I attended to everyday, and cobbled together some Bash Scripts to parse the results. Built some simple charts bar charts with draggable components in raw JS to undestand charting works.
- Tinkered with an implementation in Java (Spring) and Neo4j (which in retrospect were...choices) to flexibly model categories and relationships between timeblocks. Didn't really get where I wanted to go with this.
- Settled in early 2024 on the plaintext vim buffer design I still use whenever I want to be locked in on time management: one daily `.retend` file of 96 lines per day, one per quarter hour, with a simple plaintext syntax for timeblocks to enable `ci{` and `ci(` to edit the Category and Title of the block respectively, and room for arbitrary length notes at then end of the line. 
- The `retend` script opens today's file in Neovim with the cursor on the current quarter hour.
