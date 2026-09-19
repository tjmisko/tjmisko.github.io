---
project-title: "SSPI Full Stack Web Application"
project-type: "Software - Research Data Platform - Python, Flask, MongoDB & JavaScript"
project-status: "Completed Dec 2025"
project-headline: "The research platform behind sspi.world, from data collection to the public site: a metadata-driven Flask and MongoDB pipeline from 25 statistical organizations to a published policy index, built 2023 to 2025."
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
  label: "sspi.world"
  sub: "Flask · MongoDB · ETL DAG · CLI · CI/CD"
  span: "Feb 2023 – Dec 2025"
  phases:
    - start: 2023.2
      cadence: active
      span: "Feb – Aug 2023"
      note: "Data collection, the Flask backend, the first pipeline, and internal interfaces."
    - start: 2023.5
      cadence: backburner
      span: "Aug 2023 – Jul 2024"
      note: "Maintenance, expanding data collection, and evening work while at BRG."
    - start: 2024.5
      cadence: active
      span: "Jul 2024 – Dec 2025"
      note: "Primary work again at IRLE: the ETL pipeline, CLI, CI/CD, and the public site."
---
The platform behind sspi.world: a metadata-driven ETL pipeline that pulls from 25 statistical organizations, scores the SSPI, imputes gaps, and serves it through a Flask API, a Click CLI, and JavaScript charts. I built it from 2023 to 2025, my first engineering project, with about fifteen Berkeley student contributors. About 3,300 of the commits are mine, and none before 2026 carries an agent co-author trailer.

* The pipeline runs in five stages: collect, clean, compute, impute, finalize. It covers 183 datasets, and each imputed observation records its method and distance from observed data.
* I refactored 51 per-indicator Flask routes into one generic route over a decorator registry. The index definition is committed as YAML, and a scoring function's parameter names declare its dependencies.
* The index originally covered 49 pre-selected countries. It now collects every country its sources report, and over 70 exceed 80% coverage.
* A tag-triggered GitHub Actions release runs the tests, builds a checksum-verified tarball, and swaps a symlink over SSH.
* In 2024 contributor PRs waited months while I was the only merge path, so I handed first-pass review to a second reviewer.
