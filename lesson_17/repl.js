const mongoose = require("mongoose"),
  Subscriber = require("./models/subscriber"),
  Course = require("./models/course");

var testCourse, testSubscriber;

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

Subscriber.remove({})
  .then(items => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Course.remove({});
  })
  .then(items => console.log(`Removed ${items.n} records!`))
  .then(() => {
    return Subscriber.create({
      name: "Jon",
      email: "jon@jonwexler.com",
      zipCode: "12345"
    });
  })
  .then(subscriber => {
    console.log(`Created Subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Subscriber.findOne({
      name: "Jon"
    });
  })
  .then(subscriber => {
    testSubscriber = subscriber;
    console.log(`Found one subscriber: ${subscriber.getInfo()}`);
  })
  .then(() => {
    return Course.create({
      title: "Tomato Land",
      description: "Locally farmed tomatoes only",
      zipCode: 12345,
      items: ["cherry", "heirloom"]
    });
  })
  .then(course => {
    testCourse = course;
    console.log(`Created course: ${course.title}`);
  })
  .then(() => {
    testSubscriber.courses.push(testCourse);
    testSubscriber.save();
  })
  .then(() => {
    return Subscriber.populate(testSubscriber, "courses");
  })
  .then(subscriber => console.log(subscriber))
  .then(() => {
    return Subscriber.find({
      courses: mongoose.Types.ObjectId(testCourse._id)
    });
  })
  .then(subscriber => console.log(subscriber));

  /* imports the mongoose library and two modules from their respective
  files

  then it declares two varibles that will be used to store the test data

  the it connects to the mongoose database running on local host with the name
  recipie_db

  then it sets the mongoose promise library to the gloval promise library

  it removes all records from the subscriber course collections

  creates a new subscriber with the information

  finds a subscriper with a name that matches

  assigns the found subscriber to the test sub var and logs its information

  creates a new course with tomamtoe land description along with the items

  then assigns the newly created course to testcourse var and logs it's titel

  then it adds the testcourse to the courses array of the test sub and saves it to the 
  test sub to the database

  then it populates the courses array with the actual course objects

  itll log the test subscriber object with the populated courses array

  it'll find all the subs with testcourse in their courses array

  logs the found subscribers with the test course in their courses array

  This script is used to create a subscriber and a course, associate the course
   with the subscriber, and find all subscribers that have the course in their 
   courses array. This is useful for testing and development purposes.*/
