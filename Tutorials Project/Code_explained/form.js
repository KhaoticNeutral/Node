/* This tutorial covers Use the FormData API to access form values in JavaScript and it uses a method called form API, in basic terms 
it can be described as The FormData interface is a tool that helps create a collection of key/value pairs that mimic form fields and 
their values. This collection can then be sent using methods like fetch(), amoungst others */

/*Assuming we have an html set up like this 

<form>

A. <label for="name">Name</label>
  <input type="text" name="name" id="name" />

  <label for="email">Email</label>
  <input type="email" name="email" id="email" />

B.<p>
    <input type="checkbox" name="topics" id="javascript" value="javascript" />
    <label for="javascript">JavaScript</label>

    <input type="checkbox" name="topics" id="html" value="html" />
    <label for="html">HTML</label>

    <input type="checkbox" name="topics" id="css" value="css" />
    <label for="css">CSS</label>
  </p>

  <button type="submit">Submit</button>
</form>

right now form is being used to create user input
but then with the addition of A. the form will allow
a user to input their name and email, then after clicking
submit the data will be sent to be processed
With the addition of B. a group of checkboxes are added 
where mulitple checkboxes can be checked and submitted 
along with the rest of the data*/

// Now to handle the submissions in javascript

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
  
    //const value = data.get('email');
    /*A*/const value = Object.fromEntries(data.entries());

    /*B*/ value.topics = data.getAll("topics");

    console.log({ value });
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);

  /* Initially this code will log the email thats submitted
   Using event.preventDefault(); ensures that the page doesnt just reload.
   With the addition of A we are able to convert the data from user entry to 
   manipulate easier
   With the addition of B it collects all the submission information, conatining
   all the checked items */

   /*JSON stands for Javascript Object Notation, it's often used to transfer the data
   in web applications

   /*Now that we have a basic understanding of the core of submitting a form lets run through this code on how to
   convert the data*/

 //get references for text input and button fields
var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var jsonBtn = document.getElementById("jsonbtn")
var jsonText = document.getElementById("jsontext")


//add click event listener, to get data when data is entered
jsonBtn.addEventListener("click", function(){
    //store data in JavaScript object
    var data = {
        "firstName":firstname.value,
        "lastName":lastname.value
    }
    //convert JavaScript object to JSON
    jsonText.innerHTML = JSON.stringify(data)
})

//First we get refrences to the input fields and buttons to assign then varibles
//then we get an event click listener
//store the data in the javascript object
//convert input data to JSON usings the JSON.stringify() method by passing it the data as the permeter
//Next the JSON is retuned and displayed on the HTML page