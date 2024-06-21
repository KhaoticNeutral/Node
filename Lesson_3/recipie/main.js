"use strict";

const cities = require("cities");
var myCity = cities.zip_lookup("10016");
console.log(myCity);

//do you manually add the packages or do they happen after running the terminal?
//npm i (module name here) -S to install the packages

/*explination: 
line 1- use strict is used to ensure that you cant use
varibles if they havent been assigned or declared or assaigning
varibles to read only, it helps in making the code more
readable

line 2- it imports a module called cities and then places it
with the const var named cities, the require function is used to
load the module and then the name of the argument is passed to the 
function

line 3- calles a function called zip-lookup on that cities module 
then it passes a string "10016" as an argument then the function
returns information about the given city assosiated with that zip 
code the object is then assaigned the var myCity

line 4- then it outputs the value of myCity varible to the console
it helps in debugging or displaying information

in summary we learnt here how to import a module, this specific one
imports info about cities and compares information, we can see this
information comparason in line 2-3 */