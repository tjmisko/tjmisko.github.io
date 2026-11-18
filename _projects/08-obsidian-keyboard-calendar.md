---
project-title: "Keyboard Calendar"
project-type: "Obsidian Plugin - TypeScript"
project-status: "Active - Daily Use"
project-headline: "A modal, vim-inspired Calendar Plugin for Obsidian. Musophobes can now keep calendars too! Daily, weekly, and monthly views supported across desktop and mobile, all backed by plaintext events."
github: obsidian-keyboard-calendar
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    small: true
    order: 4
    kind: web
    label: "Keyboard Calendar"
    sub: "Obsidian Plugin · TypeScript" 
    span: "Aug 2026 – Present"
---
Keyboard Calendar provides a simple, frontmatter-backed, keyboard navigable calendar for Obsidian.

## Interaction Model
* Any note tagged with the `event` tag gets interpreted as an event, with `date`, `start`, `end`, and `recurrence` fields parsed from the frontmatter. FullCalendar then renders these events in month, week, and day views. It runs on desktop and phone.
* Normal mode moves between events with `h`, `j`, `k`, `l` and counts
* Grab mode slides an event in 15-minute steps, scale mode stretches its end, and a blockwise insert mode drafts a new event from a quarter-hour cell. Moves and scales undo and redo.

## Technical Details
* Keyboard Calendar is a fork of the Obsidian Full Calendar plugin, substantially cut down.
* Edits preserve unrelated frontmatter and the note body. 
* Weekly recurrence keeps local wall-clock time across daylight saving changes, and omitted occurrences are recorded in the note.

The TypeScript was written by coding agents under my direction and review, and fine-tuned for performance.
