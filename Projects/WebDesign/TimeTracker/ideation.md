# Running Ideation for Project

Use this document to record ideas, implementation details, and questions.  Never delete anything from here.  Use '##' followed by the date to add a new entry, using your name and bullet points. Document should be a reverse chronology

## 25 October 2022
Tristan:
* I was working on the class structure and stuff for a while and I realized that I don't want to do any of that on the front end
* The datastructure will live on the serverside, and the client's browser will create the graphs by requesting the information from the server via an API request
* The API request will send back a response in JSON
* The front-end will parse the JSON and create the graph
* Graph will be created by the JavaScript function Document.createElement("div") repeatedly; ultimately, everything is just HTML and CSS like before, it's just the JavaScript tells the HTML and CSS how to respond dynamically
* We want to design modular -- I mean mojular -- graphs with nice structure so we can put in draggable stuffs/who even knows what later

For Jen to Get Started on the Front End Side of Things:
* Checkout this basics video on JavaScript (https://www.youtube.com/watch?v=W6NZfCO5SIk&t=434s), I watched at 2x and it was somewhat useful getting everything under my feet
* Play around in the google chrome JS console (CMD + option + i to open the debug window, then page over to console on the top) to get your feet under you; print = console.log() in javascript
* Learn about the basics of JSON (a quick google search will do to learn the notation), then play around in the console
* Start looking into draggables (I'm also working on this): Do we want to code this up from scratch or use a library? GreenSock (https://greensock.com/) looks cool and useful, but maybe we'd want to do our own thing? Pros and cons of using this library?


# 20 October 2022
Tristan:
* I set up the folder "Projects/WebDesign/TimeTracker" inside the tjmisko.github.io github repo
* Fiddled with some ideas and did some research into how APIs work

# 1 October 2022
Tristan and Jen:
* We talked about some stuffs