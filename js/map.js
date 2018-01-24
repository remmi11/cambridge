var hybridMap = new L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNpdGFicWJqYjAwdzUydHM2M2g0MmhsYXAifQ.oO-MYNUC2tVeXa1xYbCIyw", {
  attribution: "&copy <a href=https://www.mapbox.com/about/maps>Mapbox</a> &copy <a href=https://www.digitalglobe.com/>DigitalGlobe</a> &copy <a href=http://www.openstreetmap.org/copyright>OpenStreetMap</a>",
  maxZoom: 20,
  maxNativeZoom: 18
});

var streetsLayer = new L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNpdGFicWJqYjAwdzUydHM2M2g0MmhsYXAifQ.oO-MYNUC2tVeXa1xYbCIyw", {
  attribution: "&copy <a href=https://www.mapbox.com/about/maps>Mapbox</a> &copy <a href=http://www.openstreetmap.org/copyright>OpenStreetMap</a>&nbsp<a href=https://www.mapbox.com/map-feedback/>| Improve this map</a> ",
  maxZoom: 20,
  maxNativeZoom: 18
});


var cambridge = [34.9861062, -101.9272416]
var center = new L.LatLng(34.98544, -101.92072);
var map = new L.Map('map', {
  center: center,
  zoom: 15,
  attributionControl: true,
  zoomControl: false,
});

map.scrollWheelZoom.disable();

var baselayers = {
  "Hybrid": hybridMap,
  "Streets": streetsLayer

};
map.addLayer(streetsLayer)

// Add back when imagery is updated
// L.control.layers(baselayers).addTo(map);


//<!-- var home = L.AwesomeMarkers.icon({ -->
//<!-- icon: 'star', -->
//<!-- markerColor: 'orange' -->
//<!-- }); -->


marker = L.marker(cambridge).addTo(map);
//<!-- , { -->
//<!-- icon: home -->
//<!-- }).addTo(map); -->

map.setMaxBounds(map.getBounds());

marker.bindPopup("<b>Cambridge House!</b><br>Only a 2 minute drive from WT.").openPopup();

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }
// map.on('click', onMapClick);