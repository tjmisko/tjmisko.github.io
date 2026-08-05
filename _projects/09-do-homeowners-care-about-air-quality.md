---
project-title: "Do Homeowners Care About Air Quality? Evidence from Wildfire Smoke"
project-type: "Economic Research - Regression Analysis - Working Paper"
project-supervisor: "Silvia Fregoni, UC Berkeley"
project-status: Completed Fall 2021
project-headline: A working paper testing whether home prices fall when wildfire smoke worsens local air quality.
github: fa2021-wildfire-smoke-paper
pdf: wildfire
tags:
  - "all"
  - "economics"
  - "data"
arc:
  lane: data
  row: 3
  between: true
  start: 2021.5
  end: 2022
  kind: paper
  label: "Do Homeowners Care About Air Quality?"
  sub: "Wildfire smoke × home prices · causal inference · R"
  span: "Completed Fall 2021"
  blurb: "Wildfire smoke as a natural experiment for what clean air is worth in home prices."
---
* **What it is.** An empirical study that uses wildfire smoke as a natural experiment: I matched ~28 million satellite smoke observations to ~98,000 home prices at the county-month level and ran a regression analysis to estimate whether worse air quality pushes housing prices down.
* **Why it matters.** It asks what clean air is worth, as revealed by what people pay for homes. The estimates came back null — itself an informative result about what county-month price data can and cannot detect.

**Technical details**

* Implemented a causal regression analysis design in R to evaluate the effect of negative air quality shocks on housing prices
* Matched geospatial wildfire smoke data from NOAA (~28,000,000 observations) to housing price data from Zillow (~98,000 observations) at the US county-month level, with salient control variables, to synthesize a novel dataset for model estimation
* Accounted for spatial autocorrelation of observations to reduce omitted variable bias and generate plausibly causal estimates
