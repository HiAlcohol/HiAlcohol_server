const menu = require('./menu.js');

module.exports = {
	HTML: function(name, rate, content, user) {
		var menu_list = menu.MENU(user);
		return `

        <!DOCTYPE html>
<html lang="ko">
<style>
    @import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");
      p {
        font-family: "Pattaya", sans-serif;
        color: white;
      }
      @font-face {
        font-family: "GmarketSansMedium";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
          format("woff");
        font-weight: normal;
        font-style: normal;
      }
      
</style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hi Alcohol recipe</title>
    <link rel="stylesheet" href="/public/css/recipe.css">
    <link rel="stylesheet" href="/public/css/menu.css">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      crossorigin="anonymous"
    />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="/public/js/menu.js" type="text/javascript"></script>
    <!-- <link rel="stylesheet" href="menu.css"> -->
</head>
<body>
<div class="board_wrap">
        <div class="main_title">
            <!-- hamburger menu -->
            <div class="menu_btn">
            <a href="#">
                <div class="container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </a>
        </div>
        <div class = "hi_alcohol">
            <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
        </div>
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
        

        <div class="recipe">
            <div>&nbsp${name}&nbsp</div>
            <br><br><br>
            <p>- 비율 -</p>
            <h2>${rate}</h2>
            <br><br>
            <h2>${content}</h2>
        </div>
    
        </div>

    </div>
    </body>
</html>
		
		`
	}
};
    