---
project-title: "BinderBuilder"
project-type: "Software - Automation - Internal Tool - Python"
project-status: "Completed Apr 2024"
project-headline: "A command-line tool that matches expert-report footnotes to their sources, highlights the cited passage, and structures the QC and verification loop, cutting per-footnote checking in the common case from about 60 to 25 seconds."
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
  span: "Feb – Apr 2024"
---
Expert-report footnotes are checked against their sources by hand. BinderBuilder is a Python CLI I wrote at BRG in 2024 to find and open the source for each one.

* It extracts the 200 to 500 footnotes from the report's Word document and pulls citation attributes with tokenization and TF-IDF.
* It fuzzy-matches those attributes to source filenames with fzf and opens the best match for review.
* It highlights the cited passage in the PDF with MuPDF where the text can be located.
* Checking time in the common case fell from about 60 to 25 seconds per footnote, measured against timecards.
