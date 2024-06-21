"use strict";

const httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html"
  },
  routes = {
    GET: {
      "/info": (req, res) => {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/plain"
        });
        res.end("Welcome to the Info Page!");
      }
    },
    POST: {}
  };

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req, res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>");
    }
  } catch (ex) {
    console.log("error: " + ex);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};

/* Moving past the stuff we know by now lets go to 

line 7, the routes object with two properties get and post,
under get there is the info route with an arrow function handling the
request and the response 

line 19 exports the handle function that takes request and response
parameters. it tries to to find a matching route based on the request method
and url then it executes the corresponding action or returns a 404

line 32 this exports the function get that allows adding GET routes to the routes
object by specifying a url and an action to be preformed accordingly

line 36 simularly exports the function Post to add post routes to the routes object*/

