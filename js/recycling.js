<script>
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 55.837914, lng: -4.246540};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBa-x9TainBhx5VH8ivtp1UVodtRSsyKe8&callback=initMap">
    </script>
