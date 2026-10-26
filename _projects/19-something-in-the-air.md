---
project-title: "Something in the Air: How Policy Affects Air Quality"
project-type: "Economic Research - Regression Analysis - Working Paper"
project-status: "Completed Spring 2022"
project-headline: "A working paper estimating which of 40,000 national air-quality policies reduced pollution across 38 OECD countries."
project-supervisor: "Prof. Clair Brown, UC Berkeley"
github: sp2022-honors-thesis
pdf: something-in-the-air
tags:
  - "all"
  - "economics"
  - "data"
arc:
  lane: data
  row: 3
  between: true
  start: 2022
  end: 2022.5
  kind: paper
  label: "Something in the Air (Honors Thesis)"
  sub: "Policy × air quality · time series · R"
  span: "Completed Spring 2022"
---
For my senior honors thesis I built a dataset of over 40,000 national air-quality policies and regulations across 38 OECD countries from the ECOLEX database, then used time-series regression to estimate which policy categories reduced six air-pollution metrics.

* I scraped the HTML and JSON records from ECOLEX in Python.
* Policies were classified with bag-of-words and keyword analysis, with each category's effect modeled separately.
* The time-series regressions ran in R.
