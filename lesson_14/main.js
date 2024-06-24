"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
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
  name: "John Wix"
}).where("email", /wix/);

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

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

/* line 3 imports the express framework using the require function

line 4 initiates express by using the express() function

line 5-8 imports errorController, homeController, express-ejs-layouts
mongoose and subscriber modules from their respective paths

line 10-13 connect to a MongoDB database named recipie_db running on
localHost at port 27017 using mongoose, a mongoDB object modeling tool
for node.js

line 15-29 these lines set up a callback funtion to log a success message
once the connection to mongoDB is established

line 21-23 queries the subscriber module to find a document where the name
name is john wix and the email contains wix

line 25-28 executes the query and logs the name of the subscriber if the query
returns data

line 30-31 set up the port for the express application and configure the view engine
to use ejs for renderring views

line 33-36 configure express to serve static files from the public directory uses EJS
layouts, parse URL-encoded and JSOn data and log request paths

line 38-39 define routes for handling Get requests to name and vegitables 
paths using functions from the homeController

line 41-45 defines a route for handling POST requests to the root path/ logging the
request to the root path / logging the request body and query parameters and sending
a response 

line 47-49 set up middleware functions to log errors and handle cases where no resource
is found or an internal error occurs 

line 51-53 starts the express server, listening on the port defined earlier and logs a 
maessage indicating the server is running */