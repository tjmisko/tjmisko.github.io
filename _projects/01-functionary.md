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
Layout an automated task as a flow (DAG of blocks typed inputs and outputs) on a visual canvas. Functionary compiles the canvas into a program, runs it, and records what each step consumed and produced. Blocks include common processing tasks, code execution, agent review, and human reviews. Executor state persists across restarts.

## Design Goals
* **Control**: Use the capabilities of agents to process information without handing them control over the process.
* **Security**: Separate the data plane from the control plane when executing a task. Don't trust agents to follow instructions.
* **Legibility**: Make the process inspectable at a glance.  Guarantee that the approved process is what actually executes.
* **Modularity**: Many computer tasks look like compositions of a large but bounded set of primatives that "just anyone" can do. Pull this source, summarize that text, check this quote against the source.

## Technical Details
* Dispatcher owns each run's plan cursor and hands workers owned envelopes over channels. Per-resource semaphores are taken in canonical key order so branches sharing one LLM quota cannot deadlock.
* Outputs carry a SHA-256 hash chain over block, inputs, and config, re-verified after every block. The chain is unkeyed: it catches edits and reordering, not a writer with store access.
* After a cost-benefit review found the custom React canvas's recurring stale-edge defects structural, I approved a supervised migration to React Flow.
* Silk is a compact text form of the graph that an agent edits as a diff instead of a JSON document. The DSL was my idea and is still experimental.
* For four months, coding agents ran unattended in Docker behind a default-deny egress allowlist and closed more than 700 ledger tasks.
* I quarantined that loop in August 2026 after a self-audit found unescaped ledger text reaching agent prompts. Agent work since then is interactive and supervised.

It does not yet complete a basic scenario end to end, planned features are missing, and it has no users.
