---
project-title: "Something in the Air: How Policy Affects Air Quality"
project-type: "Economic Research - Regression Analysis - Working Paper"
project-status: "Completed Spring 2022"
project-headline: "A working paper measuring which national air-quality policies actually reduced pollution across the OECD."
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
  start: 2022
  end: 2022.5
  kind: paper
  label: "Something in the Air (Honors Thesis)"
  sub: "Policy × air quality · time series · R"
---
* **What it is.** A study that built a 60,000-observation dataset of air-quality policies across OECD countries and used time-series regression to estimate which categories of policy actually moved six different air-pollution metrics.
* **Why it matters.** Governments adopt many environmental policies but rarely know which ones work. This separates the effective levers from the symbolic ones, pointing to where regulation delivers the biggest air-quality gains.

**Technical details**

* Scraped HTML and JSON data in Python to construct and categorize a 60,000-observation dataset on national-level policies and regulations on air quality across the OECD
* Developed a model for separately estimating the effect of different policy categories on different pathways for the reduction of air pollution
* Conducted a time-series regression analysis of the relationship between air-quality policy data and air-quality outcomes in R to evaluate which policy categories were most effective at reducing air pollution in the period
