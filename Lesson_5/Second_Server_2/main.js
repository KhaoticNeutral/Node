"use strict";

const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();

app.on("request", (req, res) => {
    res.writeHead(httpStatus.OK, {
        "Content-Type": "text/html"
    });

    let responseMessage = "<h1>I think I'm live, am I?</h1>";
    res.end(responseMessage);
});

app.listen(port);
console.log(`The server has started and is listening on port number:${port}`)

/*As stated before it works pretty simularly here are some more indepth explinations

`const port = 3000, http = require("http"), httpStatus = require("http-status-codes"), 
app = http.createServer();: This sets the variable port to the value 3000, which is the 
port number that the server will listen on. The http module is required to create an HTTP 
server, and the http-status-codes module is required to get the HTTP status codes. The app 
variable is assigned the result of calling the createServer() method of the http module, which
 creates a new HTTP server.

app.on("request", (req, res) => {...});: This sets up an event listener for the request event on 
the app server. When a request is made to the server, the code inside the callback function will
 be executed. The callback function takes two arguments: req (the request object) and res (the response object).

res.writeHead(httpStatus.OK, { "Content-Type": "text/html" });: This sets the response headers. 

The writeHead() method is called on the res object, and it takes two arguments: the HTTP status 
code (in this case, httpStatus.OK which is equivalent to 200) and an object that contains the response
 headers. The Content-Type header is set to text/html to indicate that the response will be an HTML document.

let responseMessage = "<h1>I think I'm live, am I?</h1>";: This creates a variable called responseMessage and 
assigns it the value of an HTML string.

res.end(responseMessage);: This sends the response to the client. The end() method is called on the res object, 
and it takes the response message as an argument.

app.listen(port);: This starts the server and makes it listen for incoming requests on the specified port.

console.log(The server has started and is listening on port number:${port}): This logs a message to the console
 to indicate that the server has started and is listening on the specified port. */