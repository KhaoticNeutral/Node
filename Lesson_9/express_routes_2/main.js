"use strict";

const port = 3000,
  express = require("express"),
  app = express();

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

app.get("/items/:vegetable", (req, res) => {
  let veg = req.params.vegetable;
  res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

/* line 7 is  middleware is used to parse incoming 
requests with URL-encoded bodies. The extended option 
is set to false to only parse data in the form of 
key=value pairs.

line 12 will parse incoming requets with JSON bodies

line 14 logs the url of each request and then calls the
next() function to pass control to the middleware funtion

line 19 handler for Post requests to the root / path and logs
the request body and query parameters, then sends a response post 
successful then ends the response

line 25 gets the vegitable parameter from the url, then sends a 
response*/