---
layout: post
title: "Checklist Application Prospectus"
subtitle: "The Woes of the Picky"
author: "Tristan Misko"
---

### A Hellish Infinitude of Suboptimal Choices

While sitting doing work today, Jen asked me out of the blue how hard it would be to code up a checklist application that showed next to each item the time remaining until its due.  This seemed like a simple enough usecase that for a moment I was sure such an app already existed.

A quick Google reminded me of the peculiar horror that the productivity application landscape holds for me: the options seem infinite, and yet none seems to fit how I want to do things.  My brain simply resists being compressed into the system of every such app I've ever tried.

I like to think of productivity apps as a backend framework for your time and task management procedures. It's an inversion of control paradigm: these apps offer a coherent set of tools and systems that promise to streamline your planning and execution process at the cost of your buying into the way the framework does things.  When developing an application, the gains from investing a few days learning the ins and outs of a backend framework can save you weeks of writing and debugging boilerplate code.  

But with productivity applications, I've never been able to bite the bullet and develop an intuition for a particular productivity tool.  By far the closest I've come to adopting a system for any length of time has to be my ongoing affair with Google Calendar, which I've contorted into a Time Tracker with a few plugins and Chrome Extensions.  But I'm actively working to code up an alternative system for myself in RALPH, which seems to prove my point.  

The fundamental challenge for all of these apps is that their function, to manage tasks and time, means that the user interacts with them often dozens or even hundreds of times per day, and all of the things the user is doing with the app are definitionally important things the user wants to get done.  If, say, a banking app is slightly annoying to use, at least the user only has to deal with it a handful of times a month.  For an app used many times daily, the costs of frictions and frustrations compound, so that even the slightest of annoyances can amount to a fatal flaw for us picky folk.  

Behind each of these applications is a well-intentioned developer or a team with their own particular use cases in mind, and it's understandable--necessary even--that they implement their vision for how a productivity system ought to work.  This they do, and for people with similar enough use cases and preferences in mind to those of the developers, these applications serve their function.

But developer choices always create friction: maybe the task input menu is too cluttered or underfeatured for my needs, or perhaps there is a lot of overhead with tagging or categorization systems, or maybe I just want a checklist on which I can see a checkbox, a task, how long until its due and nothing else.

Sometimes we can be acculturated to a system: iOS has been the quintessential example of inversion of control in UX/UI design, and I'm a regular user.  

In the end, the answer to Jen's question of how long it'd take to make something that suits her needs seems to me to be something like "an afternoon."  So we're putting it to the test.  


### The Bill of Goods for Our Checklist Application

I'm well aware that checklist applications are a bit of a meme in the developer community for being every #learntocode developer's *baby's first application*, and I am chuckling at myself for wanting to do this, but picky people will be picky, and I'm no exception.  Doing this will be pretty boring, and I don't want to spend longer doing it than I ought to.

So, Jen and I hatched a plan: we'll challenge ourselves to start and finish the whole application process within a single 9am - 5pm work day.  Here's our plan:
* The site will be a client-rendered web application: no need to go too fancy.  Since the amount of content is low and the interactions are not super complex, the initial load time of the site shouldn't be too big of an issue, and the dynamic nature of the application will benefit from the responsive feel of client side rendering.  
* Jen will be in charge of developing most of the front end using React, HTML, and CSS.  
* I'm planning to set up a persistent data store layer using Node.js running on a Linode server with a document based storage system like MongoDB.  This will serve the task data to each user and will avoid a complicated ORM for such a simple set of tasks.  I've never used Node.js or MongoDB, so it'll be fun to break into that world.  
* Functionality will require a user authentication stage, a dynamic view of a list of tasks and durations adding, deleting, checking off, and editing tasks.
