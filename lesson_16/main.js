"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts");

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/confetti_cuisine",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 3000);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/courses", homeController.showCourses);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

/* line 3-5 import necessary modules and set up the express app, including 
defining controllers and layouts for the application 

line 7-10 connects the app to a MongoDB database named conffetti cuisine 
running on localhost at port 27017 using mongoose

line 11-12 set the view engine for the express app to ejs and configure the
port for the server to run defaulting to 3000 if there is no avalible server

line 13-15 configure middleware for parsing url-encoded and JSON data as well
as using ejs layouts and serving statsic files from publiv directory

line 17-19 this route handler responds the request to the root url by rendering
the index views

line 21-23 these route handlers define endpoints for managing subscribers, including
getting all subscribers, including getting a;; subscribers displaying it on a subscribers
page and saving a new subscriber

line 25-26 manage requests related to courses shwoing courses and handling from submission
for signing up

line 28-29 set up error handling middleware for handling 404 and 500 responses

line 31-33 starst the express server listening on the configured port and logging 
a message to the console once the server is running*/