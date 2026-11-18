---
project-title: "Lysilogy"
project-type: "Custom Agents - Rust & React"
project-status: "Active - Prototyping"
project-headline: "Preprocesses scientific papers so you can read into a literature outside your field. Agents map each paper's sections and key ideas so you can find what's worth reading quickly. A graph view of a paper's citations helps you build a reading ramp up to it."
website: lysilogy.com
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    group: ai-engineering
    label: "Lysilogy"
    sub: "Navigate Technical Literature"
    span: "Aug 2026 – Present"
---
Lysilogy preprocesses scientific papers so you can read into a literature outside your field. It consumes directories of scientific PDFs: a Rust backend extracts each with Poppler, shells out to a local coding-agent CLI for a typed analysis, and serves a keyboard-driven React reader with five views of increasing detail:

1. **Abstract**: The author's abstract, verified against the PDF text, under a one-sentence generated thesis.
2. **Overview**: A map of the PDF's pages and sections, showing where and how long the authors spend on each claim. Open a section to read its pages alongside a digest.
3. **Glossary**: Plain-language definitions for the key technical terms a reader might be unfamiliar with, each with its technical definition and the sections that use it.
4. **Text**: The full PDF with vim-style navigation. Select a passage to ask a question about it.
5. **Sources**: A graph of the works the paper cites, expandable to three hops, with each edge labelled with why the work is cited. From the graph you build a reading ramp: an ordered list of the works to read on the way up to the paper.

A *ramp* is material ordered so each step depends only on the one before. The term is Andrej Karpathy's, who describes education as ["building ramps to knowledge"](https://www.dwarkesh.com/p/andrej-karpathy).

Lysilogy is a prototype on the back burner. The core analysis was rewritten in October 2026 as a single verified pass, and the glossary and research-context stages are waiting to be rebuilt on it.

## Technical Details
* Rust backend, React frontend. An Axum/Tokio server handles discovery, PDF extraction, persistence, and job state, with per-paper files on disk and optional Postgres behind the citation graph. The React and TypeScript reader is built on pdf.js.
* Agents run as restricted CLI subprocesses: Codex in a read-only sandbox and Claude Code in plan mode, with web search, shell, and tools off unless a stage needs them. Analysis checkpoints are keyed by a hash of the backend, model, and inputs, so a retry reuses finished work.
* Quotes are checked in code. A quoted span must align word for word with the Poppler-extracted text. A near match is rewritten to the source span, and anything else gets one model repair or is dropped. Edge labels in the citation graph must quote the cited passage exactly.
* The citation graph draws on OpenAlex, Semantic Scholar, OpenCitations, and Crossref, alongside references extracted from the PDF itself.
* A blind A/B harness compares two prompt variants for generated learning ramps (a foothold, key concepts, essential passages, and counterarguments) on the same paper. Arm identities stay hidden until the judgment is stored.
