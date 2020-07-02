# Weather Journal App
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

## Programming Topics Covered In This Project:
* Setting up a [Node environment with Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction) and the necessary project dependencies.
* Setting up [a server with GET and POST routes](https://expressjs.com/en/guide/routing.html).
* Creating developer credentials for a Web API.
* Using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with my credentials and user input to get dynamic data into app routes.
* Accessing a GET route on the server side, from a function called on the client side.
* [Chaining Promises](https://javascript.info/promise-chaining) together.
* Accessing HTML elements with JavaScript and setting their properties dynamically.

## Useful Links
**Udacity Information**

This code was created for a project for the Udacity Front End Nanodegree.  Resource links are listed below:

* [Front End Web Developer](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)
* [Starter code](https://github.com/udacity/fend/tree/refresh-2019/projects/weather-journal-app)
* [Rubric](https://review.udacity.com/#!/rubrics/2655/view)

**Javascript Functions Used In This Project**
* [MDN > Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - A JavaScript interface for accessing and manipulating the HTTP pipeline, i.e. requests and responses.

### Development Setup
[Install Node](https://nodejs.org/en/) if you haven't already. Check to make sure `node` is installed properly and you are more current version (12.18.x or higher):

  ```
  node -v
  ```

1. Once you've installed node, install additional project dependencies:
  ```
  npm install express
  npm install body-parser
  npm install cors
  ```

2. Run the development server:
  ```
  node server.js
  ```

4. Navigate to home page [http://localhost:3000](http://localhost:3000)
