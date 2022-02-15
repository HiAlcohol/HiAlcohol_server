const menu = require('./menu.js');

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
    HOME: function(user, location, a) {
      var menu_list = menu.MENU(user);
       return `
      <header>
       <div class="header">
       
         <div class="menu_btn">
            <a href="#">
               <div class="container">
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
               </div>
            </a>
         </div>
         
         <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
         <div class="blank"></div>
      </div>
      </header>
      <div class="menu_bg"></div>
      <div class="sidebar_menu">
         <div class="close_btn">
            <a href="#">
               <div class="container">
                  <img src="/public/img/back.png" height="18px" style="text-align: right; display: flexbox;"/>
               </div>
            </a>
         </div>
            
         ${menu_list}

      </div>
         
         <main>
         <!-- 우리동네 주류매장 -->
         <div>
         <form class="mymap" method="get" action=map>
         <input type="text" name="location" placeholder="궁금한 장소를 입력해주세요">
         <button type="submit">
                보러가기
            </button>
     </form>
     <div id="map"></div>
     </div>
 
         <script>
         var infowindow = new kakao.maps.InfoWindow({zIndex:1});

         if (navigator.geolocation) {
         
            navigator.geolocation.getCurrentPosition(function(position) {
             
                var geocoder = new kakao.maps.services.Geocoder();
             
                var lat = position.coords.latitude,
                lon = position.coords.longitude; 
             
                var coord = new kakao.maps.LatLng(lat, lon);
                var callback = function(result, status) {
                    if (status === kakao.maps.services.Status.OK) {
                        console.log(result[0].address.address_name);
                    }
                };
             
                geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
           
                var locPosition = new kakao.maps.LatLng(lat, lon), 
                mapContainer = document.getElementById('map'), 
                mapOption = {
                    center: locPosition,
                    level: 5 
                };
             
                var map = new kakao.maps.Map(mapContainer, mapOption);
                var center = map.getCenter();
        
                // new kakao.maps.InfoWindow({ position: center, map: map, content: '현재 위치'});
                var ps = new kakao.maps.services.Places(); 
                
               ${a}
            
            function displayMarker(place) {
         
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(place.y, place.x) 
                });
      
            kakao.maps.event.addListener(marker, 'click', function() {
             
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
                // console.log(place.place_name);
                });
            }
             
            });
            }

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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link rel="stylesheet" href="/public/css/map.css" />
     <link rel="stylesheet" href="/public/css/menu.css" />
    <link rel="stylesheet" href="/public/css/footer.css"/>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
     <script src="/public/js/menu.js" type="text/javascript"></script>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b305a1173710e4ff765e09b5a62e314c&libraries=services"></script>
    <script>
             
     </script>
     <title>Hi Alcohol Map</title>
 
   </head>
   <body>
       `;
    },
    TAIL: function() {
       return `
       </body>
      <footer>
         <p>developer: 
         <a href="https://github.com/AYoungSn">@AYoungSn</a>
         <a href="https://github.com/alreadynyeong">@alreadynyeong</a>
         </p>
      </footer>
 </html>
       `
    },
    MAP: function(location){
        var a='';
        if(typeof(location)=='undefined' || location.length==0){
            a = a+ `  ps.keywordSearch('주류유통', placesSearchCB, {
                location: center, 
                sort: kakao.maps.services.SortBy.DISTANCE
            }); 
         
            function placesSearchCB (data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
                    for (var i=0; i<data.length; i++) {
                        displayMarker(data[i]);
                    }
                }
            }`;
        }
        else{
            a = a+ ` ps.keywordSearch('${location}주류유통', placesSearchCB); 
        
            function placesSearchCB (data, status, pagination) {
                if (status === kakao.maps.services.Status.OK) {
            
                    var bounds = new kakao.maps.LatLngBounds();
            
                    for (var i=0; i<data.length; i++) {
                        displayMarker(data[i]);    
                        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                    }       
            
                    map.setBounds(bounds);
                } 
            }`
        }
        return a;
    }
 };