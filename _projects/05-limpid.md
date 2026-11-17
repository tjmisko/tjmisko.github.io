---
project-title: "Limpid"
project-type: "Software - Agent Response Reader - Rust, GTK & WebKit"
project-status: "Active - Daily Use"
project-headline: "A snappy, keyboard-driven reader for coding-agent responses, HTML artifacts, and markdown. Read a long answer as a clean page, comment on any block or answer the agent's questions <i>in situ</i>, and send responses back to the session on close."
github: limpid
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    group: agent-devtools
    label: "Limpid"
    sub: "Read and Answer Agent Responses"
    span: "Oct 2026 – Present"
---
Limpid is a lightweight GUI built to review agent turns, markdown files, or HTML. When coding agents produce multi-part responses with tables, codeblocks, math, and diagrams too unfriendly to read and comment on from your terminal, pop a limpid window with `/read`, navigate the page with your keyboard, insert comments and answer questions right in the page, and submit your feedback to an agent automatically on `:wq`.

Limpid brings the terminal-centered workflow into the document: block cursor moves text-blockwise through the page with vim-style keys. You can also comment in situ on any paragraph, table, or code block. Agents optionally list what they need from you under a `## Questions` heading, and Limpid turns each item into a field with numbered suggested answers. When you `:wq`, the answers are packed into a compact reply that quotes each block you responded to, and that reply wakes the agent session that wrote the page.

## Design Priorities
* **Fast**: A window should feel as quick as opening a file in the editor. With the host running, a new window opens in under a tenth of a second, and a cold start is faster than Chrome, Chromium, or Firefox on the same page.
* **Transparent to agents**: Agents write ordinary markdown. The questions convention is one line in an instruction file and reads normally in a terminal, so an agent that ignores it breaks nothing.
* **Read-only except comments**: Limpid never edits what the agent wrote. It stores only your replies, beside the page.
* **Keyboard-first**: Maintains the terminal-based workflow. Actions have keys, and vendored codemirror provides Vim-style text-editing inside comment blocks.

## Technical Details
* Rust workspace with three binaries. A small frontend command renders the page and hands it over a Unix socket to a long-running GTK4/WebKit host, which keeps one shared web process for all windows (so additional windows only need a few MiB of additional memory).
* Standard HTML is augmented with the basics needed for working effectively with agent responses:
  * Syntax highlighting uses treesitter grammars loaded at runtime, so that markdown codeblocks get proper syntax highlighting. 
  * LaTeX and Math renders as MathML.
  * Mermaid diagrams load after first paint and are cached.
* Every rendered block carries its byte range in the source, so comments, replies, and visual-mode yanks stay attached to the exact text they refer to.
* Thin plugins for Claude Code and pi bind a socket per agent session to send responses back to the calling session.

Limpid was built primarily by coding agents under my direction. Current support is Linux only.
