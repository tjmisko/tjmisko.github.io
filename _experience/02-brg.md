---
project-title: "Berkeley Research Group"
project-type: "Economics & Damages Associate - Emeryville, CA"
project-status: "Completed Jul 2024"
project-headline: A year building the empirical record behind expert reports — Stata pipelines shipped to opposing counsel to re-run.
arc:
  lane: data
  row: 5
  start: 2023.5
  end: 2024.5
  label: "BRG &middot; Antitrust Econometrics"
  span: "Aug 2023 – Jul 2024"
  blurb: "Litigation econometrics whose do-files had to reproduce every reported figure from raw inputs."
---
* **What it is.** Economic and damages consulting: building the empirical analysis behind expert reports in antitrust and commercial litigation, in Stata, starting from raw client and third-party data.
* **Why it matters.** Litigation analysis ships to the other side as a backup, and opposing experts re-run it looking for a crack. Writing code under that constraint — every figure in a report reproducing end-to-end from raw inputs — is where the habit of building for outside scrutiny came from.

**Technical details**

* Wrote reproducible Stata analysis pipelines whose do-files regenerate every figure they report end-to-end from raw inputs, shipped as litigation backups subject to adversarial re-running by opposing experts
* Built coverage, sanity, and outlier checks into those pipelines, which caught real defects before they reached a report
* Built BinderBuilder, a Python CLI that cut footnote-checking on expert reports from roughly 60 to 25 seconds in the common case — it has its own entry in the portfolio
