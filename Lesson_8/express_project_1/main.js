"use strict";

const port = 3000,
  express = require("express"),
  app = express();
app
  .get("/", (req, res) => {
    res.send("Hello, Universe!");
  })
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });

  /*line 4 imports the express.js module into the script

  creates a simple Express server that responds with "Hello, Universe!" when a GET request 
  is made to the root URL, and it logs a message to the console when the server starts listening 
  on port 3000.*/