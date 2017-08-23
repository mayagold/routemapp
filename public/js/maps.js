console.log('maps.js')

// var iterations = 0;
// function check_compat() {
//     if (iterations === 75) {
//         alert('Failed to load Google Maps API. Clear your browser cache, open Google Maps then try again.');
//         return;
//     }
//     if (typeof GBrowserIsCompatible === 'undefined') {
//         // It isn't loaded, schedule the next check.
//         setTimeout(check_compat, 200);
//         iterations++;
//     } else {
//         if (GBrowserIsCompatible()) {
//             mapReadyFn();
//         } else {
//             alert('Sorry, your browser is not supported.');
//         }
//     }
// }

let map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.7796, lng: -78.6382},
    zoom: -1
  });
  // check_compat()
  // track = {filename: "../../Burbon Trail.gpx", color: "#0000ff", width: 4};
  // addGPXTrack(map, track, 1, 9, "Start of Tour");
  $.ajax({
    type: "GET",
    url: "http://localhost:3000/routes/Spearfish.gpx",
    dataType: "xml",
    success: function(xml) {
  	var points = [];
    let minlat, maxlat = 0;
    let minlon, maxlon = 0;

    $(xml).find("bounds").each(function() {
      maxlat = $(this).attr("maxlat");
      maxlon = $(this).attr("maxlon");
      minlat = $(this).attr("minlat");
      minlon = $(this).attr("minlon");
    });
    console.log('minlat', minlat);
    console.log('minlon', minlon);

    var bounds = new google.maps.LatLngBounds({lat: parseFloat(minlat), lng: parseFloat(minlon)},{lat: parseFloat(maxlat), lng: parseFloat(maxlon)});

  	$(xml).find("gpxx:rpt");
    // $(this).find("gpxx:rpt")
    // console.log('this', $(xml).find("gpxx\\:rpt"));
    // console.log('this', $(xml).find("gpxx" + $.escapeSelector( ":WaypointExtension")));
    // console.log('this.length', $(this).children);
    // console.log('rtept',$(this).find("rtept").lenght);
    $(xml).find("gpxx\\:rpt").each(function() {
      console.log('gpxx:rpt.length', $(this).length);
  	  var lat = $(this).attr("lat");
      console.log('lat',lat);
  	  var lon = $(this).attr("lon");
      console.log(lon,'lon');
  	  var latLng = new google.maps.LatLng(lat, lon);
      // var marker = new google.maps.Marker({
      //   position: latLng,
      //   map: map
      // });
  	  points.push(latLng);
  	  bounds.extend(latLng);
  	});

  	var poly = new google.maps.Polyline({
  	  // use your own style here
  	  path: points,
      geodesic: true,
  	  strokeColor: "#FF00AA",
  	  strokeOpacity: .7,
  	  strokeWeight: 4
  	});

  	poly.setMap(map);

  	// fit bounds to track
  	map.fitBounds(bounds);

    }
  });
}

// Function to add track data from a GPX file to a map.
// map: pointer to a GMap2 object
// track: pointer to a GPXTrack object
// centerandzoom: optional boolean variable
// zoomlevel: optional number, 0..19 for supported levels, -1 to auto compute
//             best-fit zoom level
// startmsg: optional string to be placed in an info bubble at initial track
//           point
// function addGPXTrack(map, track, centerandzoom, zoomlevel, startmsg) {
//   // if (GBrowserIsCompatible()) {
//     GDownloadUrl(track.filename, function(data, responseCode) {
//       if (responseCode == 200) {
//         var xml = GXml.parse(data);
//         if (xml) {
//
//           if (centerandzoom) {
//             var bounds = xml.getElementsByTagName("bounds");
//             if (bounds && bounds.length) {
// console.log('minLat', bounds[0]);
// console.log('minLon', bounds[0]);
//               var gllbounds = new GLatLngBounds(new GLatLng(parseFloat(bounds[0].getAttribute("minlat")),
//                 parseFloat(bounds[0].getAttribute("minlon"))),
//                 new GLatLng(parseFloat(bounds[0].getAttribute("maxlat")),
//                 parseFloat(bounds[0].getAttribute("maxlon"))));
//               if (zoomlevel && zoomlevel != -1) {
//                 map.setCenter(gllbounds.getCenter(), zoomlevel);
//               } else {
//                 map.setCenter(gllbounds.getCenter(), map.getBoundsZoomLevel(gllbounds));
//               }
//             }
//           }
//
//           var trkpts = xml.documentElement.getElementsByTagName("gpxx:rpt");
//           if (trkpts && trkpts.length) {
//             var glatlngs = new Array(trkpts.length);
//             for (var i = 0; i < trkpts.length; i++) {
//               glatlngs[i] = new GLatLng(parseFloat(trkpts[i].getAttribute("lat")),
//                                         parseFloat(trkpts[i].getAttribute("lon")));
//             }
//
//             if (track.alpha) {
//               var polyline = new GPolyline(glatlngs, track.color, track.width, track.alpha);
//             } else {
//               var polyline = new GPolyline(glatlngs, track.color, track.width);
//             }
//             map.addOverlay(polyline);
//
//             if (startmsg && startmsg.length) {
//               map.openInfoWindow(glatlngs[0], document.createTextNode(startmsg));
//             }
//           } else {
//             alert("GPX file contains no track points.");
//           }
//         } else {
//           alert("Could not load GPX document " + filename);
//         }
//       } else if (responseCode == -1) {
//         alert("Data request timed out.");
//       } else {
//         alert("Error loading file \"" + filename + "\"");
//       }
//     });
//   // }
// }

// map.setCenter(new google.maps.LatLng(35.7796,78.6382))
//

console.log('finished maps.js')
