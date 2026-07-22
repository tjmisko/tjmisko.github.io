---
project-title: "BinderBuilder"
project-type: "Software - Automation - Internal Tool"
project-status: "Completed Mar 2024"
project-headline: A command-line tool that automates footnote-checking and binder assembly for expert reports, cutting a slow manual task by 80–90%.
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
arc:
  lane: software
  row: 6
  start: 2024
  end: 2024.5
  kind: cli
  label: "BinderBuilder"
  sub: "Python CLI · NLP footnote-checker · built at BRG"
---
* **What it is.** A Python tool that reads an expert report, extracts every footnote and its citation, finds the matching source document, and assembles a verified, highlighted binder of supporting materials — work that was previously done by hand.
* **Why it matters.** Footnote verification is slow, error-prone, and high-stakes in legal and expert work. The tool cut the time spent by 80–90% in testing while making the checks more consistent.

**Technical details**

* Built CLI application in Python using Click
* Parsed Word document XML to extract footnotes and associated text
* Used lightweight NLP to identify key citation attributes (authors, years, titles)
* Implemented candidate-file matching with fuzzy search (fzf, ripgrep, pymupdf)
* Integrated PDF rendering and highlighting via mupdf subprocesses
* Eliminated duplicated manual file-retrieval steps and improved consistency of QA
