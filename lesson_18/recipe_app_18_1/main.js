"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(homeController.logRequestPaths);

app.get("/name", homeController.respondWithName);
app.get("/items/:vegetable", homeController.sendReqParam);

app.get("/subscribers", subscribersController.getAllSubscribers, (req, res, next) => {
  res.render("subscribers", { subscribers: req.data });
});

app.get("/", homeController.index);
app.get("/courses", homeController.showCourses);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

/* line 3 imports the express framwork

line 4 initilizes the express application

line 5-9 import various controllers and modules needed for the application

line 10 sets a default promise library

line 12-15 connect to a mongoDB database named recipie_DB, it also sets some
options like useNewURLParser and useCreateIndex

line 17-20 define a callback function to be executed once the connection has 
been established

line 22-23 set the port for the express application and view the negine

line 25-27 these lines configure middleware for serving static files using ejs layouts
parseing url encoded and JSON data and logging request paths

line 29-30 define routes for handling requests specific urls and assosiating them with
correspondinf controller functions

line 32-33 renders the subscribers view and passing the subscribers data to view

line 35-36 define routes for the homepage courses page, connect page and subscription
form handling

line 38-40 set up middleware functions to log errors, handle missing resources and respond
to internal server errors 

line 42-44 starts the express app listening on the specified port*/