// code adapted from https://www.mapbox.com/mapbox.js/example/v1.0.0/markers-with-image-slideshow/

<<<<<<< HEAD
var map = L.mapbox.map('map', 'vulibrarygis.l369lc2l')
// Construct a bounding box for this map that the user cannot
// move out of
var southWest = L.latLng(52.4934, 13.45867),
northEast = L.latLng(52.545311, 13.328738),
bounds = L.latLngBounds(southWest, northEast);

=======
// Construct a bounding box for this map that the user cannot
// move out of
var southWest = L.latLng(52.4934, 13.45867),
  northEast = L.latLng(52.545311, 13.328738),
  bounds = L.latLngBounds(southWest, northEast);
>>>>>>> FETCH_HEAD

var map = L.mapbox.map('map', 'vulibrarygis.l2hm993n', {
  maxBounds: bounds,
  minZoom: 13,
  maxZoom: 18
});

// Add custom popup html to each marker
map.markerLayer.on('layeradd', function(e) {
<<<<<<< HEAD
	var marker = e.layer;
	var feature = marker.feature;
	var images = feature.properties.images
	var slideshowContent = '';

	for(var i = 0; i < images.length; i++) {
		var img = images[i];

		slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
		img[0] +
		'<div class="caption">' + img[1] + '</div>' +
		'</div>';
	}

	// Create custom popup content
	var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
	'<h2>' + feature.properties.title + '</h2>' +
	'<div class="slideshow">' +
	slideshowContent +
	'</div>' +
	'<div class="cycle">' +
	'<a href="#" class="prev">&laquo; Previous</a>' +
	'<a href="#" class="next">Next &raquo;</a>' +
	'</div>'
	'</div>';

	// http://leafletjs.com/reference.html#popup
	marker.bindPopup(popupContent,{
		closeButton: false,
		maxWidth: 200,
		autoPan: true,
		keepInView: true
	});
=======
  var marker = e.layer;
  var feature = marker.feature;
  var images = feature.properties.images
  var slideshowContent = '';

  for (var i = 0; i < images.length; i++) {
    var img = images[i];

    slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') +
      '">' +
      img[0] +
      '<div class="caption">' + img[1] + '</div>' +
      '</div>';
  }

  // Create custom popup content
  var popupContent = '<div id="' + feature.properties.id +
    '" class="popup">' +
    '<h2>' + feature.properties.title + '</h2>' +
    '<div class="slideshow">' +
    slideshowContent +
    '</div>' +
    '<div class="cycle">' +
    '<a href="#" class="prev">&laquo; Previous</a>' +
    '<a href="#" class="next">Next &raquo;</a>' +
    '</div>'
  '</div>';

  // http://leafletjs.com/reference.html#popup
  marker.bindPopup(popupContent, {
    closeButton: false,
    maxWidth: 200,
    autoPan: true,
    keepInView: true
  });
>>>>>>> FETCH_HEAD
});

// Add features to the map
map.markerLayer.setGeoJSON(geoJson);

// This example uses jQuery to make selecting items in the slideshow easier.
// Download it from http://jquery.com
$('#map').on('click', '.popup .cycle a', function() {
<<<<<<< HEAD
	var $slideshow = $('.slideshow'),
	$newSlide;

	if ($(this).hasClass('prev')) {
		$newSlide = $slideshow.find('.active').prev();
		if ($newSlide.index() < 0) {
			$newSlide = $('.image').last();
		}
	} else {
		$newSlide = $slideshow.find('.active').next();
		if ($newSlide.index() < 0) {
			$newSlide = $('.image').first();
		}
	}

	$slideshow.find('.active').removeClass('active').hide();
	$newSlide.addClass('active').show();
	return false;
=======
  var $slideshow = $('.slideshow'),
    $newSlide;

  if ($(this).hasClass('prev')) {
    $newSlide = $slideshow.find('.active').prev();
    if ($newSlide.index() < 0) {
      $newSlide = $('.image').last();
    }
  } else {
    $newSlide = $slideshow.find('.active').next();
    if ($newSlide.index() < 0) {
      $newSlide = $('.image').first();
    }
  }

  $slideshow.find('.active').removeClass('active').hide();
  $newSlide.addClass('active').show();
  return false;
>>>>>>> FETCH_HEAD
});

map.setView([52.519593, 13.405671], 13);
