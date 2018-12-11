function initMap() {

	var broadway = {
		info: '<a href="http://www.weeescotland.co.uk/" target="_blank"><strong>WEEE Scotland</strong></a><br>\
					249 Govan Rd,<br> Glasgow G51 1HJ',
		lat: 55.857762,
		long: -4.288380
	};

	var belmont = {
		info: '<a href="http://recycle-glasgow.co.uk/" target="_blank"><strong>Recycle Glasgow</strong></a><br>\
					707 London Rd,<br> Glasgow G40 3AS',
		lat: 55.851839,
		long: -4.221314
	};

  var sheridan = {
    info: '<a href="https://www.glasgow.gov.uk/index.aspx?articleid=15893" target="_blank"><strong>Recycling Centre</strong></a><br>\
          425 Polmadie Rd,<br> Glasgow G42 0PJ',
    lat: 55.835206,
    long: -4.240147
  };

	var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ];

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 13,
		center: new google.maps.LatLng(55.850727, -4.257595),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infowindow = new google.maps.InfoWindow({});

	var marker, i;

	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2]),
			map: map
		});

		google.maps.event.addListener(marker, 'click', (function (marker, i) {
			return function () {
				infowindow.setContent(locations[i][0]);
				infowindow.open(map, marker);
			}
		})(marker, i));
	}
}
