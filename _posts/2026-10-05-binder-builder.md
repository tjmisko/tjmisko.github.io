---
layout: post
title: "BinderBuilder"
author: "Tristan Misko"
permalink: /projects/binder-builder/
---

While working as an Economics and Damages Associate at BRG supporting antitrust litigation, I found myself losing significant time to highly repetitive QC work for footnote verification. We'd have reports with something like 200 to 500 footnotes depending on the size, and it would be an associate's job (often mine) to go through each footnote, pull up the document in the filesystem, scan or search through the document to find the quote, then mark it as verified in the report. Solo verification would take four to eight hours of work per report, repeated for every report (*i.e.* usually a few times per month).

The steps were simple, routine, and programmatic: find the file, open it, confirm that the quoted text matches the source, and make sure we're not quoting it out of context. So I proposed to my principal that whenever I had downtime (as happens in consulting), I would build some automation tooling to make the process more efficient.

Over the course of several weeks I built out a Python Click application called BinderBuilder (with `fzf` and `mupdf` subprocesses) to implement the automation. It extracted and parsed the Word document's body and footnote XML, extracted the most relevant words (e.g. Author, Year, Title, Bates Number) to fuzzy-search the filesystem, surfaced the top candidate matches, then opened the files in a lightweight MuPDF window, with matching text from the document autohighlighted when possible. The CLI presented all of the relevant information---quoted text from the report, footnote text, and the original source document---on one screen for the cost of a few keypresses, allowing the QCing associate to stay in the flow of quickly checking documents instead of bumbling around the filesystem (a mapped network drive) looking for things.

Additionally, confirmed matches were autonumbered and copied into a "Footnote Binder" directory paired with the report (every footnote had its corresponding binder entry with the supporting document); assembling a binder used to cost an additional hour or two in manual file finding and renaming time across the report. With BinderBuilder, it dropped out for free.

Over several test reports, BinderBuilder cut verification time by 60% per footnote, which added up to between two and four hours per report depending on its size. More important than the simple metric was the more qualitative improvement to the task, which made it far less tiring to do verification and probably thereby improved accuracy slightly. I installed the program on an intern's machine and taught them how to use it, but unfortunately I left BRG soon after finishing the project and was unable to drive widespread adoption. To my knowledge, BinderBuilder is not still in use.
