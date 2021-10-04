# Welcome to the [Trivia Game](https://leandrofcr.github.io/trivia-game/) project repository !


## What was developed

The Trivia Game project is a quiz game based on a quiz game using React and Redux, developed in group its functionalities according to the demands defined in a Kanban board. The application has the following recommendations:

   - Log in to the game and, if the e-mail is registered on the [Gravatar](https://pt.gravatar.com/) website, have your photo associated with the user's profile.
   - Go to the page referring to the game, where you must choose one of the answers available for each of the requested questions. The answer must be timed before the timer reaches zero, otherwise the answer must be considered wrong.
   - Be redirected, after 5 questions answered, to a scoring screen, where the text contained depends on the number of correct answers.
   - See a leaderboard page, if you like, at the end of each game.
   - Configure some options for the game in a configuration screen accessible from the app header.


# Skills

In this project, the following skills were worked on:

    - Create a Redux store in React Applications

    - Create reducers in Redux in React applications

    - Create actions in Redux in React applications

    - Create dispatchers in Redux in React applications

    - Connect Redux to React components

    - Create asynchronous actions in your React application that uses Redux.

---


# Instructions for cloning the project:

1. Clone the repository
  * `git clone git@github.com:leandrofcr/trivia-game.git`.
  * Enter the repository folder you just cloned:
    * `cd trivia-game`


2. Install dependencies and start the project
  * Install dependencies:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (a new page should open in your browser with the game login screen)


### Linter

To ensure the quality of the code in order to have it more readable, easier to maintain and following good development practices, we used in this project the `ESLint` and `StyleLint` linters. To run or link locally in your project, run the commands below:

```bash
npm run lint
npm run lint:styles
```

---

### Requirement Test Execution

Project testing was done using [Cypress] (https://www.cypress.io/how-it-works/). The `1366 x 768` resolution (1366 pixels wide by 768 pixels high) is used for the layout tests.

You can test this locally by running `npm run cy`. This command runs a set of Cypress tests that validate that the overall flow and defined requirements are working as directed. You can also run the command `npm run cy:open` to get a visual result of the search tests.

These tests don't consider the overall layout, but the correct attributes and information, so pay attention to that! Tests will give you an error message if not passed (for whatever reason). 😉

** Attention: ** The application must be running for Cypress in the terminal to be able to test.

---

### Trivia API

The [Trivia API](https://opentdb.com/api_config.php) is pretty simple. We have 2 endpoints you need to use for this application.

* ** Get the session token of the person who is playing **
* ** Catch questions and answers **

First, you need to make a GET request to:

```
https://opentdb.com/api_token.php?command=request
```

This endpoint will return the token that will be used in the following requests. His answer will be:

```
{
   "response_code":0,
   "response_message":"Token Generated Successfully!",
   "token":"f00cb469ce38726ee00a7c6836761b0a4fb808181a125dcde6d50a9f3c9127b6"
}
```

To get the questions, you need to make a GET request to the following endpoint:

```
https://opentdb.com/api.php?amount=${quantidade-de-perguntas-retornadas}&token=${seu-token-aqui}

// Recomendation
https://opentdb.com/api.php?amount=5&token=${seu-token-aqui}
```

```
// Pergunta de múltipla escolha
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the first weapon you acquire in Half-Life?",
         "correct_answer":"A crowbar",
         "incorrect_answers":[
            "A pistol",
            "The H.E.V suit",
            "Your fists"
         ]
      }
   ]
}
```

```
// True or false question
{
   "response_code":0,
   "results":[
      {
         "category":"Entertainment: Video Games",
         "type":"boolean",
         "difficulty":"hard",
         "question":"TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
         "correct_answer":"False",
         "incorrect_answers":[
            "True"
         ]
      }
   ]
}
```


---

### Gravatar

Gravatar is a service that allows you to leave the global avatar from the registered email, it shows your registered photo on any linked site. In the screen of ** Home **, a person who plays can put an email that must make a query to the API of [Gravatar] (https://br.gravatar.com/site/implement/images/).

Deployment is based on email. This email must be transformed into a `MD5 hash` (https://br.gravatar.com/site/implement/hash/). To generate such a hash, we use [CryptoJs] (https://github.com/brix/crypto-js).

For example:
    - Guaranteed the installation of CryptoJS in the project, important for MD5:
    `import md5 from 'crypto-js/md5';`

- Convert user email:
    `md5(emailDoUsuário).toString();`

After generating the hash, just add the generated value to the final URL:

```
// Required URL format:
https://www.gravatar.com/avatar/${hash-generated}

// Example of a person's hashed URL
https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50

// Sample image displayed with a URL
<img src = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />

```
---


Let's goo !!!
