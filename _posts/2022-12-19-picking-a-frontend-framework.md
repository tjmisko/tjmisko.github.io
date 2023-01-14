---
layout: post
title: "Picking a Frontend Framework for RALPH"
author: "Tristan Misko"
---

The goal for today is to settle on and learn about a front-end web framework for RALPH, mainly for handling the flow of data from the database and creating the interactive graphs presented to the user.

My Current Front End Setup
Right now, my prototype frontend is built in HTML, SASS, and JavaScript.  It’s currently just bolted onto my GitHub Pages site as a testing ground for my JavaScript hackery.  I’ve made a bar chart object to which users can add, modify, hide, and delete columns, and the view updates, recomputing the widths and heights of the divs as necessary (most of the time).  To make the draggable components of the graphs, I’m using a GreenSock plugin called “Draggable.”  The dragging and sorting is all quite smooth with this, which is pleasing, but I am starting to feel the creep of complexity.  My chart objects are getting a bit bloated and messy, and they’ll only continue to grow as I implement more features.  And it definitely feels wrong to be trying to use JavaScript as an Object-Oriented type language.  
	There’s certainly a part of me doesn’t understand why almost everything I read on the internet about Front End Development seems to take the stance that it would be absolute madness and completely ridiculous to manipulate the HTML, CSS, and JavaScript directly.  It’s not so bad.  Of course, things get complicated and so you need to bring in the high powered declarative tools, but for basic applications like static sites (e.g. lindyonsproul.dance) I feel like the benefits of climbing up the learning curve on a framework would not outweigh the time costs for doing it.
	For RALPH, though, it’s time to start climbing.  But the question is: which mountain?

What’s Out There?
The options I started off considering are React, Angular, Vue, and Svelte.
* React: By far the most popular, but it’s messy.  The mixing of the templates with the logic is not ideal, and it’s lack of opinionation is on one hand a breath of fresh air from working on the highly-opinionated SpringBoot backend but on the other a curse to grope through the darkness a bit.  
* Angular: Seems a bit too heavy duty a tool for something the size of RALPH, so I’m ruling that one out for this project, although the Object Oriented paradigm feels the most familiar to me.
* Vue: Seems well liked and lightweight.  
* Svelte: New and well liked, seems quite hip, but also a small community and doesn’t necessarily have the name recognition.  But it would be able to integrate easily with any vanilla JS I write, and already have a working implementation of a chart in Vanilla JS that I could use and improve.

What I’ll Use
All in all, the choice of framework doesn’t actually seem that important: all of them will get the job done.  With that in mind, the question becomes what is the most valuable experience for me, and that I think will be React.  Given that it’s the most popular.  
