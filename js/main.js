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

$(document).ready(function ()  
{  
  var startTime="17:00:00"; // or 5:00
 var endTime ="21:00:00"  // or 9:00 
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

if(time >startTime || time < endTiime){
 $("#time").html("Open Now");
}else{
 $("#time").html("Closed Now");
}
});

getTime();


 $('#reservationForm').on('submit', function (e) {
  // prevent the page from reloading
  e.preventDefault();
  // grab user's comment from input field
  var userInputName = $('#reservationName').val();
    var userInputDay = $('#reservationDay').val();


            $('#name').html(e.userInputName);
              $('#day').html(e.userInputDay);
    
  // clear the user's comment from the input (for UX purposes)
  $('#reservationName').val('');
   $('#reservationDay').val('');
  // create a section for comments data in your db
  var resReference = database.ref('reservationData');
  // use the set method to save data to the comments
  resReference.push({
    name: userInputName,
    day: userInputDay
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
      reservationData.push(resListElement);

    // remove all list items from DOM before appending list items
    $('.reservationData').empty();
    // append each comment to the list of comments in the DOM
    for (var i in reservationData) {
      $('.reservationData').append(reservationData[i])
    }
  };
}

 


// When page loads, call getReservations function
getReservations();

$('.reservations').on('click', '.delete', function (e) {
  // Get the ID for the reservation we want to delete
  var id = $(e.target).parent().data('id')

  // find reservation whose objectId is equal to the id we're searching with
  var resReference = database.ref('reservationData/' + id)

//remove reservation from web page
            $(this).html('');
          
  // Use remove method to remove the comment from the database
  resReference.remove()
});











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








 