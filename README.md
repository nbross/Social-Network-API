# Social-Network-API
This is the module 18 challenge where I am tasked to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.
## User Story

```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria

```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Installation
The following necessary dependencies must be installed to run the application properly: Node.js, express, mongoose, mongodb, and a terminal.

## Run App
The following commands are needed to run the app: npm i, and npm start.

## Problem!!!
I don't know why but you can't pull up a user by ID, but you can do everything else. Also while recording the demonstration I came across anther bug where I can't post reactions. This problem are still at large and I am aware of them.
## Screenshot

![Social-Network-API](/assets/images/2022-06-27.png)

## Demonstration Videos
[A walk-through video of the Server Start](./assets/videos/Vid%201.webm)

[A video of Back End in Insomnia](./assets/videos/Vid%202.webm)

## Repo link

Git Hub Repo: https://github.com/nbross/Social-Network-API