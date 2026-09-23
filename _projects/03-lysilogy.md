---
project-title: "Lysilogy"
project-type: "Software - Preprocess Scientific Papers"
project-status: "Active - Prototyping"
project-headline: "Viewer and preprocessor for scientific articles to assist in reading specialist literature outside your own field."
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
Lysilogy points at a folder of scientific PDFs. A Rust backend extracts each with Poppler, shells out to a local coding-agent CLI for a typed analysis, and serves a keyboard-driven React reader with four levels: Abstract, Overview, Glossary, Text.

* A model-proposed quotation becomes a highlight only if it is located in the PDF's word geometry. Ambiguous or missing matches yield no highlight.
* A source note is shown only if every URL it cites resolves.
* One outbound-fetch gate serves model-cited and user-pasted URLs. It rejects private and reserved addresses and walks redirects manually.
* A blind A/B lane tests prompt changes against a promotion rule I specified before any data existed. The tested treatment was not promoted.
