# TODO App

## Author: Jason Taisey

### Links & Resources

[Deployed Site](https://friendly-ramanujan-1fdaa1.netlify.app/)
[Pull Requests](https://github.com/JTaisey389/todo/pull/1)

### About this Application

In this initial phase, we’re going to have to start by converting a legacy application into a more modern architecture. Our initial “Proof of Concept” was written using class based components and was not properly styled. Now that our client has given us the “green light” for development, we’re going to refactor the application using Hooks and upgrading the style.

### Dependencies
 
- bootstrap
- react
- react-bootstrap
- react-dom
- react-scripts

### User Stories

- As a user, I would like to be able to add, update, and delete To Do items
- As a user, I would like my To Do Items to be permanently stored so that I can re-access them at any time, using any device

### Day 1

**Event Architecture**

![Link](Assets/Todo_UML.jpg)

### Day 2

**Event Architecture**

![Link](Assets/Todo_UML.jpg)

**Technical Requirements**

Workflow changes:

On application start, display all of the to do items from the API/Database
When adding an item, issue a POST request to the API server
When marking items complete, issue a PUT request to the API server for the item
When deleting items, issue a DELETE request to the API server for the item
