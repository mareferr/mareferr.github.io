// 1. Initialize Firebase




  var config = {
    apiKey: "AIzaSyDq0KHo9QZ4l1WNXsnisMeO5ozVSRdIxhA",
    authDomain: "reservation-site-d9a66.firebaseapp.com",
    databaseURL: "https://reservation-site-d9a66.firebaseio.com",
    projectId: "reservation-site-d9a66",
    storageBucket: "reservation-site-d9a66.appspot.com",
    messagingSenderId: "494185401962"
  };


  firebase.initializeApp(config);

  var database = firebase.database();

// 2. Connect to your Firebase application using your reference URL

// Connect to Database


 $('#reservationForm').on('submit', function (e) {
  // prevent the page from reloading
  e.preventDefault();
  // grab user's comment from input field
  var userInput1 = $('#name').val();
    var userInput2 = $('#day').val();
  // clear the user's comment from the input (for UX purposes)
  $('#name').val('')
   $('#day').val('')
  // create a section for comments data in your db
  var resReference = database.ref('reservationData');
  // use the set method to save data to the comments
  resReference.push({
    name: userInput1,
    day: userInput2
  });
});

 
function getReservations() {
  database.ref('reservationData').on('value', function (results) {
    // Get all comments stored in the results we received back from Firebase
    var allReservations = results.val();
    // Set an empty array where we can add all comments we'll append to the DOM
    var reservationData = [];
    // iterate (loop) through all comments coming from database call
    for (var item in allReservations) {
      // Create an object literal with the data we'll pass to Handlebars
      var context = {
        name: allReservations[item].name,
        day: allReservations[item].day,
        reservationId: item
       };
      // Get the HTML from our Handlebars comment template
      var source = $("#reservation-template").html();
      // Compile our Handlebars template
      var template = Handlebars.compile(source);
      // Pass the data for this comment (context) into the template
      var resListElement = template(context);
      // push newly created element to array of comments
      reservationData.push(resListElement)
     }
    // remove all list items from DOM before appending list items
    $('.reservationData').empty()
    // append each comment to the list of comments in the DOM
    for (var i in reservationData) {
      $('.reservationData').append(reservationData[i])
    }
  });
}

 
// retrieve reservations data when page loads and when comments are added/updated

// When page loads, call getReservations function
getReservations();
//Get user's input and push it into the database

//var submitReservation = function(e) {

  // prevent the page from reloading
  //e.preventDefault();


    // Get input values from each of the form elements
  //var name = $("#reservationName").val();
  //var day = $("#reservationDay").val();


  // Push a new reservation to the database using those values
  //reservationData.push({
   // "name": name,
   // "day": day
  //});


 // remove all list items from DOM before appending list items
   // $('.reservationName').empty()
     //$('.reservationDay').empty()
    // append each comment to the list of reservations in the DOM
    //for (var i in reservationData) {
      //$('.reservations').append([i]);
    //}
     




  // When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id reservationForm, and when the submit
  // event is triggered on that element, call submitReservation.
  $("#reservationForm").submit(submitReservation);

});



//Get reservation data and put it onto "existing reservation section"
//function getReservations() {
  //database.ref('reservationData').on('value', function (results) {
    //var allReservations = results.val();
    //var reservations = [];
    //for (var item in allReservations) {
      //var res = {
        //name: name,
        //day: day
      
      //};
     // var source = $("#reservation-template").html();
      //var template = Handlebars.compile(source);
     // var resListElement = template(res);
      //reservations.push(resListElement)
    }
    // remove all list items from DOM before appending list items
    //$('.reservationName').empty()
     //$('.reservationDay').empty()
    // append each comment to the list of reservations in the DOM
    //for (var i in reservationData) {
      //$('.reservations').append([i])
    //}
  //});
//}







//$('#reservation-name').on('submit', function (e) {

  //e.preventDefault();

  // var userInput = reservationName.val(); 


      //var newListItemHTML = template(userInput);




//});



//$('#reservation-day').on('click', '.delete', function (e) {
  // Get the ID for the comment we want to update
  //var id = $(e.target).parent().data('reservation-day')

  // find comment whose objectId is equal to the id we're searching with
  //var resReference = database.ref('reservation-day/' + reservation-day)


  // Use remove method to remove the comment from the database
  //resReference.remove()
//});
  // Use reference to database to listen for changes in comments data

    // Get all comments stored in the results we received back from Firebase

    // Set an empty array where we can add new comment element

    // Iterate (loop) through all comments coming from database call

      // Create an object literal with the data we'll pass to Handlebars

      // Get the HTML from our Handlebars comment template

      // Compile our Handlebars template

      // Pass the data for this comment (context) into the template

      // Push newly created element to array of comments

    // Remove all list items from DOM before appending list items

    // Append each comment to the list of comments in the DOM



// 4). When page loads, get comments



// 5). Click event to delete comments

  // Find comment whose objectId is equal to the id we're searching with



// 6). Click event to like comments

  // Find comment whose objectId is equal to the id we're searching with

  // Get number of likes from HTML

  // Convert likes to a number and add a like

  // Update likes property in database

// initialize the configuration of map
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 10,
    scrollwheel: false
  });


    // create a new instance of a map
    // configure map with options object
  

    // use Marker constructor to add a marker to map
    var marker = new google.maps.Marker({
  position: {lat: 40.8054491, lng: -73.9654415},
      map: map,
 title: 'Monks Café'
    });
}








 