---
project-title: "Institute for Research on Labor and Employment"
project-type: "Software & Data Engineer - Berkeley, CA"
project-status: "Completed Dec 2025"
project-headline: Sole engineer on sspi.world — the application, the pipelines, the CI/CD, and the Linux box underneath it.
website: sspi.world
arc:
  lane: research
  tone: data
  row: 5
  relay: true
  start: 2024.5
  end: 2026
  label: "IRLE &middot; Software &amp; Data Engineer"
  span: "Jul 2024 – Dec 2025"
  blurb: "Sole engineer on the research platform, plus the CI/CD and the server under it."
---
* **What it is.** A return to IRLE on the engineering side: sole engineer on sspi.world, the research platform that collects, computes, and publishes the SSPI policy index. I owned it end to end — Flask and MongoDB application, a five-stage ETL pipeline, the release process, and the server it runs on — and led three research teams of about six undergraduates each over my years there.
* **Why it matters.** It replaced a manual Google Sheets process with reproducible automated pipelines across 60+ sources, so data coverage decided which countries the index could include rather than the reverse.

**Technical details**

* Designed a five-stage DAG pipeline (collect, clean, compute, score, finalize) with fail-fast validation over several million records
* Built a Click CLI wrapping the app's HTTP endpoints for development and data exploration; in 2025 it became the structured interface my AI coding agents used to work inside the codebase
* Operated the platform the team depended on: semver-tagged releases via GitHub Actions over SSH with atomic symlink swaps, root-caused MongoDB OOM kills, and migrated Apache to NGINX
* The application itself has its own entry in the portfolio
