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

/*line 3-10 imports the required modules and libraries is used for 
creating the web server. all the controllers are custom modules for 
handling errors, home and subscriber related requested, and express and 
mongoose has been discussed

line 12 sets the promise library used by mongoose

line 14 connects the mongoose library to the mongo DB database running
on localhost at the port, the useNewUrlParser option is used to enable
the new url parser for parsing the connection string

line 18 enables the use of the create index command for creating indexes in mongoDB

line 21 listens for the open event on the database connection object and logs a success
message when the database connection is established 

line 25 sets the port number with the default

line 26 sets the ejs template engine as the default view engine for the web server

line 28 serves static files from pubiv directory

line 29 enables the use of the layouts in ejs template engine

line 30-32 enables the use of ejs layouts, sets up middleware that parses incoming requests 
bodies, this is the configuration object for the urlencoded middleware, then it is the
configuration object for thr urlencoded middleware, urlencoded middleware to only parse URL-
encoded data

line 35 sets up middleware that parses incoming request bodies as JSON

line 36 middleware that logs the paths of incoming requests

line 38 This line sets up a route that responds with the name "John Doe" when the /name path 
is requested.

line 39 sets up a route that sends the value of the parameters in the request when the path is
requested

line 41 sets up a route that gets all subscribers from the database and sends them to the subscribers
view

line 42 renders the subscribers view and passes in subcribers data

line 45 sets up a route that responds with the home page when the path is requested 

line 48 sets up a route that resoponds with the subscription page when the contact path is requested

line 42-44 start the express application listening on the configured port and logging a message
to the console with the servers address*/