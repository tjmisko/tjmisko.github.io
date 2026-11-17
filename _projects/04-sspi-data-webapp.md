---
project-title: "SSPI Full Stack Web Application"
project-type: "Software - Research Data Platform - Python, Flask, MongoDB & JavaScript"
project-status: "Completed Dec 2025"
project-headline: "The research platform behind sspi.world: Flask & MongoDB backend running a five-stage ETL pipeline, serving a JavaScript and Chart.js frontend, plus the CI/CD and Linux VPS underneath."
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
Designed and built the data platform and full-stack behind [sspi.world](https://sspi.world). 

## Technical Details
The core design is a metadata-driven ETL pipeline managed via a Flask application, using MongoDB for persistence. Central data flow:
1. `collect`: Pull and persist versioned raw data from source organizations (183 datasets from 25 organizations)
2. `clean`: Process raw data from each datasource into a canonical dataset shape
3. `compute`: Evaluate indicator scores as function of datasets
4. `impute`: Supplement data gaps with clearly flagged imputed values generated from regression-based estimates, *ad hoc* secondary research, interpolations, or extrapolations as the case demands
5. `finalize`: Compute and score the SSPI tree from completed indicator values

The frontend presents charts (reusable chart components built with Chart.js) and dashboards as well as additional tools for analysis, index customization, and sensitivity testing. 

## Highlights
* Initiated and led the Sustainable and Shared-Prosperity Index's shift to programmatic data collection, expanding coverage 30×.
* When a teammate reported 500s on the live site, traced them to OOM kills from MongoDB and the web server sharing one VPS; patched memory use, then fixed the root cause by moving MongoDB's process onto its own machine.
* Wrote a Click CLI exposing pipeline operations over protected API endpoints, with per-environment keys for dev and production, data sync, and live job progress; it later became the interface coding agents used to run the pipeline.
* Built the internal API 13 student contributors coded against: each dataset's and indicator's processing logic lived in its own file as decorator-registered Python functions discovered by the execution layer, so a typical assignment meant editing a few conventionally structured files.

## Contributions
I planned, prototyped, and advocated for adoption of the project in 2023, then built from mid-2024 to end-2025 with the help of 13 Berkeley undergraduate research apprentices, who contributed data cleaning code to the `collect`, `clean`, and `compute` routes along the central data flow. I owned the underlying infrastructure and all of the data structures and application design. About 3,300 of the commits are mine. Toward the end of the project, I began adopting coding agents to automate some of the boilerplate implementation and data cleaning work, and I've run several automated sweeps to fix bugs and implement additional data collectors, but the design was settled and almost all the core was built before effective coding agents were widely available.
