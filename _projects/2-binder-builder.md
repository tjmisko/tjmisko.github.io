---
project-title: "BinderBuilder"
project-type: "Software Engineering"
project-status: "Completed March 2023"
tags:
  - "all"
  - "software"
  - "automation"
---
* Developed a CLI tool that automated footnote verification and binder assembly for expert reports
* Built CLI application in Python using Click
* Parsed Word document XML to extract footnotes and associated text
* Used lightweight NLP to identify key citation attributes (authors, years, titles)
* Implemented candidate-file matching with fuzzy search (fzf, ripgrep, pymupdf)
* Integrated PDF rendering and highlighting via mupdf subprocesses
* Reduced time spent on footnote checking and binder creation by 80–90% across test cases
* Eliminated duplicated manual file-retrieval steps and improved consistency of QA
