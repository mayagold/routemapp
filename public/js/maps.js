let map, poly;

//init ans show initial map on div id=map
window.initMap = function() {
//    todo: pass this as a param from the controller code
// const initMap = function() { // to call from controler code
console.log('location', google.loader.ClientLocation);
  //let loclat = google.loader.ClientLocation.latitude;
  //let loclon = google.loader.ClientLocation.longitude;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.7796, lng: -78.6382},
    // center: {lat: google.loader.ClientLocation.latitude,  lng:google.loader.ClientLocation.longitude}
    zoom: 7
  });
}

//show map route on div id=map
const showMap = function(gpxFile) {
  if (poly) {
    poly.setMap(null);
  }
  //make ajax call to get / read the gpx file
  $.ajax({
    type: "GET",
    url: gpxFile,
    dataType: "xml",
    success: function(xml) {
  	var points = [];
    let minlat, maxlat = 0;
    let minlon, maxlon = 0;

    // get the bounds of the route for display of a map that
    // encapsulates the route
    $(xml).find("bounds").each(function() {
      maxlat = $(this).attr("maxlat");
      maxlon = $(this).attr("maxlon");
      minlat = $(this).attr("minlat");
      minlon = $(this).attr("minlon");
    });

    let bounds = new google.maps.LatLngBounds({lat: parseFloat(minlat), lng: parseFloat(minlon)},{lat: parseFloat(maxlat), lng: parseFloat(maxlon)});

    // get all the points that make up thr Route
    $(xml).find("gpxx\\:rpt").each(function() {
  	  var lat = $(this).attr("lat");
  	  var lon = $(this).attr("lon");
  	  var latLng = new google.maps.LatLng(lat, lon);
      //optionally add markers to the routes
      // this will add a bubble marker to ALL the points
      // !! not desireable but a way to see how many poits there are
      // var marker = new google.maps.Marker({
      //   position: latLng,
      //   map: map
      // });
  	  points.push(latLng);
  	  bounds.extend(latLng);
  	});

    //create the Polyline (trace the points for the route) onto the map
  	poly = new google.maps.Polyline({
  	  // use your own style here
  	  path: points,
      geodesic: true,
  	  strokeColor: "#FF00AA",
  	  strokeOpacity: .7,
  	  strokeWeight: 4
  	});

    //clean up previous Polyline
    // map.clear();
    //add the poly to the map
  	poly.setMap(map);

  	// fit bounds to track
    // apply the bounds to the map to be displayed
  	map.fitBounds(bounds);

    }
  });
}
