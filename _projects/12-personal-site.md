---
project-title: "tjmisko.github.io"
project-type: "Web Development - Front End - Jekyll, SCSS & JavaScript"
project-status: "Built 2022 - Rebuilt 2026 - Live"
project-headline: This site — started in the autumn of 2022 as a Jekyll theme taken apart from the inside, and the sandbox where the front-end techniques got learned rather than borrowed.
project-collaborators: "Jennifer Tachibana"
github: tjmisko.github.io
tags:
  - "all"
  - "software"
arc:
  lane: software
  row: 6
  start: 2022.5
  end: 2023
  kind: web
  label: "tjmisko.github.io"
  sub: "Personal site · Jekyll · JS"
  span: "Sep – Dec 2022"
  blurb: "The site you are reading, first built the autumn after Lindy on Sproul and used as the sandbox for everything a site with users couldn't risk."
---
* **What it is.** My own website, begun in September 2022 on a forked copy of Jekyll's Minima theme and rebuilt out of it over the rest of the year: a homepage, a set of research write-ups with a layout and table of contents of their own, a portfolio, and — in a corner of the same repository — a browser time-tracking prototype that never shipped.
* **Why it matters.** Lindy on Sproul had users, which made it the wrong place to try anything. This one had exactly one stakeholder, so it became the place to learn on: hand-rolled bar charts, draggable and sortable elements, GreenSock timelines and a card carousel positioned by arithmetic were all worked out here. It is also where the time-tracking problem got its first attempt — the Google Calendar log whose entry cost turned out to be higher than the value of the record, which is the failure Retend was designed around a few months later.

**Technical details**

* Forked the Minima theme and rebuilt it from the inside rather than configuring it — custom layouts and includes, a self-hosted IBM Plex Mono, and SCSS partials replacing the theme's skins, so nothing on the page came from a setting I hadn't read
* Wrote the research pages as a layout of their own, with a table of contents, reusable table and bar-chart includes, and a sidebar whose open and close transitions were tuned by hand
* Implemented bar charts directly in JavaScript against the DOM, before reaching for a charting library, to understand what a library would be doing
* Built draggable, sortable elements with live reshuffling on drop, and animated them on GreenSock timelines
* Prototyped a browser time tracker over exported Google Calendar `.ics` data: category rollups, a stacked-bar day view, and a draggable plot for editing blocks. Abandoned deliberately — declaring the work before doing it was the friction, and no interface fixes that
* Worked the project card scroller three ways over the last week of December — manual position arithmetic per card, then flexbox, then a display-index model with timed transitions — which is the same problem the rolodex on this page solves now
* Put it on a custom domain through GitHub Pages in early 2023, and left it there until the 2026 rebuild
