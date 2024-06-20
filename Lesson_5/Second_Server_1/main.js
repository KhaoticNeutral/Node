"use strict";

const port = 3000,
http = require("http"),
httpStatus = require("http-status-codes"),
app = http.createServer();

const getJSONString = obj => {
    return JSON.stringify(obj, null, 2);
};

app.on("request", (req, res) => {
    var body = [];

    req.on("data", bodyData => {
        body.push(bodyData);
    });

    req.on("end", () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    });

    console.log(`Method: ${getJSONString(req.method)}`);
    console.log(`URL: ${getJSONString(req.url)}`); 
    console.log(`Headers: ${getJSONString(req.headers)}`);
    res.writeHead(httpStatus.OK, {
        "Content-Type":"text/html"
    });
    
    let responseMessage = "<h1>Am I live?</h1>";
    res.end(responseMessage);
})

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

/*Lets break it down line by line

so I was wrong before on what line 3 is doing, what its actually doing
is import the node.js core module (http) using the require function

line 5 imports the http-status-codes module which provides a 
convient way to work with HTTP status codes

line 6 creates a server instance using the createserver() method
from the http module

line 8 defines a function that takes an object as a parameter
and returns a formatted JSON string representation of 
the object

line 12 sets up an event listener for the request event on
the app server which triggers the call back function when
recived

line 13 initilizes an empty array to store the request body data

line 15 listens for the end event on the request object and processes
the accumulated body data by concating it into a buffer and converting 
to string (concating means to link things together in a chain or series)

line 19 outputs the request body contents to the console

line 21 logs the http method of the request

line 24 logs the url of the request

line 25 logs the headers of the request

line 26 sets the response status code to 200 OK and specifes
the content type as text/html

line 31 defines the reponse message to be sent back to the client

line 32 sends the response message back to the client then ends the 
response 

line 35 starts the server listening on the specified port

line 36 outputs a message indicating that the server has started and is listening 
on the specified port number*/