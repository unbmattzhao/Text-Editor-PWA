# Text-Editor-PWA

A one page text editor tool functioning as a Progressive Web Application (PWA).

## Deployed Site

https://mynewtext-editor-705567453e7c.herokuapp.com/

## Demo Pic

[WebApp](https://github.com/unbmattzhao/Text-Editor-PWA/blob/main/client/img/web%20app.png)

[AppInstalled](https://github.com/unbmattzhao/Text-Editor-PWA/blob/main/client/img/app%20installed.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)

## Installation

#### Requirements:

Node version 18.x
MongoDB

#### Instructions:

:hammer_and_wrench: Clone or fork this repository.  
:hammer_and_wrench: Navigate to the project directory.  
:hammer_and_wrench: Run `npm install`.  
:hammer_and_wrench: Modify the connection details in the config/connection.js file.  
:hammer_and_wrench: Execute `npm run start` to initiate the server.  
:hammer_and_wrench:Seed Data: Utilize `npm run seed` to populate the database with test data.

## Usage

Once the app is running the following endpoints will be available for use.

###### `/api/users`

- GET all users
- GET a single user by its `_id` and populated thought and friend data
- POST a new user
- PUT to update a user by its `_id`
- DELETE to remove user by its `_id`

###### `/api/thoughts`

- GET to get all thoughts
- GET to get a single thought by its `_id`
- POST to create a new thought
- PUT to update a thought by its `_id`
- DELETE to remove a thought by its `_id`

###### `/api/users/:userId/friends/:friendId`

- POST to add a new friend to a user's friend list
- DELETE to remove a friend from a user's friend list

###### `/api/thoughts/:thoughtId/reactions`

- POST to create a reaction stored in a single thought's reactions array field
- DELETE to pull and remove a reaction by the reaction's reactionId value

## Questions

- Please [Email](mailto: matt.zhao2010@gmail.com) me for any question.
- Checkout [Matt Zhao](https://github.com/unbmattzhao) for more projects.

## License

![License](https://img.shields.io/badge/license-MIT-blue.svg)
