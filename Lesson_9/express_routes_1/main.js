"use strict";

const port = 3000,
  express = require("express"),
  app = express();

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

//app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/contact", (req, res) => {
  res.send("contact information submitted successfully");
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful");
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

/*"use strict"; - This activates strict mode in JavaScript, which enforces stricter parsing and error handling in the code.

const port = 3000, - Defines a constant variable called port with a value of 3000.

express = require("express"), - Requires the Express module in order to use it in the code.

app = express(); - Creates an instance of the Express application and assigns it to a variable called app.

app.use((req, res, next) => {...}); - This is a middleware function that logs the URL of incoming requests and then calls the next function in the middleware chain.

app.get("/items/:vegetable", (req, res) => {...}); - Defines a routing middleware for GET requests to the specified URL pattern ("/items/:vegetable") where ":vegetable" is a parameter, and sends a response back with the vegetable requested.

app.listen(port, () => {...}); - Starts the server and listens on the specified port (3000 in this case). When the server starts running, it logs a message indicating the port number.*/