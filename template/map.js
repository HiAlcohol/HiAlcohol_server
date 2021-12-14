module.exports = {
	HTML: function(body) {
		const head = this.HEAD();
		const tail = this.TAIL();
		return `
		${head}
		${body}
		${tail}
		`
	},
	HOME: function() {
		return `
        <body>
        <main>
        <div id="map" style="width:700px;height:800px;"></div>
        <script>
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
    
            var map = new kakao.maps.Map(container, options);
        </script>
        </main>
	`
	},
	HEAD: function() {
		return `
		<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3a0965c75cdc0b99976416f11247b105"></script>

    <link rel="stylesheet" href="public/css/map.css" />

	<title>Hi Alcohol Map</title>

  </head>
  <body>
		`;
	},
	TAIL: function() {
		return `
		</body>
</html>
		`
	}
};