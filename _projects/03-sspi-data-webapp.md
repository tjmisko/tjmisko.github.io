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
  start: 2023.2
  end: 2026
  label: "sspi.world — hand-built full stack"
  sub: "Flask · Mongo · ETL DAG · CLI · CI/CD"
  span: "Feb 2023 – Dec 2025"
  blurb: "The research platform behind sspi.world, built end to end from ingestion to public interface."
  phases:
    - start: 2023.2
      cadence: active
      span: "Feb – Aug 2023"
      note: "First build — ingestion, the Flask backend, and the initial pipeline."
    - start: 2023.5
      cadence: backburner
      span: "Aug 2023 – Jul 2024"
      note: "Backburner through the BRG years: maintenance and evenings, not the day job."
    - start: 2024.5
      cadence: active
      span: "Jul 2024 – Dec 2025"
      note: "Primary work again at IRLE — the ETL DAG, the CLI, CI/CD, and the public interface."
---
* **What it is.** The web application behind sspi.world, which collects, cleans, and serves a large policy dataset as an interactive index people can explore by country and indicator. I built the application end-to-end as lead engineer: automated data ingestion and ETL, a Flask backend, a command-line tool for running the pipeline, and the browser interface.
* **Why it matters.** It takes research that used to live in spreadsheets and makes it public, queryable, and reproducible — and along the way the pipeline expanded coverage from a single 2018 snapshot to 2000–present, and from 49 pre-selected countries to 100+ collected.

**Technical details**

* Built reproducible data-processing workflows and internal data models for large, longitudinal policy datasets
* Developed a CLI tool for orchestrating ETL operations, supporting both human use and programmatic access by AI assistants
* Implemented CI/CD with GitHub Actions and handled Linux-based deployment (Apache + mod_wsgi, later NGINX) on Linode
* Expanded temporal coverage from a single 2018 snapshot to 2000–present, and country coverage from 49 pre-selected countries to 100+ collected (67 at >80% coverage)
* Led undergraduate contributors on engineering tasks, reviewing code, establishing GitHub workflows, and maintaining consistent development standards
