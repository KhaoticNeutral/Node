/*Session storage is used on applications that only have to last a window tab length, meaning that
the second that the window is closed the storage for that object is deleted, then when it is reintroduced
the data is again temmoprarily stored, this is diffrent from http to https, https is genrally more secure.
The benift of this session storage is that multiple is are able to run and wont interfere with eachother,
however this isn't true for cookies, they cant run multiple instances of the same app*/

/*HOWEVER local storage does not expire, it doesn't matter if the window was closed the information
will stay there always, unless it's removed through javascript or the browsers cache gets cleared, cache memory is just memory that
is invisible but stored for later use, often stored in cache memory*/

/*as to be expected local storage has a larger memory than session storage, also https stored data is diffrent from http, the two use
diffrent schemes, A scheme indicates the protocol (set of rules) browsers must use to access a website's resources. Diffrent
browsers handle diffrent local storage documents if not served through the web (erase this when youve researched this a bit
more in depth)*/

/*Ok now to move onto actual coding, how to access the local and session storage

Its the same as claiming other Javascript objects, using built in web iterfaces for example*/

    sessionStorage.bestColor = "Green";
    sessionStorage["bestColor"] = "Green";
    sessionStorage.setItem("bestColor", "Green");

//all of these do the same thing by setting the best color to green however the best for web storage is line 3

//setOtem method stores its key and value in the web storage object specified, the syntax is:

    webStorageObject.setItem(key, value); //has two reqiured arguments

//key is a required string argument representing the name of the word storage you have or want to make, value is also a strinf argument
//which will specify the value of the key, key and value are always strings

//How to store data in the session storage object

    // Store color: "Pink" inside the browser's session storage object:
    sessionStorage.setItem("color", "Pink");

    // Log the session storage object to the console:
    console.log(sessionStorage);

    // The invocation above will return:
    {color: "Pink"}

    //How to store data in the local storage object

    // Store color: "Pink" inside the browser's local storage object:
    localStorage.setItem("color", "Pink");

    // Log the local storage object to the console:
    console.log(localStorage);

    // The invocation above will return:
    {color: "Pink"}

//Browsers use "[object Object]" for non-serialized objects in the web storage

    // Store myBio object inside the browser's session storage object:
    sessionStorage.setItem("myBio", { name: "Oluwatobi" });

    // Log the session storage object to the console:
    console.log(sessionStorage);

    // The invocation above will return:
    {myBio: "[object Object]", length: 1}

    //the key() method

    webStorageObject.key(index);

//index is a required argument. It is an integer specifying the index of the item whose key you want to get.

/*when setItem() is passed a key name and value, it will then add that key to the given storage item or update
the keys value if it already exixts*/

//How to get the name of an item in the session storage object

    // Store carColor: "Pink" inside the browser's session storage object:
    sessionStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the session storage object:
    sessionStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the session storage object:
    sessionStorage.setItem("laptopColor", "White");

    // Get the name of the item at index 1:
    sessionStorage.key(1);

//How to get the name of an item in the local storage object

    // Store carColor: "Pink" inside the browser's local storage object:
    localStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the local storage object:
    localStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the local storage object:
    localStorage.setItem("laptopColor", "White");

    // Get the name of the item at index 1:
    localStorage.key(1);

//getItem gets a specific piece of stored data, key is a required argument and remeber keys are always strings
webStorageObject.getItem(key);

//when getItem() is passed a key name it will return that keys value or it will null if the key does not exsist

//How to get data from the session storage object

    // Store color: "Pink" inside the browser's session storage object:
    sessionStorage.setItem("color", "Pink");

    // Get color's value from the session storage:
    sessionStorage.getItem("color");

    // The invocation above will return:
    "Pink"

//How to get data from the local storage object

    // Store color: "Pink" inside the browser's local storage object:
    localStorage.setItem("color", "Pink");

    // Get color's value from the local storage:
    localStorage.getItem("color");

    // The invocation above will return:
    "Pink"

// the length property returns the number of properties in the specified web storage.

    webStorageObject.length;

//length returns the number of data items stored in a given Storage object

//How to verify the number of items in the session storage object

    // Store carColor: "Pink" inside the browser's session storage object:
    sessionStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the session storage object:
    sessionStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the session storage object:
    sessionStorage.setItem("laptopColor", "White");

    // Verify the number of items in the session storage:
    sessionStorage.length;

    // The invocation above may return:
    3

//How to verify the number of items in the local storage object

    // Store carColor: "Pink" inside the browser's local storage object:
    localStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the local storage object:
    localStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the local storage object:
    localStorage.setItem("laptopColor", "White");

    // Verify the number of items in the local storage:
    localStorage.length;

    // The invocation above may return:
    3

//removeItem() accepts one required argument. Here is the syntax:  
//key is a required argument. It is a string specifying the name of the web storage property you want to remove.

webStorageObject.removeItem(key);

//when passed a key name, will remove that key from the given storage object if it exsists

//How to remove data from the session storage object

    // Store carColor: "Pink" inside the browser's session storage object:
    sessionStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the session storage object:
    sessionStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the session storage object:
    sessionStorage.setItem("laptopColor", "White");

    // Remove the pcColor item from the session storage:
    sessionStorage.removeItem("pcColor");

    // Confirm whether the pcColor item still exists in the session storage:
    sessionStorage.getItem("pcColor");

    // The invocation above will return:
    null

//How to remove data from the local storage object

    // Store carColor: "Pink" inside the browser's local storage object:
    localStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the local storage object:
    localStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the local storage object:
    localStorage.setItem("laptopColor", "White");

    // Remove the pcColor item from the local storage:
    localStorage.removeItem("pcColor");

    // Confirm whether the pcColor item still exists in the local storage:
    localStorage.getItem("pcColor");

    // The invocation above will return:
    null

//The clear() method clears (deletes) all the items in the specified web storage.

webStorageObject.clear();

//clears all keys stored in a given syorage object

//How to clear all items from the session storage object

    // Store carColor: "Pink" inside the browser's session storage object:
    sessionStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the session storage object:
    sessionStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the session storage object:
    sessionStorage.setItem("laptopColor", "White");

    // Clear all items from the session storage:
    sessionStorage.clear();

    // Confirm whether the session storage still contains any item:
    console.log(sessionStorage);

    // The invocation above will return:
    {length: 0}

//How to clear all items from the local storage object

    // Store carColor: "Pink" inside the browser's local storage object:
    localStorage.setItem("carColor", "Pink");

    // Store pcColor: "Yellow" inside the local storage object:
    localStorage.setItem("pcColor", "Yellow");

    // Store laptopColor: "White" inside the local storage object:
    localStorage.setItem("laptopColor", "White");

    // Clear all items from the local storage:
    localStorage.clear();

    // Confirm whether the local storage still contains any item:
    console.log(localStorage);

    // The invocation above will return:
    {length: 0}