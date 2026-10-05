---
layout: post
title: "Building BinderBuilder"
project: "BinderBuilder"
project-dates: "Feb 2024 – May 2024"
author: "Tristan Misko"
permalink: /projects/binder-builder/
---

While working as an Economics and Damages Associate at BRG, I found myself losing significant time to highly repetitive QC work on footnote verification. We'd have reports with something like 200 to 500 footnotes depending on the size, and it would be an associate's job (often mine) to go through each footnote, pull up the document in the filesystem, scan or search through the document to find the quote, then mark it as verified in the report. Solo verification would take four to eight hours of work per report, repeated for every report (*i.e.* usually a few times per month).

Most of the time spent doing this work went to using human operators like an inefficient meat-script. Pulling information from footnotes, searching for and opening the associated file, and checking that the quoted text matched the source could all be done efficiently by a fairly simple program. Eliminating the context switching would also make it easier to focus on the valuable step: ensuring that the report does not quote source material out of context. Once written, the program could be reused. I talked to my principal about the problem and my proposed solution and got approval to build it during off-hours and slow periods (as happens in consulting).

Over the course of several weeks I built out a Python Click application called BinderBuilder (augmented with `fzf` and `mupdf` subprocesses) to implement the automation. The script took as arguments a report file and a collection of folders to search recursively for matching documents. It extracted and parsed the Word document's body and footnote XML, identified the most relevant words (Author, Year, Title, Bates Number, etc.) to fuzzy-search the filesystem, surfaced the top candidate matches, then opened the files in a lightweight MuPDF window, with matching text from the document autohighlighted when possible. The CLI presented all of the relevant information---quoted text from the report, footnote text, and the original source document---on one screen for the cost of a few keypresses, allowing the QCing associate to stay in the flow of quickly checking documents instead of bumbling around the filesystem (a painfully slow mapped network drive) looking for things.

Additionally, confirmed matches were autonumbered and copied into a "Footnote Binder" directory paired with the report (every footnote had its corresponding binder entry with the supporting document); assembling a binder used to cost an additional hour or two in manual file finding and renaming time across the report. With BinderBuilder, the binder dropped out for free.

Over several test reports, BinderBuilder cut verification time by 60% per footnote, which added up to between two and four hours per report depending on its size. More important than the simple metric was the qualitative improvement to the task: eliminating context switches made verification less tiring, making it easier to catch subtle issues. I installed the program on an intern's machine and taught them how to use it, but unfortunately I left BRG soon after finishing the project and was unable to drive widespread adoption. To my knowledge, BinderBuilder is not still in use at BRG.
