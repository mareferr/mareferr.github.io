// 1. Initialize Firebase




  var config = {
    apiKey: "AIzaSyDq0KHo9QZ4l1WNXsnisMeO5ozVSRdIxhA",
    authDomain: "reservation-site-d9a66.firebaseapp.com",
    databaseURL: "https://reservation-site-d9a66.firebaseio.com",
    projectId: "reservation-site-d9a66",
    storageBucket: "reservation-site-d9a66.appspot.com",
    messagingSenderId: "494185401962"
  };

// 2. Connect to your Firebase application using your reference URL

// Connect to Database
  firebase.initializeApp(config);

  var database = firebase.database();




$(document).ready(function ()  
{  
  var startTime="05:00:00"; // or 5:00
 var endTime ="21:00:00";  // or 9:00 
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

if(time > startTime || time < endTime){
 $("#time").html("<h2>Open Now</h2>");
}else{
 $("#time").html("<h2>Closed Now</h2>");
}
});



 $('#reservationForm').on('submit', function (e) {
  // prevent the page from reloading
  e.preventDefault();

    // create a section for reservations data in your db
  var resReference = database.ref('reservationData');

  // if either the name or day field are not empty push the values to the db
if( $('#reservationName').val() != '' && $('#reservationDay').val() != '' ){




  // use the push method to push data to the reservation section
  resReference.push({
  name: $('#reservationName').val(),
        day: $('#reservationDay').val(),

//likes: $('#likes').val()
        
      })
  //reset input forms to empty
      reservationForm.reset();

      // If input fields were submitted empty send error message and don't output any html
    } else {
      alert('Please enter both your name and desired reservation date');
       $("#reservationName").html('') && $("#reservationday").html('');
    }
  });


 //get reservation data to put on web page
function getReservations() {
  database.ref('reservationData').on('value', function (results) {



    // Get all reservations stored in the results we received back from Firebase
    var allReservations = results.val();
    // Set an empty array where we can add all reservations we'll append to the DOM
    var reservationData = [];
    // iterate (loop) through all reservations coming from database call
    for (var item in allReservations) {
      // Create an object literal with the data we'll pass to Handlebars
      console.log(allReservations[item]);
      var context = {
        name: allReservations[item].name,
        day: allReservations[item].day,
        //likes: allReservations[item].likes
       };
      // Get the HTML from our Handlebars comment template
      var source = $("#reservations-template").html();
      // Compile our Handlebars template
      var template = Handlebars.compile(source);
      // Pass the data for this reservation (context) into the template
      var resListElement = template(context);
  // append each comment to the list of reservations in the DOM
      $("#reservations").append(resListElement);

  }
});
}

 


// When page loads, call getReservations function
getReservations();


//$('#reservations').on('click', '.likes', function (e) {

  // Get the ID from the parent of the like button we clicked on


  // find comment whose objectId is equal to the id we're searching with
  //var resReference = database.ref('reservationData/');

  // Get number of likes from HTML
  //var likes = $('#likes').html();

  // Convert likes to a number and add a like
  //likes = parseInt(likes, 10) + 1;

  // Update likes property in database using Firebase's update() method.
  //resReference.update({
    //likes: likes
 // });

//});


$('#reservations').on('click', '.delete', function (e) {
  // Get the ID for the comment we want to update

  e.preventDefault();
 var resReference = database.ref('reservationData/').child;




   resReference.remove(e);
  
}); 









$('#reservations').on('click', '.edit', function (e) {
  // Get the ID for the comment we want to update

  e.preventDefault();


  var resReference = database.ref('reservationData/');



  // Use remove method to remove the comment from the database
  resReference.update();

});

//remove reservation from web page

  // use the push method to push data to the reservation section
 
          
  // Use remove method to remove the reservation from the database
 










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








 