"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  fs = require("fs");

const sendErrorResponse = res => {
  res.writeHead(httpStatus.NOT_FOUND, {
    "Content-Type": "text/html"
  });
  res.write("<h1>File Not Found!</h1>");
  res.end();
};

http
  .createServer((req, res) => {
    let url = req.url;
    if (url.indexOf(".html") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
      });
      customReadFile(`./views${url}`, res);
    } else if (url.indexOf(".js") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/javascript"
      });
      customReadFile(`./public/js${url}`, res);
    } else if (url.indexOf(".css") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/css"
      });
      customReadFile(`./public/css${url}`, res);
    } else if (url.indexOf(".png") !== -1) {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "image/png"
      });
      customReadFile(`./public/images${url}`, res);
    } else {
      sendErrorResponse(res);
    }
  })
  .listen(3000);
console.log(`The server is listening on port number: ${port}`);

const customReadFile = (file_path, res) => {
  if (fs.existsSync(file_path)) {
    fs.readFile(file_path, (error, data) => {
      if (error) {
        console.log(error);
        sendErrorResponse(res);
        return;
      }
      res.write(data);
      res.end();
    });
  } else {
    sendErrorResponse(res);
  }
};

/* starting with line 8 because we've covered the previous ones 

line 8 defines a function for error response that takes a res (response)
parameter which represents the response object in node

line 9 sets the header with the status 404 not found and specifies the content 
type

line 13 ends the response process

line 18 extracts the url path from the incoming request 

line 19 this line checks if the url contains html

line 23 serves the reqeuted html file

the following serves the same purpose but with js, css, png by checking the
url extention and serving the correct corresponding file types

line 58 if the url does not match any of the file types this line will call
the senderror response to handle that the file was not found

line 43 listens for incoming requets 

line 44 prints to the console that the server is listening

the custom read function reads the request files asynchronously, checks for errors,
writes the file data to the response and ends the response process accordingly*/