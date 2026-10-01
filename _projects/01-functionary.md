---
project-title: "Functionary"
project-type: "Software - Automation Harness - Rust & React"
project-status: "Active - Iteration and Development"
project-headline: "Tooling and infrastructure for building automations you can understand and rely on: sketch a process with a coding agent, then run, evaluate, and iterate on it, with agents held to bounded discretion and every step recorded."
website: functionary.app
tags:
  - "all"
  - "software"
  - "automation"
arc:
  node:
    label: "Functionary"
    sub: "Automation Canvas · Agent Harnesses · Reliable Workflow Automation"
    span: "Apr 2026 – Present"
---
Functionary provides a visual canvas, custom agents, and an execution backend for automating information processing tasks as repeateable workflows with inspectible provenance. Users sketch a process to execute, using coding agents to progressively formalize it into a directed acyclic graph of blocks corresponding to bounded, evaluable steps that remains visible on the canvas.

At execution time, Functionary compiles the canvas into a program, runs it, and records what each step consumed and produced. Blocks include common processing tasks, code execution, agent review, and human reviews. Executor state persists across restarts.

## Design Priorities
* **Control**: Use the capabilities of agents to process information without handing them control over the process. Blocks receive bounded global context (high level objective of the flow) and local context DAG inputs.
* **Security**: Separate the data plane from the control plane when executing a task. Don't trust agents to follow instructions.
* **Legibility**: Make the process inspectable at a glance. 
* **Reliability**: Guarantee that the approved process is what actually executes. When agents inevitably fail, the failure point remains visible, and the flow can be adjusted to prevent future failures.
* **Modularity**: Many computer tasks look like compositions of a large but bounded set of primatives that "just anyone" can do. Pull this source, summarize that text, check this quote against the source.

## Technical Details
* Execution backend built in Rust; flow-editing frontend in TypeScript (React and React Flow)
* Outputs carry a SHA-256 hash chain over block, inputs, and config, re-verified after every block. The chain is unkeyed: it catches edits and reordering, not a writer with store access.
* Dispatcher owns each run's plan cursor and hands workers owned envelopes over channels. Per-resource semaphores are taken in canonical key order so branches sharing one LLM quota cannot deadlock.
* Prototyped over the course of four months using coding agents running multiday unattended task-phases in Docker behind a default-deny egress allowlist, closing 700+ tasks across 90+ phases.
