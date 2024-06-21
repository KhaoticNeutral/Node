"use strict";

const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController");

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

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.get("/items/:vegetable", homeController.sendReqParam);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

/*"use strict"; - Activates strict mode in JavaScript.

const port = 3000, - Defines a constant variable called port with a value of 3000.

express = require("express"), - Requires the Express module in order to use it in the code.

app = express(), - Creates an instance of the Express application and assigns it to a variable called app.

homeController = require("./controllers/homeController"); - Requires a custom module (./controllers/homeController) that contains controller logic for handling requests.

app.use(express.urlencoded({extended: false})); - Middleware to parse incoming request bodies as URL encoded data with extended set to false.

app.use(express.json()); - Middleware to parse incoming request bodies as JSON data.

app.use((req, res, next) => {...}); - Middleware function that logs the URL of incoming requests and calls the next function in the middleware chain.

app.post("/", (req, res) => {...}); - Defines a routing middleware for POST requests to the root URL ("/"), logs the request body and query parameters, and sends a response back.

app.get("/items/:vegetable", homeController.sendReqParam); - Defines a routing middleware for GET requests to the URL pattern "/items/:vegetable" and delegates the handling of the request to the sendReqParam function in the homeController module.

app.listen(port, () => {...}); - Starts the server and listens on the specified port (3000) and logs a message indicating the port number when the server starts running.*/