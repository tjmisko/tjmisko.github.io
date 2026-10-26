---
project-title: "Limpid"
project-type: "Software - Agent Response Reader - Rust, GTK & WebKit"
project-status: "Active - Daily Use"
project-headline: "A fast, keyboard-driven reader for coding-agent responses and markdown. Read a long answer as a clean page, comment on any block or answer the agent's questions in place, and send it all back to the session with `:wq`."
github: limpid
tags:
  - "all"
  - "software"
  - "tooling"
arc:
  node:
    small: true
    order: 1
    label: "Limpid"
    sub: "Agent-response reader · Rust, GTK, WebKit"
    span: "Oct 2026 – Present"
---
Coding agents running in a terminal produce long responses full of tables, code, math, and diagrams, and a terminal is a poor place to read them. Answering is worse: to respond to the third question in a long plan, you scroll back, retype the context, and hope the agent knows which point you meant.

Limpid opens the current agent turn (from Claude Code, Codex, or pi) or any markdown file as a clean page in a lightweight window. A block cursor moves through the page with vim-style keys. Agents list what they need from you under a `## Questions` heading, and Limpid turns each item into a field with numbered suggested answers. You can also comment on any paragraph, table, or code block. When you `:wq`, the answers are packed into a compact reply that quotes each block you responded to, and that reply wakes the agent session that wrote the page.

## Design Priorities
* **Fast**: A window should feel as quick as opening a file in the editor. With the host running, a new window opens in under a tenth of a second, and a cold start is faster than Chrome, Chromium, or Firefox on the same page.
* **Keyboard-first**: Every action has a key, and the mouse is optional.
* **Transparent to agents**: Agents write ordinary markdown. The questions convention is one line in an instruction file and reads normally in a terminal, so an agent that ignores it breaks nothing.
* **Read-only except comments**: Limpid never edits what the agent wrote. It stores only your replies, beside the page.

## Technical Details
* Rust workspace with three binaries. A small front-end command renders the page and hands it over a Unix socket to a long-running GTK4/WebKit host, which keeps one shared web process for all windows, so each extra window costs about 10 MiB.
* Syntax highlighting uses tree-sitter grammars loaded at runtime, with injections so that SQL inside strings or code inside markdown is highlighted as its own language. Math renders natively as MathML; Mermaid diagrams load after first paint and are cached.
* Every rendered block carries its byte range in the source, so comments, replies, and visual-mode yanks stay attached to the exact text they refer to.
* Thin plugins for Claude Code and pi bind a socket per agent session, so a saved reply goes straight back to the session that asked.
* Replaces htmlview, an earlier viewer of mine, and was designed against its measured load times and memory use. Built with coding agents under my direction.
