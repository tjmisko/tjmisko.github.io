---
project-title: "SSPI Full Stack Web Application"
project-type: "Software and Data Engineer"
project-status: "Completed Dec 2025"
project-headline: "sspi.world — a full-stack web app that turns a large policy dataset into an interactive, explorable index, built and deployed end-to-end."
github: sspi-data-webapp
website: sspi.world
project-supervisor: Clair Brown
project-collaborators: Max Strongman, Ruotong Xu, Aadil Jamari
tags:
  - "all"
  - "data"
  - "software"
arc:
  lane: software
  row: 7
  start: 2024
  end: 2026
  label: "sspi.world — hand-built full stack (~2 yrs)"
  sub: "Flask · Mongo · ETL DAG · CLI · CI/CD"
---
* **What it is.** The web application behind sspi.world, which collects, cleans, and serves a large policy dataset as an interactive index people can explore by country and indicator. I built the application end-to-end as lead engineer: automated data ingestion and ETL, a Flask backend, a command-line tool for running the pipeline, and the browser interface.
* **Why it matters.** It takes research that used to live in spreadsheets and makes it public, queryable, and reproducible — and along the way the pipeline expanded the dataset's time coverage 20× and country coverage by a third.

**Technical details**

* Built reproducible data-processing workflows and internal data models for large, longitudinal policy datasets
* Developed a CLI tool for orchestrating ETL operations, supporting both human use and programmatic access by AI assistants
* Implemented CI/CD with GitHub Actions and handled Linux-based deployment (Apache + mod_wsgi) on Linode
* Expanded temporal coverage 20× (2018 → 2000–present) and increased country coverage by 34%
* Led undergraduate contributors on engineering tasks, reviewing code, establishing GitHub workflows, and maintaining consistent development standards
