"use strict";

const messageMod = require("./messages");
messageMod.messages.forEach(m => console.log(m));

/*In JavaScript, the export statement is used in modules 
to expose variables, functions, or classes so that they can 
be accessed and used in other parts of the application or in 
separate files. By using the export , you make certain parts of
 your code accessible outside the module.
 
 that require is importing the information in messages.js*/