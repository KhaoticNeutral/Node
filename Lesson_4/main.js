"use strict";

const port = 3000, //thats your local server
  http = require("http"),
  httpStatus = require("http-status-codes"),
  app = http.createServer((request, response) => {
    console.log("Received an incoming request!");
    response.writeHead(httpStatus.OK, {
      "Content-Type": "text/html"
    });

    let responseMessage = "<h1>Hello, Universe!</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
  });

app.listen(port);
console.log(`The server has started and is listening on port number: ${port}`);

/* 3000 as shown above is representative of your home server
IE your computer, so if you were to copy the url and send it to someone
else it wouldnt show the same as it does on your device

http is being told to fetch the required file that has been exported, with is
your http, and its using the require method, same goes for your http status

then the server is made upon request, printing that an incoming request is coming, by
telling you that it's recived it  

then we set up to tell the script the following is html

then you send it the response that you's like and tada*/

