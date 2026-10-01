---
project-title: "SSPI Full Stack Web Application"
project-type: "Software - Research Data Platform - Python, Flask, MongoDB & JavaScript"
project-status: "Completed Dec 2025"
project-headline: "The research platform behind sspi.world: Flask & MongoDB backend running a five stage ETL pipeline, serving a JS with Chart.js frontend, plus the CI/CD and Linux VPS underneath."
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
The platform behind sspi.world: a metadata-driven ETL pipeline that pulls from 25 statistical organizations, scores the SSPI, imputes gaps, and serves it through a Flask API, a Click CLI, and JavaScript charts. I built it from 2023 to 2025 with the help of about fifteen Berkeley undergraduate research apprentices. About 3,300 of the commits are mine.
