"use strict";

const port = 3000,
  express = require("express"),
  app = express();
app
  .get("/", (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
    res.send("Hello, Universe!");
  })
  .listen(port, () => {
    console.log(`The Express.js server has started and is listening on port number: ${port}`);
  });

  /*So, when you run this code and make a GET request to the root ("/") path of the server, it 
  will log the request parameters, body, URL, and query parameters (if any), and send a response
  with the text "Hello, Universe!" to the client.*/