"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.get("/name/:myName", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/name", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});


/*sets up a basic Express server with middleware for parsing request bodies,
 logging requests, defining routes, and starting the server. It's a common 
 structure for building web applications using Node.js and Express.

 line 24 - 25 is retriving the function from the home controller*/