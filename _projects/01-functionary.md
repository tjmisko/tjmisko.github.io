---
project-title: "Functionary"
project-type: "Automation Harness - Rust & React"
project-status: "Active - Iteration and Development"
project-headline: "Agent harness for knowledge work. A coding agent drafts your process as a flow of prebuilt blocks on a visual canvas, where you can inspect and edit it. The flow compiles to Rust and runs in a sandboxed backend."
website: functionary.app
tags:
  - "all"
  - "software"
  - "automation"
arc:
  node:
    group: ai-engineering
    label: "Functionary"
    sub: "Build Reliable Agentic Workflows"
    blurb: "Agent harness for knowledge work. A coding agent drafts your process as a flow of prebuilt blocks on a visual canvas, where you can inspect and edit it."
    span: "Apr 2026 – Present"
---
Functionary is an agent harness for knowledge work. Users declare the process they want in plain language, and a coding agent progressively formalizes it through rounds of agent drafts and user corrections into a flow: a restricted subset of Rust composed from prebuilt blocks, each a bounded, evaluable step. The flow stays visible on a visual canvas where you read and edit it, and canvas edits and agent edits change the same source.

When you run a flow, Functionary compiles exactly the checked source into a program and runs it in a sandbox, keeping each step's inputs and outputs for review. Blocks cover common processing tasks, search, agent steps, checks, and human review. Run state persists across restarts.

In a pre-registered trial, Claude Sonnet 5.5 wrote valid flows for 10 of 11 tasks on the first attempt and 11 of 11 within two repairs.

## Design Priorities
* **Control**: Use the capabilities of agents to process information without handing them control over the process. Blocks receive bounded global context (high level objective of the flow) and local context DAG inputs.
* **Security**: Separate the data plane from the control plane when executing a task. Don't trust agents to follow instructions.
* **Legibility**: Make the process inspectable at a glance.
* **Reliability**: Guarantee that the approved process is what actually executes. When agents inevitably fail, the failure point remains visible, and the flow can be adjusted to prevent future failures.
* **Modularity**: Many computer tasks look like compositions of a large but bounded set of primitives that "just anyone" can do. Pull this source, summarize that text, check this quote against the source.

## Technical Details
* Execution backend built in Rust; flow-editing frontend in TypeScript (React and React Flow).
* Agents write flows in a restricted subset of ordinary Rust, compiled through a typed graph IR to sandboxed async Rust. Anything outside the subset is rejected on save, before it can run.
* The source is canonical and the canvas is derived from it. Every edit is applied to both and rejected if they disagree.
* Flow authoring is separated from doing work: authoring agents build and edit flows but lack tools to perform work themselves, while block agents get the tools their task requires but cannot edit the flow's control flow.
* One contract declares every block. It generates the type-level library `rustc` checks flows against, the canvas catalog, and the reference the authoring agent reads.
* Each step is recorded in a SQLite journal before its effect runs, so a crashed run resumes without repeating finished model calls or effects.
* Evals for flow authoring and block behavior: golden datasets with deterministic scorers and agent-evaluable rubrics.
* Built solo by directing coding agents across 1,700+ tasks in a DAG ledger, reviewing and writing code by hand when needed.
