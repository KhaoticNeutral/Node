"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");
const getViewUrl = url => {
  return `views${url}.html`;
};
http
  .createServer((req, res) => {
    let viewUrl = getViewUrl(req.url);
    fs.readFile(viewUrl, (error, data) => {
      if (error) {
        res.writeHead(httpStatus.NOT_FOUND);
        res.write("<h1>FILE NOT FOUND</h1>");
      } else {
        res.writeHead(httpStatus.OK, {
          "Content-Type": "text/html"
        });
        res.write(data);
      }
      res.end();
    });
  })
  .listen(port);
console.log(`The line server has started and is listening on port number: ${port}`);

/*line 7 this declares a function named getViewUrl that takes a single argument url
this returns the file path of the html file to be served based on the requested url

line 11 this creates an http server and takes the callback function as an argument, which
when the execute any incoming requests 

line 12 this calls the get view function with req.url argument to get the file path of the html 
file to be served based on request

line 13 takes the file path and callback functions as arguments, the function is executed when 
the file is read and it will either have error or data

line 14 it checks for an error while reading the file

line 15 this sets the http reponse to be the 404 error if there was a problem reading the file

line 16 it will write to the client file not found if there was an error

line 18 sets the http response status to 200 ok if there was no problem reading the file

line 21 writes the html content of the file to the response

line 23 ends the http response

line 26 http listens for incoming requets on the specified port

line 27 to show on the console that the server has started listening on the specifed port */
