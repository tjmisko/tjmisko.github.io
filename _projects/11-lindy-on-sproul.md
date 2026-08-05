---
project-title: "Lindy on Sproul"
project-type: "Web Development - Front End - Jekyll & JavaScript"
project-status: "Built 2022 - Site Retired 2025"
project-headline: The public website for UC Berkeley's swing dance club, designed and built from scratch as my first real programming project.
project-collaborators: "Jennifer Tachibana, Alan Jian"
external-github: "lindyonsproul/lindyonsproul.github.io"
tags:
  - "all"
  - "software"
arc:
  lane: software
  row: 6
  start: 2022
  end: 2022.5
  kind: web
  label: "Lindy on Sproul"
  sub: "Club website · Jekyll · JS"
  span: "Jan – Jun 2022"
  blurb: "The swing dance club's website, and the project where the programming actually started."
---
* **What it is.** The website for Lindy on Sproul, UC Berkeley's swing dance club: a responsive static site carrying the class schedule, event announcements, an embedded live calendar, and an FAQ, designed and built with two collaborators over the first half of 2022 and maintained through the year.
* **Why it matters.** This is where the programming started. I came to it as a dancer who wanted the club to have a decent website and left it knowing HTML, CSS, JavaScript, Jekyll, and Git — everything after it is downstream of this project, and the habit of building the tool rather than asking for one begins here. The site was retired in 2025 when the club moved on.

**Technical details**

* Designed and built a responsive static site with HTML, SCSS, and JavaScript on Jekyll, deployed through GitHub Pages on a custom domain
* Built a parallax landing treatment, then rebuilt it later in the year as an animated infinite image carousel on CSS transitions and the GreenSock animation library, when the parallax proved unsalvageable on mobile
* Fixed the mobile layout properly rather than hiding it — flex-box minimum widths, horizontal overflow, and a header dropdown that disappeared under its own stacking context
* Embedded and dynamically resized a live Google Calendar so the class and social schedule stayed correct without anyone editing the site
* Worked the project as a three-person team on a shared repository — feature branches, merge conflicts, and review — which is where the version control came from
