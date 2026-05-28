---
project-title: "BinderBuilder"
project-type: "Software - Automation - Internal Tool"
project-status: "Completed March 2024"
project-headline: Developed a Python CLI tool automating footnote verification and binder assembly for expert reports, reducing time spent on footnote checking and binder creation by 80-90% across test cases.
tags:
  - "all"
  - "software"
  - "tooling"
  - "automation"
---
* Built CLI application in Python using Click
* Parsed Word document XML to extract footnotes and associated text
* Used lightweight NLP to identify key citation attributes (authors, years, titles)
* Implemented candidate-file matching with fuzzy search (fzf, ripgrep, pymupdf)
* Integrated PDF rendering and highlighting via mupdf subprocesses
* Eliminated duplicated manual file-retrieval steps and improved consistency of QA
