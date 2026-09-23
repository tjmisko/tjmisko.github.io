# Headline consolidation — review

Goal: the popovers on the Trajectory chart and panel read `project-headline`
instead of a separate `blurb`, so one sentence per project does both jobs.

How to edit this file:

- **Proposed** is the line that would become `project-headline`. Rewrite it
  freely; it is a draft that leans on your existing phrasing.
- **Keep blurb** is `no` where the blurb would be deleted, `yes` where the
  chip needs its own sentence because it says something the headline cannot
  (a single era of a longer project, one part of a relay, a role rather than a
  project). Flip it either way.
- Anything under **Notes** is context, not a decision.

The mechanics once approved: `arc.blurb`, `arc.node.blurb`, and part blurbs
become optional overrides, the includes fall back to `project-headline`, and
the blurbs marked `no` are removed from front matter. Nothing else moves.

---

## 01 Functionary

- Headline (current): Coding agents assist in building malleable workflows which harness agents with bounded discretion. Workflows delegprovenance, automation processes,
- Node blurb (current): Start from an informal sketch of what needs to be done, using coding agents to accelerate the discovery of the correct process and edge cases. Then run, evaluate, and iterate to build a workflow you understand.
- Proposed: Tooling and infrastructure for building automations you can understand and rely on: sketch a process with a coding agent, then run, evaluate, and iterate on it, with agents held to bounded discretion and every step recorded.
- Keep blurb: no
- Notes: the current headline is cut off mid-sentence ("Workflows delegprovenance, automation processes,").

## 02 Switchboard

- Headline (current): A Go daemon that finds each running coding-agent session on my Linux desktop, shows its status in the bar, and jumps to it on click.
- Node blurb (current): Display the status of all active coding agent sessions across harnesses and remote sessions. Jump into any of them with a single keypress or click. Linux-build live, MacOS port in progress.
- Proposed: Interactive stutus bar driven by a Go daemon reporting the status of every coding-agent session, across harnesses and remote sessions, and jumps into any of them with a keypress or click. Linux build live, macOS port in progress.
- Keep blurb: no

## 03 Lysilogy

- Headline (current): A local reader for scientific PDFs that draws a model's quotation as a highlight only if the text is found in the PDF.
- Node blurb (current): A model's quotation becomes a highlight only if it is found in the PDF.
- Proposed: Viewer and preprocessor for scientific articles to assist in reading specialist literature outside your own field.
- Keep blurb: no

## 04 SSPI Full Stack Web Application

- Headline (current): The Flask and MongoDB platform behind sspi.world: a metadata-driven pipeline from 25 statistical organizations to a published policy index, built 2023 to 2025.
- Chip blurb (current): The research platform behind sspi.world, from data collection to the public site.
- Proposed: The research platform behind sspi.world, from data collection to the public site: a metadata-driven Flask and MongoDB pipeline from 25 statistical organizations to a published policy index, built 2023 to 2025.
- Keep blurb: no

## 05 Taskbuffer

- Headline (current): A Neovim plugin that gathers the to-dos scattered across markdown notes into one time-sorted task list.
- Chip blurb (current, the 2024 mini): The first Taskbuffer: about ninety lines of Bash and a 62-line Go filter that bucketed tasks into six date horizons, still the plugin's defaults today.
- Node blurb (current, the 2026 mini): Gathers the to-dos scattered through markdown notes into one time-sorted list, on desktop and phone. The 2026 rebuild of the 2024 shell tool.
- Proposed: Centralizes and sorts plaintext tasks across markdown notes or codebases into one time-sorted interactive Neovim buffer (or Obsidian window, for mobile support).
- Keep blurb: yes for the 2024 chip (it describes one era); no for the node.
- Notes: i want to integrate the chip and the blurb into one story, sort of like the way I do for sspi.world, with the two separate eras as highlightable phases.

## 06 Keyboard Calendar

- Headline (current): A keyboard-first calendar for Obsidian.
- Node blurb (current): A modal, vim-inspired calendar editor for Obsidian.
- Proposed: A modal, vim-inspired Calendar Plugin for Obsidian. Musophobes can now have calendars too. Daily, weekly, and monthly views supported across desktop and mobile, all backed by plaintext events.
- Keep blurb: no

## 07 Vim Map

- Headline (current): A fork of Obsidian's Map View plugin with keyboard-first, vim-like navigation and boundary regions drawn from notes.
- Node blurb (current): Vim-style modal navigation over a map of the vault's places, with boundary regions kept in notes.
- Proposed: A fork of Obsidian's Map View plugin with vim-style modal navigation over the vault's places and boundary regions kept in notes.
- Keep blurb: no

## 08 TRMNL Dashboard

- Headline (current): A plugin for a TRMNL e-ink dashboard that displays the day's birthdays, events, tasks, and weather.
- Node blurb (current): Transit, weather, events, and tasks from several sources on one e-ink screen at home.
- Proposed: A plugin for a TRMNL e-ink dashboard that displays the day's birthdays, events, tasks, transit, and weather in one place.
- Keep blurb: no

## 09 Coldstore

