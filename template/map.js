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
        <header>
        <!-- hamburger menu -->
        <div class="menu_btn">
            <a href="#">
                <div class="container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <!-- <img src="menuIcon.png" width="40px" /> -->
                </div>
            </a>
        </div>
        <div class="menu_bg"></div>
        <div class="sidebar_menu">
            <div class="close_btn">
                <a href="#">
                    <div class="container">
                        <div
                                class="change bar1 a"
                                style="
                    -webkit-transform: rotate(-45deg) translate(-1px, 1px);
                    transform: rotate(-45deg) translate(-1px, 1px);
                  "
                        ></div>
                        <div
                                class="bar3 change b"
                                style="
                    -webkit-transform: rotate(45deg) translate(-4px, -4px);
                    transform: rotate(45deg) translate(-4px, -4px);
                  "
                        ></div>
                    </div>
                    <!-- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuOTU0IDIxLjAzbC05LjE4NC05LjA5NSA5LjA5Mi05LjE3NC0yLjgzMi0yLjgwNy05LjA5IDkuMTc5LTkuMTc2LTkuMDg4LTIuODEgMi44MSA5LjE4NiA5LjEwNS05LjA5NSA5LjE4NCAyLjgxIDIuODEgOS4xMTItOS4xOTIgOS4xOCA5LjF6Ii8+PC9zdmc+"> -->
                </a>
            </div>
            <div class="menu_wrap">
                <div><a href="#">꿀조합 게시판</a></div>
                <div><a href="#">우리동네 주류매장</a></div>
                <div><a href="#">내가 쓴 꿀조합</a></div>
                <div><a href="#">좋아요 리스트</a></div>
                <div><a href="#">로그아웃</a></div>
            </div>
        </div>
        <h2 style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">
            Hi Alcohol
        </h2>
    </header>

        <body>
        <main>
        <div id="map"></div>
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
	
    
    <link rel="stylesheet" href="public/css/map.css" />
    <link rel="stylesheet" href="public/css/menu.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=3a0965c75cdc0b99976416f11247b105"></script>
	<script src="public/js/menu.js" type="text/javascript"></script>
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