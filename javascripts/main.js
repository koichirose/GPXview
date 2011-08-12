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
		//var	fileLayer = new google.maps.KmlLayer(
			////$(this).attr('href'),
			//'http://dl.dropbox.com/u/757380/1313082730-07589-173.2.237.122.kml',
			//{
				//map:map
			//});
var ctaLayer = new google.maps.KmlLayer('http://dl.dropbox.com/u/757380/20110810_172133_001.gpx');
  ctaLayer.setMap(map);
		e.preventDefault();
	});
});