- Headline (current): A home-server daemon that keeps Syncthing folders under a size budget by moving old files to cold storage, with a web gallery of every file.
- Node blurb (current): Keeps Syncthing folders under a size budget by archiving old files to cold storage.
- Proposed: A home-server daemon that keeps Syncthing folders under a size budget by archiving old files to cold storage, with a web gallery of every file.
- Keep blurb: no

## 10 BinderBuilder

- Headline (current): A command-line tool that matches expert-report footnotes to their source documents, cutting per-footnote checking in the common case from about 60 to 25 seconds.
- Chip blurb (current): Matches expert-report footnotes to their sources and highlights the cited passage.
- Proposed: A command-line tool that matches expert-report footnotes to their sources, highlights the cited passage, and structures the QC and verification loop, cutting per-footnote checking in the common case from about 60 to 25 seconds.
- Keep blurb: no

## 11 Configuration

- Headline (current): A version-controlled set of dotfiles and setup scripts that reproducibly provisions my development environment across machines.
- Chip blurb (current): Setup scripts that bring a bare machine to a working development environment.
- Proposed: Version-controlled dotfiles and setup scripts to bring up a working development environment on a bare machine. 
- Keep blurb: no

## 12 Retend

- Headline (current): A time-tracking system in which each day is a 96-line plain-text file, one line per quarter hour, filled in after the fact from Neovim.
- Chip blurb (current): A day as 96 quarter-hour lines in a text file, filled in after the fact.
- Proposed: Time tracking in which each day is a 96-line plain-text file, one line per quarter hour, filled in after the fact from Neovim.
- Keep blurb: no

## 13 SSPI (IRLE research)

- Headline (current): An index scoring the national policies of 49 countries on sustainability, market structure, and public goods; I led its undergraduate teams from 2021 to 2023.
- Chip blurb (current): Led the undergraduate teams that built 57 policy indicators across 49 countries.
- Part blurb (Research Apprentice): Collected, documented, and validated indicator data for the SSPI.
- Part blurb (Research Team Lead): Led the undergraduate teams, set collection and validation standards, and started the data-handling work that became sspi.world.
- Proposed: An index scoring the national policies of 49 countries on sustainability, market structure, and public goods; I led the undergraduate teams that built its 57 indicators from 2021 to 2023.
- Keep blurb: no for the chip; yes for both parts (each describes one role).

## 14 Pomera DM250 Debianization

- Headline (current): Turned a Pomera DM250 writing device into a dual-boot, distraction-free Linux writing environment with Chinese input, for a freelance client.
- Chip blurb (current): Freelance: dual-booted an ARM writing gadget into a minimal Debian writing environment.
- Proposed: Freelance: turned a Pomera DM250 writing gadget into a dual-boot, minimal Debian writing environment with Chinese input.
- Keep blurb: no

## 15 Personal site

- Headline (current): Personal site on GitHub Pages, written by me in 2022 on a Jekyll fork and rebuilt in 2026 by coding agents to my direction.
- Chip blurb (current, the 2022 chip): The 2022 version of this site, written on a Jekyll Minima fork.
- Proposed: The 2022 version of this site, written on a Jekyll Minima fork.
- Keep blurb: yes (the chip is the 2022 version only).; dump project headline to chip blurb

## 16 Lindy on Sproul

- Headline (current): The public GitHub Pages site for UC Berkeley's swing dance club.
- Chip blurb (current): The public GitHub Pages site for UC Berkeley's swing dance club.
- Proposed: (unchanged)
- Keep blurb: no (identical already).

## 17 Do Homeowners Care About Air Quality?

- Headline (current): A working paper testing whether home prices fall when wildfire smoke worsens local air quality.
- Chip blurb (current): Tested whether county-level home prices fall when wildfire smoke worsens air quality.
- Proposed: A working paper testing whether county-level home prices fall when wildfire smoke worsens local air quality.
- Keep blurb: no

## 18 Something in the Air

- Headline (current): A working paper estimating which national air-quality policies reduced pollution across 38 OECD countries.
- Chip blurb (current): Which of 40,000 air-quality policies across 38 OECD countries reduced pollution.
- Proposed: A working paper estimating which of 40,000 national air-quality policies reduced pollution across 38 OECD countries.
- Keep blurb: no

## Experience

These three carry `project-headline` too, but their chip blurbs describe the
role from the chart's point of view rather than restating the headline, so the
default here is to keep them. Say the word to fold them in instead.

### UC Berkeley

- Headline (current): Concurrent degrees in applied mathematics and economics, the latter with honors, plus coursework in computer science and statistics beyond the degree.
- Chip blurb (current): Concurrent degrees in applied mathematics and economics, with honors in economics.
- Proposed: (unchanged)
- Keep blurb: yes

### BRG

- Headline (current): Built the Stata analysis and gathered qualitative evidence for expert reports in antitrust litigation, where every reported figure had to reproduce from raw inputs.
- Chip blurb (current): Stata analysis behind antitrust expert reports, reproducible from raw inputs.
- Proposed: (unchanged)
- Keep blurb: yes

### IRLE engineering

- Headline (current): The engineer responsible for sspi.world, the research platform behind the SSPI, while also leading its research teams.
- Chip blurb (current): Returned to IRLE as an engineer responsible for the SSPI platform's software and data while also leading the research team.
- Proposed: (unchanged)
- Keep blurb: yes
