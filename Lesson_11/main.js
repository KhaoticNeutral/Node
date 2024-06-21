"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

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

/*line 9 tells us it's going to host on a local server

line 10 sets the engins view to ejs

The express-ejs-layouts module is imported and assigned to the layouts variable.

The server's port number is set to the value of the PORT environment variable or 3000 
if PORT is not defined.

The server's view engine is set to "ejs".

The "public" directory is set as the static directory for serving files.

The express-ejs-layouts middleware is used to enable the use of layouts in the views.

The express.urlencoded middleware is used to parse URL-encoded bodies (e.g. from form submissions)
 with the extended option set to false, which means it only supports simple objects.

The express.json middleware is used to parse JSON bodies.

The homeController.logRequestPaths middleware is used to log the paths of all incoming requests.

The homeController.respondWithName handler is used to respond to GET requests to the "/name" path with 
the name "John Doe".

The homeController.sendReqParam handler is used to respond to GET requests to the "/items/:vegetable"
 path by sending the value of the vegetable request parameter.

A handler is defined for POST requests to the root path ("/") that logs the request body and query 
parameters and sends a response with the message "POST Successful!".

The errorController.logErrors middleware is used to log any errors that occur during request handling.

The errorController.respondNoResourceFound middleware is used to respond to requests for non-existent
 resources with a 404 status code.

The errorController.respondInternalError middleware is used to respond to requests that result in an 
internal server error with a 500 status code.

The server is started and set to listen on the specified port, with a message logged to the console 
indicating that it is running.*/
