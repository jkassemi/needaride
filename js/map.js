google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {

  /* position Amsterdam */
  var latlng = new google.maps.LatLng(39.7578395,-105.0070954);

  var mapOptions = {
    center: latlng,
    scrollwheel: false,
    zoom: 9,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    panControl: false,
    streetViewControl: false,
    zoomControl: false,
    draggable: false
    };

  var marker = new google.maps.Marker({
    position: latlng,
    url: '/',
    animation: google.maps.Animation.DROP
  });

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  marker.setMap(map);

};
