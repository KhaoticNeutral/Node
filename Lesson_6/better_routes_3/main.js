"use strict";

const port = 3000,
  http = require("http"),
  httpStatusCodes = require("http-status-codes"),
  router = require("./router"),
  fs = require("fs"),
  plainTextContentType = {
    "Content-Type": "text/plain"
  },
  htmlContentType = {
    "Content-Type": "text/html"
  },
  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (errors, data) => {
      if (errors) {
        console.log("Error reading the file...");
      }
      res.end(data);
    });
  };
router.get("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("INDEX");
});
router.get("/index.html", (req, res) => {
  res.writeHead(httpStatusCodes.OK, htmlContentType);
  customReadFile("views/index.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(httpStatusCodes.OK, plainTextContentType);
  res.end("POSTED");
});
http.createServer(router.handle).listen(3000);
console.log(`The server is listening on port number: ${port}`);

/*line 3 declares the port as 3000

line 4 imports the node module, which is made for creating http servers and
handling requests

line 5 provides an easy way to work with http status codes in node

line 6 imports a custom module for router 

line 7 imports node.js core module fs (file system) which provides file
system related functionality like reading and writing files

line 8 defines an object plain text content type with a key 
content type and value text plain used for setting the content type in http
responses 

line 11 defines an object html content type with a key of content type then 
setting it to text/html used for setting thr content type in http responses

line 14 defines the function that takes file and response parameter, reads the file
asynchronously using fs.readfile and sends the file content in the response

line 22 defines a route handler for GET requets to the root path it sets the response 
content type to plain text then sends the string back INDEX

line 26 defines a route handler for GET requests to index. it sets the response 
then it reads view html file using the custom read file and sends the file content in the
response 

line 30 defines a route handler for POST requets the root path it sets the reponse content type,
and sends a string back POSTED

line 34 creates an http server with the routes handle function to handle incoming requets and listens
on the port 

line 35 outputs a message to the console saying that it;s listening on the specified port number */
