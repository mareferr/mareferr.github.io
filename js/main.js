// initialize the configuration of map
function initMap() {
  // use JS's built-in Navigator to get user's lat/lng coordinates
  navigator.geolocation.getCurrentPosition(function(position) {
    // create an object to store lat/lng data
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
       // create a new instance of a map
    // configure map with options object
    var map = new google.maps.Map(document.getElementById('map'), {
      center: userLocation,
      zoom: 10,
      scrollwheel: false
    });

    // use Marker constructor to add a marker to map
    var marker = new google.maps.Marker({
      position: userLocation,
      map: map,
      title: 'User Location'
    });

  });
}

initMap();