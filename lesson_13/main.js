"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  MongoDB = require("mongodb").MongoClient,
  dbURL = "mongodb://localhost:27017",
  dbName = "recipe_db";

MongoDB.connect(
  dbURL,
  (error, client) => {
    if (error) throw error;
    let db = client.db(dbName);
    db.collection("contacts")
      .find()
      .toArray((error, data) => {
        if (error) throw error;
        console.log(data);
      });

    db.collection("contacts").insert(
      {
        name: "Eben van Riensburg",
        email: "eben@king.com"
      },
      (error, db) => {
        if (error) throw error;
        console.log(db);
      }
    );
  }
);

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

/*this uses the express.js web framework, it sets up a simple web server that
can handle http requests and interact with mongoDB data base

line 3 - 10 imports the necessary modules and libraries required for the application
to run

line 14 connects to mongoDB database running on localhost with the url, and the database 
name

line 24 retrives all documents from the contacts colection and logs all the data to the 
console

line 37 sets the port number for the application to listen in on and using the environment
varible port if it exsists else it defsults to 3000

line 38 sets the view engine for the application to EJS (embedded javascript)

line 40 serves static files from the public direcorty

line 41 uses the express-ejs layouts library to define a layout for the application

line 43 parses url encoded bodies with the qs library and only allows strings and arrays as 
values 

line 47 parses JSON bodies with the json parse library

line 58 uses the logrequestpaths middleware exported by the homeController module to log the paths 
of incoming requests 

line 50 defines a route for GET requests to the name path and uses the respond with name function
exported by the home controller module to handle the request

line 51 defines the route for GET requests to the items path and uses the send request parameter 
function 

line 53 defines a route for POST requests to the / path and uses a callback function to handle the 
request. the callback function logs the request body and query parameters and sends a response indicating 
that the POST request was successful

line 59 uses the logErrors middle ware exported by the errorController module to log any errors the occur 
during request handling

line 60 uses the respondNoResourcesFound middleware exported by the errorController module yo handle 404 not found
errors

line 61 uses the respond InternalError middleware exported by the errorController module to handle 500 internal server
error error's

line 63 starts the express.js app and listens for incoming requests on the port number set earlier. it logs a message
indicatinf that the app is running and the url to access it */