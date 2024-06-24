"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  subscribersController = require("./controllers/subscribersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber");

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

var myQuery = Subscriber.findOne({
  name: "Jon Wexler"
}).where("email", /wexler/);

myQuery.exec((error, data) => {
  if (data) console.log(data.name);
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
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedContactForm);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

/* line 3 imports the express framework

line 4 initilizes express application by calling the express function, creating
an instance of the express application

line 5-9 import various controllers and modules needed for the application, such
as the errorController, homeController, subscribersController, layouts, mongoose 
and subscriber 

line 11-14 these lines connect to a mongoDB database named recipie_DB
running on localhost at the port 27017 using mongoose a mongoDB object modeling 
tool designed to work in an asychronous environment

line 16-20 this part listens for the data base connection to open and logs a success
message once the connection is established

line 22-24 a query is constructed to find a subscriber that has a name that matches the 
query is then executed and if the data is found the subscriber's name is logged

line 26-27 set configuration values for the express application, such as the port number
and view engine to be used EJS in this case

line 29-33 middleware functions are added to the express application, such as serving
static files using ejs layouts parsing url encoded and JSON data and logging
request paths

line 35-36 routes are defined for handeling diffrent http requests

line 38-41 functions from the homeController, subscribersController and errorController
are used to handle specific routes, render views and manage errors

line 43-45 set to listen on the specified port number and a message is logged to indicate
the server is running*/
