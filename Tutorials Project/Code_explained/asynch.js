/*In this asynch programming we are assuming to be communicating with a server, since
it's useful to have asynch programming for this very thing, as it allows you to execute other functions
while waiting for data retrival first we'll be disecting the callback function*/

// Declare function
function fetchData(callback) {
    setTimeout(() => {
      const data = {name: "John", age: 30};
      callback(data);
    }, 3000);
  }
  
  // Execute function with a callback
  fetchData(function(data) {
    console.log(data);
  });
  console.log("Data is being fetched...");

  
  /*the 3000 is in seconds how long the call back is timed for see the setTimeout.
  the code is doing the following,
  1. a function is being declared fetchdata passing callback, the data of the callback will only return after the 3 seconds
  2. setTimeout is stating that the following data cannot be executed until the call back of 3000 is done
  3. stating which data should be shown after the 3000
  4. what the callback should do after the counter is done
  5. while waiting for the callback the console will say "data is being fetched"
  6.the completed output would be:
    "Data is being fetched...
    {name: "John", age: 30}"*/

/*it is to be noted that callback don't do well being nested, arguments between each callback tends to pile up and theres a better
method known as promises if you need to nest asynch programming, a good example to know if your callback is getting too complex is:

getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getEvenEvenMoreData(c, function(d) {
        getFinalData(d, function(finalData) {
          console.log(finalData);
        });
      });
    });
  });
});


*/

/*next is promises, unlike callback promises wont be passed to a function nor run inside of the function. Instead promises are returned
promises take in call back and two conditions, resolve and reject, resolve that if your code runs how it supposed to you can call on resolve,
if something goes wrong you can call on reject. for some explanatory syntax code for resolve and reject you'd place this in your promise

const error = false;

if(!error){
    resolve();
}else{
    reject('Error:something went wrong')
}

if your code does reject you can then use the .catch to catch said error and correct it lets use a combo example*/

function createPost(post){
    return new Promise((resolve, reject) => {  
        setTimeout(() => {
            post.push(post); //promise to print the third post after the 2000 seconds

            const error = false;   //If you want to test the .catch you will have to change this to true

            if(!error){
                resolve();
            }else{
                reject('Error:something went wrong') //error message
            }
        }, 2000); //how long you have to wait
    });
}

createPost({ title: 'post three', body:'this is post three'}) //creates another post
.then(getPosts)  //you can use this because it is a promise
.catch(err => console.log(err)); //this will neatly provide the error if error is true

/*Promises are more elegant in this way, it also has more readable syntax another example*/

// Initialize a promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {  //set time out same as callback
        resolve("Hello from the promise!"); //if promise is resolved this will print
    }, 2000);
});

myPromise
    .then((result) => {
        console.log(result); //once the promise is fullfilled this will kick in
    })
    .catch((error) => {
        console.log(error); //if the promise is not fullfilled this will kick in
    }); //this is known as consuming a promise 
    .finally (() => {
        //code here will be executed regardless of the status
        //of a promise (fulfilled or rejected)
      });

/*now to chaining promises you use the then() method, the first promise passes to the second for the seconds promise to be completed and 
so on so forth, look at this example*/

fetch('https://example.com/data') //fetching data
    .then(response => response.json()) //passes the reponse as a JSON, a JSON just converts data so that it's able to be stored in local storage as a string
    .then(data => processData(data)) //proccessing data
    .then(processedData => {
        // do something with the processed data
    })
    .catch(error => console.log(error)) //catches any error that may have happenened in previous promises

    //it's good practice to have your then() methods in order so that each promise is filled in order
    // another way to catch errors is by using the then(try-catch)

    fetch("https://api.github.com/users/octocat")
  .then((response) => response.json())
  .then((data) => { //this is where the "try catch" is, process the data
    try {
      //processing received data
      console.log(data);
    } catch (error) {
      console.log(error); //then print if there is an error 
    }
  })
  .catch((error) => console.log(error));

  //catches are important because the code will continue to execute with or without the reject, since the code runs independant from eachother

  /* another cool feature of the promise is that you can use all promise to use multiple promises, which will return as a singular promise
  once all the other pormises as been fullfilled, like the following example*/

let promise1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
let promise2 = fetch('https://jsonplaceholder.typicode.com/posts/2');
let promise3 = fetch('https://jsonplaceholder.typicode.com/posts/3');

Promise.all([promise1, promise2, promise3]) //ref all the promises
.then((values) => {
  console.log(values); //log all the values as one promise 
})

/*Next we'll talk about the fetch API thats built into Javascript allowing you to make network requests, network requests retrive
data from a server, this is how a fetch server would be implimented*/

fetch('https://some-api.com/data') //makes a request to retrive data from a server
  .then(response => response.json()) //fullfill/reject promise and coverts data to JSON
  .then(data => { //extracted data printed to the console
    console.log(data); //prints the data
  })
  .catch(error => {
    console.error('Error:', error);
  });

  /* finally we will do the async/await, the fun of this is that the code will read in a synchronus way but still function as 
  async, async is the keyword used to declare a function as async, await is used to pause the function until the promise is resolved*/
  async function getData() { //using the async before the function to declare it as an async function
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1'); //the await is used to tell the function to wait for the data to be retrived
    const data = await response.json(); //wait again for the parse to be retrived from the JSON
    console.log(data);
  }
  
  getData();
  //async is used for more readable code, also eliminating the use for callbacks