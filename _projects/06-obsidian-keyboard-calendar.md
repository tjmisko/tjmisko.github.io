---
project-title: "Keyboard Calendar"
project-type: "Software - Obsidian Plugin - TypeScript"
project-status: "Active - Daily Use"
project-headline: "A modal, vim-inspired Calendar Plugin for Obsidian. Musophobes can now have calendars too. Daily, weekly, and monthly views supported across desktop and mobile, all backed by plaintext events."
github: obsidian-keyboard-calendar
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    small: true
    order: 3
    kind: web
    label: "Keyboard Calendar"
    sub: "Obsidian Plugin · TypeScript" 
    span: "Aug 2026 – Present"
---
Keyboard Calendar is a fork of the Obsidian Full Calendar plugin, cut down to one model: a single local folder of event notes, each a markdown file with a date, start, and end in its frontmatter, rendered by FullCalendar in month, week, and day views. It runs on desktop and phone.

*The TypeScript was written by coding agents under my direction and review.*

* The calendar is modal. Normal mode moves between events with `h`, `j`, `k`, `l` and counts, grab mode slides an event in 15-minute steps, scale mode stretches its end, and a blockwise insert mode drafts a new event from a quarter-hour cell. Moves and scales undo and redo.
* Edits preserve unrelated frontmatter and the note body. Weekly recurrence keeps local wall-clock time across daylight saving changes, and omitted occurrences are recorded in the note.
* The cut removed the Google and CalDAV connectors, the React event editor, and events stored in daily notes, in phases that each left the plugin buildable, tested, and revertible.
* On narrow screens the week keeps all seven days and scrolls horizontally, with a fixed day view in the mobile drawer.
