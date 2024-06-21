"use strict";

const express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  errorController = require("./controllers/errorController"),
  layouts = require("express-ejs-layouts");

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

app.get("/courses", homeController.showCourses);
app.get("/contact", homeController.showSignUp);
app.post("/contact", homeController.postedSignUpForm);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});

/*const express = require("express"): This line imports the Express.js module into the code.

const app = express(): This line creates a new Express.js application and assigns it to the app variable.

const homeController = require("./controllers/homeController"): This line imports the homeController module 
from the ./controllers/homeController file.

const errorController = require("./controllers/errorController"): This line imports the errorController module
 from the ./controllers/errorController file.

const layouts = require("express-ejs-layouts"): This line imports the express-ejs-layouts module, which allows 
for the use of layouts in EJS templates.

app.set("view engine", "ejs"): This line sets the view engine for the application to EJS.

app.set("port", process.env.PORT || 3000): This line sets the port number for the application to the value of 
the PORT environment variable, or to 3000 if the PORT variable is not set.

app.use(express.urlencoded({ extended: false })): This line sets up middleware to parse incoming request bodies 
that are encoded in x-www-form-urlencoded format. The extended option is set to false to use the querystring module 
to parse the body, which is faster but less flexible than the qs module used when extended is set to true.

app.use(express.json()): This line sets up middleware to parse incoming request bodies that are encoded in JSON format.

app.use(layouts): This line sets up middleware to use the express-ejs-layouts module to enable the use of layouts in EJS templates.

app.use(express.static("public")): This line sets up middleware to serve static files from the public directory.

app.get("/", (req, res) => { res.render("index") }): This line sets up a route that responds to GET requests to the 
root URL (/) by rendering the index template.

app.get("/courses", homeController.showCourses): This line sets up a route that responds to GET requests to the 
/courses URL by calling the showCourses function in the homeController module.

app.get("/contact", homeController.showSignUp): This line sets up a route that responds to GET requests to the
 /contact URL by calling the showSignUp function in the homeController module.

app.post("/contact", homeController.postedSignUpForm): This line sets up a route that responds to POST requests 
to the /contact URL by calling the postedSignUpForm function in the homeController module.

app.use(errorController.pageNotFoundError): This line sets up middleware to handle 404 errors by calling the
 pageNotFoundError function in the errorController module.

app.use(errorController.internalServerError): This line sets up middleware to handle 500 errors by calling the 
internalServerError function in the errorController module.

app.listen(app.get("port"), () => { console.log(Server running at http://localhost:${app.get("port")}`) })`:
 This line starts the application's server and listens for incoming requests on the port number set up earlier. 
 It also logs a message to the console indicating that the server is running.*/
