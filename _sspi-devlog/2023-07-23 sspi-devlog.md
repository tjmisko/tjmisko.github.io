---
layout: post
title: Some Considerations for the Mediumish Run
subtitle: Security Concerns and GUI Design
date: 2023-07-23
---

## Thinking About Security
As I get closer to deployment, I'm starting to think about securing the application.  On my first day working with Flask back in March, I followed a tutorial to implemented a somewhat janky user login system, and I've more or less stuck with that ever since.  

The trouble with security is that it's hard to even know where to start.  A few things I'd like to look into:
1. Escaping all input strings.  From what little I know about security, this is the biggest one to start with to avoid SQL Injection attacks and other nasty stuff.  I really need to check into all of my user input routes to make sure they are safe.  
2. Rate limiting to defend against brute-force attempts.  It appears that there's a package called `Flask-limiter` that can be used to do this ([source](https://www.easy2digital.com/automation/data/python-tutorial-56-utilise-flask-limiter-to-customise-rate-limits-by-the-characteristic-of-incoming-requests/#:~:text=A%20default%20rate%20limit%20of,hour%2C%20at%20the%20same%20time.)).
3. API Keys: how do they work?  When are they appropriate to use? It seems like `flask-api-key` exists to implement this functionality ([source](https://pypi.org/project/flask-api-key/0.1.7/)).
4. OAuth User Logins.  Is this even necessary?  Probably not.  There's no reason for anyone but team members to login.  Unless I wanted to implement a system wherein users must register to download data.  That might help security, but it also might be really annoying for researchers who just want to use what data we have.

## Building the GUI for Operating the `collect` and `compute` Routes
I'd like the GUI, visible only to the team members, to be a table with buttons for collecting, computing, imputing, querying the data.  The buttons will be visible for all indicators, but they will be greyed out until the route is actually written, in which case they will become operable.  
- I'll probably make this happen with the `disabled` boolean attribute of the HTML `<button>` tag.  
- On pageload, the API coverage route will be called via AJAX, which returns an object that contains the indicator codes for the implemented routes.  
- The returned object will be used to remove the `disabled` attribute from the appropriate buttons as they are loaded.  I'd like to implement all of the logic serverside to get something quite responsive, but that means that I'll have to find a way to store or pass the return value of the coverage route to each endpoint that returns the rendered template for that row of the table

Clicking a button will open a little box under the row in the table that shows the state of the execution of the route (e.g. which `api` call it's making), which I'm going to try to do using the `flash` function.  It should also display any errors encountered in as helpful a way as possible.

