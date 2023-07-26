---
layout: post
title: Learning How to Actually Use GitHub
subtitle: A Confession Followed by Some Thoughts About How to Learn About Software Engineering
date: 2023-07-25
---

If yesterday was about solving technical issues, today was much more about solving management issues.  I met with Max today to finalize his implementation of the REDLST compute route.  We fixed a couple minor bugs, tested the route, then went to merge the changes.  What unfolded over the course of the next hour was quite frustrating.

I'll come clean: I've not been good about our team's Git hygiene.  I've done most of my work with Git and GitHub solo, and I'd say I'm well adapted to that set of workflows.  In a solo context, I use branching quite sparingly and frequently just work on `main` itself.  When you're operating alone, it's hard to justify the overhead of branching and all that.  Git is mostly there for me to back up my files and revert some breaking changes should I ever need to.

But, as I found out the hard way today, collaborating via Git and GitHub requires a little more discipline and commitment to using the tools in the ways they are intended.  As it turns out, smart people have already figured out how to handle collaborating on large projects.  There are tools out there like issues and pull requests that, when combined with good committing and branching etiquette, make it really easy to fold in changes to the main branch without the hour long headache of pushing, pulling, rebasing, and manually deleting weird divergences that I don't even know how to explain.  

I suppose this is starting to become a little bit of a theme here.  Like I discussed a couple days ago re: front end frameworks, I really resist the overhead that comes with structure.  It's something about the feeling I get when I have to operate by conventions whose *raisons d'etre* I don't understand.  

I felt that way a little starting with Flask back in March.  It's strange to me just how strong and emotional the resistance to just doing what I'm told is.  I feel like a little kid almost, tinkering and toiling away with something simple as the old and wise adult smiles on at my childish naïveté.  Maybe some would consider that a bad habit.  I'm not sure I do.  

After all, I usually do end up coming around to the accepted way of doing things after a while.  For example, over the course of the April and May, I learned a lot more about the way that Flask is setup and how the system is designed to work, and, miraculously enough, the structure began to feel natural.  I'd say I quite like Flask today.  

But if you're going to end up learning the structure anyway, why spend time in the middle resisting it?  A valid point, and one that gets to what I see as the heart of the matter.  In some contexts, especially when efficiency is the paramount concern, I'll admit that my approach is a bit of a weakness.  But it's also true that in most circumstances, efficiency is only important up to a point.  

Sure, I'd like to finish this project in the next few months—there is an efficiency concern.  But it's also important to me that I feel like I really understand what's happening up and down the stack, and it's critical to the project that I do, since I'm leading its development.  

When it comes to software, we are always dealing with Matryoshkanesque layers of abstraction.  Personally, I'm not a big low-level guy (yet), and so I'm willing to take some of them at face value (for now).  But, as you build abstraction atop abstraction atop abstraction, it's natural and healthy to wonder what those high level tools are even for and whether they're even useful to you right now.  There's a reason it's called "overhead."  If you try to learn to develop things with an over-engineered stack, you end up spending all your time configuring your tools to work with each other and then learning all the layers of abstraction at the same time.  Human brains don't work like this.  

On the other hand, if you do what you can with what you already know, pushing back against a workflows or tools that seem overcomplicated or unnecessary for the time being, then you'll either realize that the tool is not worth your time, or, much more likely, you'll find yourself facing the exact problem that the tool is built to solve.  And, this is the important bit, by facing the problem before you deploy the tool to solve it, you'll gain a deep appreciation for what that tool is, why it is designed like it is, and how to use it.

That's where I'm at with GitHub right now, and I'm happy to be there.  All of the "overhead" and "fluff" that never felt interesting enough to me to actually learn as a solo developer now feels like an incredibly useful set of tools for the problems I'm facing right now as the leader of a team.  This  is certainly is one of the best ways for me to learn.  It may be for you as well.  


