function initialize() {
  var nyLayer = new google.maps.KmlLayer(
	  'http://www.searcharoo.net/SearchKml/newyork.kml',
	  {  suppressInfoWindows: true,
		 map: map});
 
  google.maps.event.addListener(nyLayer, 'click', function(kmlEvent) {
	var text = kmlEvent.featureData.description;
	showInContentWindow(text);
  });
 
  function showInContentWindow(text) {
	var sidediv = document.getElementById('content_window');
	sidediv.innerHTML = text;
  }
}

var myLatlng, myOptions, map;
var layersArray = [];
$(document).ready(function(){
	myLatlng = new google.maps.LatLng(40.65, -73.95);
	myOptions = {
		zoom: 12,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  };
	map = new google.maps.Map(
	  document.getElementById("map_canvas"),
	  myOptions);
	//initialize();
	$("#side").load("files.php");
	$("#side a").live('click', function(e){
		clearOverlays();
		var	fileLayer = new google.maps.KmlLayer(
			$(this).attr('href'),
			{
				map:map
			});
		layersArray.push(fileLayer);
//var ctaLayer = new google.maps.KmlLayer($(this).attr('href'));
  //ctaLayer.setMap(map);
		e.preventDefault();
	});
});

// Removes the overlays from the map, but keeps them in the array
function clearOverlays() {
  if (layersArray) {
    for (i in layersArray) {
      layersArray[i].setMap(null);
    }
  }
}
