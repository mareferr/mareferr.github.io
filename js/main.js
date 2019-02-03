// 1. Initialize Firebase




  //var config = {
    //apiKey: "AIzaSyDq0KHo9QZ4l1WNXsnisMeO5ozVSRdIxhA",
    //authDomain: "reservation-site-d9a66.firebaseapp.com",
    //databaseURL: "https://reservation-site-d9a66.firebaseio.com",
    //projectId: "reservation-site-d9a66",
    //storageBucket: "reservation-site-d9a66.appspot.com",
    //messagingSenderId: "494185401962"
  //};

  //var database = firebase.database();

  //firebase.initializeApp(config);


// 2. Connect to your Firebase application using your reference URL

// Connect to Database


 

  // By default, a form submit reloads the DOM which will subsequently reload all our JS

  // After we have initialized Firebase and created a reference to our database…
// When the comment form is submitted (the user hits enter)
//$('#reservation-form').on('submit', function (e) {
  // prevent the page from reloading
 // e.preventDefault();
  // grab user's comment from input field
  //var reservationData = $('#reservation-day').val();

  // clear the user's comment from the input (for UX purposes)
  //$('#reservation-day').val('')
  // create a section for comments data in your db
  //var reservations = database.ref('reservation-day');
  // use the set method to save data to the comments
  //reservations.push({
    //reservation-day: reservation-day

  //});
//});



  // To avoid this, we use preventDefault()

  // Grab user's comment from input field

  // Clear the user's comment from the input (for UX purposes)

  // Create a section for comments data in your db

  // Use the set method to save data to the comments




// 3. Retrieve comments data when page loads and when comments are added/updated
//function getReservations() {
  //database.ref('comments').on('value', function (results) {
    //var allReservations = results.val();
    //var reservations = [];
    //for (var item in allReservations) {
      //var reserve = {
        //reservation: allReservations[item].reservation,
      
        //reservation-day: item
      //};
      //var source = $("#reservation-template").html();
      //var template = Handlebars.compile(source);
      //var reservationListElement = template(reservation);
      //reservations.push(reservationListElement)
    //}
    // remove all list items from DOM before appending list items
    //$('#reservation-day').empty()
    //$('#reservation-name').empty()
    // append each reservation to the list of reservations in the DOM
    //for (var i in reservations) {
      //$('#reservation-day ul').append(reservation-day[i]);

       //$('#reservation-day2 li').html(reservation-day.val());
    //    $('#reservation-name2 li').html(reservation-name.val());
   // }
  //});
//


$('#reservation-form').on('click', function (e) {

  e.preventDefault();

  var day = $("#reservation-day").val();
  var name = $("#reservation-name").val();

    $("#reservationDay").html(day);
     $("#reservationName").html(name);
});

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








 