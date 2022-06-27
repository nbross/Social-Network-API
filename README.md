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
The following necessary dependencies must be installed to run the application properly: Node.js, dotenv, bcrypt, mysql, sequelize, express, express-handlebars, handlebars, connect-session-sequelize and a terminal.

## Run App
The following commands are needed to run the app: source db/schema.sql(in sql shell), create an .env and import your info, npm start.

## Problem!!!
The site really work tried a few stuff to fix it but kind of ran out time. The page loads and you can login, but nothing happens after. I've code all the view and routes to have the site let the users to create posts and comment 
## Screenshot

![Social-Network-API](/assets/images/2022-06-27.png)

## Repo link

Git Hub Repo: https://github.com/nbross/Social-Network-API

Walk-through Video: 