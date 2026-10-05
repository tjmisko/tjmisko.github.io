---
project-title: "Lysilogy"
project-type: "Software - Custom Agents - Rust & React"
project-status: "Active - Prototyping"
project-headline: "Preprocessor for scientific articles facilitating the reading of literature outside your field. Agents build an artifact providing external context fetched from the citation graph, a top down view of the sections of the paper, and answer queries inside the keyboard-driven reader inteface."
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    label: "Lysilogy"
    sub: "Preprocess Scientific Papers to Prepare Supporting Content"
    span: "Aug 2026 – Present"
---
Lysilogy consumes a directory of scientific PDFs. A Rust backend extracts each with Poppler, shells out to a local coding-agent CLI for a typed analysis, and serves a keyboard-driven React reader with four progressive levels of detail: 

1. **Abstract**: Provides the extracted abstract, a complementary generated summary, and 
2. **Overview**: See a sectioned view of the PDF from above, visually showing where and how long the authors spend on claims. Pop into any section to see its text side-by-side with a summary. Find and read the key sections fast.
3. **Glossary**: Definitions for the key technical terms a reader might be unfamiliar with.
4. **Full Text**: Read the full text without distractions, with built-in, context-rich answers to questions that come up during reading.

## Technical Details
* Rust backend, React frontend. Axum/Tokio server handles discovery, PDF extraction, persistence and job state. React + TypeScript reader built on pdf.js provides keyboard-first, vim-style navigation.
* Agents run as sandboxed CLI subprocesses. Codex or Claude Code run as read-only subprocesses with only the tools each task needs. The backend owns all progress and state, and each concurrent analysis stage is cached under a key built from the prompt, schema, source, provider and model, so retries only rerun what failed.
* Multi-stage pipeline with independent review. Orientation, structural mapping and historical context run in parallel. Context goes research → writer → reviewer: writer only sees frozen evidence, and a separate model pass checks whether claims are supported, in the right order, and useful.
* Provenance checked in code. Quoted abstracts and AI highlights must exactly match spans in Poppler-extracted text with token coordinates. Every cited URL must pass DNS, redirect, public-address and HTTP checks, and one failed citation withholds the whole note.
* Built-in agent evaluations. A blind A/B harness changes one prompt variable at a time while the paper, model and schema stay fixed. Ramps are scored before the arms are revealed, and the results are rolled up into Markdown reports.
