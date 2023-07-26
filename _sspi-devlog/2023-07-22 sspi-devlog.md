---
layout: post
title: Hitting a Wall
subtitle: Connectivity Conundra and Frontend Fiddling
date: 2023-07-22
---
## An Unexpected Error
While hitting the same API that I've been using for another indicator, I started receiving a foreboding error message:
```
requests.exceptions.ConnectionError: HTTPSConnectionPool(host='unstats.un.org', port=443): Max retries exceeded with url: /sdgapi/v1/sdg/Indicator/PivotData?indicator=14.5.1 (Caused by NewConnectionError('<urllib3.connection.HTTPSConnection object at 0x7f8988a36310>: Failed to establish a new connection: [Errno 8] nodename nor servname provided, or not known'))
```
It seems like the kind of error message that would occur  when the server rejects a request after receiving too many requests from the same IP address.

My first instinct was to raise my sleep time to something like 5 seconds, but I had no luck there.  I dropped some print statements into the code to find which request I was erroring on, and I found that it was the *first* request.  Strange.

So naturally, the next step was to check the link.  I navigated to the source API URL in my browser, and it loaded just fine.  *Huh.* I tried reloading it a bunch of times quickly from my browser, and that worked fine too.  I paged through using the URL arguments, and that also worked.

At a loss, I played around with the `requests` library `Session` object, but that didn't seem to help either.  What could be going on?

I decided to SSH into my Linode, pull the changes, and run the app from there.  And, sure enough, it worked!  I'm not quite sure what was going on with that, but it must have been some kind of strange stuff to do with my Wifi Network, which happens to be a public network in my building.

There's nothing that stops your momentum like running into an error like this.  I was ready 

## Deploying on Linode 
It was great that the route I wrote ran perfectly on the server, but waiting blindly for it to finish running redirected my attention to setting up the interface for operating our `collect` and `compute` functions, which is yet to exist.  In particular, it's important to be able to see what's going on during collection, since between running a bunch of `GET` requests and sleeping between them, it takes a while, and it's nice to know that things are working.  

The elephant in the room, and one that I've been ignoring for a while, is how we should handle generating the user interface for the website.  Right now I'm using HTML augmented serverside with Jinja2 Templates, SCSS, and JavaScript to handle everything.  The question has been and remains: should spend the time to equip it with a proper front-end framework and all its concomitant functionality and opinionation?   

## Front End Frameworks: The Enemy of Building as You Go
It's definitely true that I've felt a lot of resistance to learning and deploying frontend frameworks.  They seem overcomplicated to me.  Working with HTML, CSS, and JavaScript isn't so bad, I tell myself.  I feel a mild sense of guilt about this, like I'm going about front-end development in the wrong way.  

But then again, frontend frameworks were built to solve the problems of complexity that emerge when working with large and complicated UIs.  

For the SSPI website, what each user sees is quite simple and, importantly, *always the same*.  Our site is incredibly simple from that prospective.  Persistent state is inherited entirely from the server and can only be updated by system administrators. The only stateful components of the UI are a few view dropdown menus that the users can select to customize charts, and it seems fine if these state variables are dropped on refresh.  If that becomes a problem, I can store them to the Flask `session` ([source](https://stackoverflow.com/questions/32640090/python-flask-keeping-track-of-user-sessions-how-to-get-session-cookie-id)) to manage state.  

The other issue with front end frameworks for this application is that the UI is being kludged together as I go, and I'm not sure that's a bad thing.  The structure you inherit from the opinionated folder and component structure of a frontend framework forces you to make a lot of design decisions up front, which, for something which will be as lightweight as the final website, seems like a lot of overhead.  It's not like I have hundreds of pages and files to work with.  I've got maybe a dozen, and I'm fully capable of reasoning about the state of the application and the UI without any further management tools.  If it gets too complicated, I'll step back and reassess.  But for now, I don't want to have to take time field stripping a rifle in the middle of a knife fight.

