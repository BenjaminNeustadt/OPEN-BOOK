
<img src="/documents/presentation/glowing-title-white.png" 
     style=" display: block;
             margin-left: auto;
             margin-right: auto;
             width: 50%;">

By Team 5 (Raphaella, Osman, Benjamin, Kay, Ed)

Tech stack:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Jade](https://jade-lang.com/api) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) for AWS cloud database
- [Heroku](https://www.heroku.com/) to deploy the app.

## Diagrams


#### OVERVIEW

                                                      ┌────────────────────┐
                                                      │                    │
                                                      │       ROUTES       │◄──────────────  HTTP Response
                                                      │                    │                  (HTML)
                                                      └─────────┬──────────┘
                                                                │
                                                          Forward request to
     ┌────────────┐                                     appropriate controller
     │            │                                             │
     │            │                                   ┌─────────▼───────────┐
     │            │       ┌─────────────┐             │                     │
     ├────────────┤◄──────┤             ├────────────►│                     │
     │  DATABASE  │       │             │             │    ┌───────────┐    │               HTTP Response
     ├────────────┼──────►│    MODELS   │◄────────────┤    │CONTROLLERS│    ├─────────────►  (HTML)
     │            │       │             │ read/write  │    └───────────┘    │
     │            │       │             │    data     │                     │
     │            │       └─────────────┘             │                     │
     │            │                                   └───────────▲─────────┘
     └────────────┘                                               │
                                                                  │
                                                                  │
                                                         ┌────────┴─────────┐
                                                         │                  │
                                                         │      VIEWS       │
                                                         │    (templates)   │
                                                         │                  │
                                                         └──────────────────┘

#### MVC 



                       ┌────────────┐       ┌────────┐      ┌─────────────┐            ┌─────────┐                    ┌───────┐
                       │  CLIENT    │       │ ROUTES │      │ CONTROLLER  │            │  MODEL  │                    │ VIEW  │
                       └────────────┘       └────────┘      └─────────────┘            └─────────┘                    └───────┘

                     ┌─────────────────┐                  ┌─────────────────┐
                     │                 │                  │                 │                               ┌─────────────────────────────┐
                     │                 │                  │                 │                               │                             │
                     │                 │       GET        │                 │            Request            │          HTML Home          │
                     │                 ├─────────────────►│                 ├──────────────────────────────►│                             │
                     │                 │                  │                 │                               │           INDEX             │
                     │      HOME       │                  │                 │◄──────────────────────────────┤       (list all shops)      │
                     │                 │                  │                 │              HTML             │                             │
      Home Page      │  ('/openbook')  │                  │    index.js     │                               └─────────────────────────────┘
                     │                 │                  │                 │
                     │                 │                  │                 │
                     │                 │                  │                 │
                     │                 │◄─────────────────┤                 │
                     │                 │     RESPONSE     │                 │          (database link)
                     │                 │                  │                 │findAll┌──────────────────┐
                     │                 │                  │                 ├──────▲│                  │     (user does not
                     │                 │                  │                 │▼──────┤       Shop.js    │      need to be signed
                     │                 │                  │                 │       │                  │      up to see lists)
                     └─────────────────┘                  └─────────────────┘       └──────────────────┘
                                                                             response





                        ┌────────────┐       ┌────────┐      ┌─────────────┐            ┌─────────┐                    ┌───────┐
                        │  CLIENT    │       │ ROUTES │      │ CONTROLLER  │            │  MODEL  │                    │ VIEW  │
                        └────────────┘       └────────┘      └─────────────┘            └─────────┘                    └───────┘

                      ┌─────────────────┐                  ┌─────────────────┐
                      │                 │                  │                 │                               ┌─────────────────────────────┐
                      │                 │                  │                 │                               │                             │
                      │                 │       GET        │                 │            Request            │          HTML Home          │
                      │     Users       ├─────────────────►│                 ├──────────────────────────────►│                             │
                      │                 │                  │                 │                               │           INDEX             │
                      │ ('/users/new')  │◄─────────────────┤                 │◄──────────────────────────────┤         (Lists all          │
        USERS         │                 │                  │                 │              HTML             │          the posts)         │
      (Sign up)       │                 │                  │  sessions.js    │                               └─────────────────────────────┘
                      │                 │                  │                 │
                      │                 │       POST       │                 │
                      │ complete form   ├─────────────────▲│                 │
                      │ & submit        │▼─────────────────┤                 │
                      │                 │     RESPONSE     │                 │          (database link)
                      │                 │                  │                 │create ┌──────────────────┐
                      │                 │                  │                 ├──────▲│                  │     (user needs to be
                      │                 │                  │                 │▼──────┤      User.js     │      signed up to post
                      │                 │                  │                 │       │                  │      or favourite a shop)
                      └─────────────────┘                  └─────────────────┘       └──────────────────┘
                                                                              response





                        ┌────────────┐       ┌────────┐        ┌─────────────┐            ┌─────────┐                  ┌───────┐
                        │  CLIENT    │       │ ROUTES │        │ CONTROLLER  │            │  MODEL  │                  │ VIEW  │
                        └────────────┘       └────────┘        └─────────────┘            └─────────┘                  └───────┘

                      ┌─────────────────┐                  ┌─────────────────┐
                      │                 │                  │                 │                               ┌─────────────────────────────┐
                      │                 │                  │                 │                               │                             │
                      │                 │                  │                 │            Request            │                             │
                      │                 ├───────GET───────►│                 ├──────────────────────────────►│                             │
                      │                 │                  │                 │                               │       HTML Sessions         │
                      │     Session     │◄────RESPONSE─────┤                 │◄──────────────────────────────┤                             │
       Sessions       │('/sessions/new')│                  │                 │              HTML             │                             │
      (log  in)       │                 │                  │   sessions.js   │                               └─────────────────────────────┘
                      │                 ├───────POST──────►│                 │
                      │                 │                  │                 │
                      │                 ◄◄────RESPONSE─────┤                 │
                      │                 │                  │                 │
                      │                 │     redirect/    │                 │          (database link)
                      │                 │   users/account  │                 │findOne┌──────────────────┐
                      │                 │                  │                 ├──────▲│                  │     (user needs to be
                      │                 │                  │                 │▼──────┤      User.js     │      signed up to post
                      │                 │                  │                 │       │                  │      or favourite a shop)
                      └─────────────────┘                  └─────────────────┘       └──────────────────┘
                                                                              response









                         ┌────────────┐       ┌────────┐        ┌─────────────┐            ┌─────────┐                  ┌───────┐
                         │  CLIENT    │       │ ROUTES │        │ CONTROLLER  │            │  MODEL  │                  │ VIEW  │
                         └────────────┘       └────────┘        └─────────────┘            └─────────┘                  └───────┘

                       ┌─────────────────┐                  ┌─────────────────┐
                       │                 │                  │                 │                               ┌─────────────────────────────┐
                       │                 │                  │                 │                               │                             │
                       │                 │                  │                 │            Request            │                             │
                       │                 ├───────GET───────►│                 ├──────────────────────────────►│           INDEX             │
                       │                 │                  │                 │                               │         (Lists all          │
                       │     Shops       │◄────RESPONSE─────┤                 │◄──────────────────────────────┤          the posts)         │
        Users area     │ ('/shops/new')  │                  │                 │              HTML             │                             │
                       │                 │                  │    shops.js     │                               └─────────────────────────────┘
                       │                 ├───────POST──────►│                 │
                       │                 │                  │                 │
                       │                 ◄◄────RESPONSE─────┤                 │
                       │                 │                  │                 │
                       │                 │     redirect/    │                 │          (database link)
                       │                 │   users/account  │                 │findOne┌──────────────────┐
                       │                 │                  │                 ├──────▲│                  │     (user needs to be
                       │                 │                  │                 │▼──────┤      User.js     │      signed up to post
                       │                 │                  │                 │       │                  │      or favourite a shop)
                       └─────────────────┘                  └──────────▲──┬───┘       └──────────────────┘
                                                                       │  │    response
                                                                       │  │
                                                                       │  │           ┌──────────────────┐
                                                                       │  └──────────►│                  │     findOne
                                                                       │              │       Shop.js    │     findMany
                                                                       └──────────────┤                  │     findAndModify
                                                                                      └──────────────────┘







Wireframes:
<img src="/documents/wireframes/list-vs-map-wireframes.png">
<img src="/documents/wireframes/wireframe-flow.png">


## Moodboard:
<img src="/documents/mood-board/MOOD-BOARD.png">


## Result:

<img src="/documents/presentation/example-page.png">

## User stories

Using TDD, we implemented the following user stories:

As a user,  
So I can ...  
I'd like to be able to ...

## Project management

We used Trello to manage our project.

[View our card wall](https://trello.com/b/aFp8R5at/open-book)

## Quickstart

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
2. Rename your fork if desired to `OPENBOOK-<team name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   _Note:_ If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `OPENBOOK_test` MongoDB database,
so that integration tests do not interact with the development server.

### Test

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```


