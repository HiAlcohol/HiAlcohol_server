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
	HOME: function(like_list, user) {
		var menu_list = menu.MENU(user);
		return `
		<div class="wrapper">
			<div class="contentWrapper">
				<!-- 메뉴바 -->
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
					<div class="menu_bg"></div>
					<div class="sidebar_menu">
						<div class="close_btn">
							<a href="#">
								<div class="container">
									<img src="public/img/back.png" height="18px" style="text-align: right; display: flexbox;"/>
								</div>
							</a>
						</div>
						${menu_list}
						
					</div>
					<a href="/"><div class="logo" >Hi Alcohol</div></a>
					<div width="45px"></div>
            	</div>
				
			
				<div class="contentList">
					${like_list}
            	</div>
        	</div>
   		</div>
	</nav>
	`
	},
	HEAD: function() {
		return `
		<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <link rel="stylesheet" href="/public/css/board.css">
	<link rel="stylesheet" href="public/css/menu.css" />
	<link rel="stylesheet" href="public/css/home.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="public/js/menu.js" type="text/javascript"></script>
    <style>
        /*모든 요소 적용*/
        @import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
        p{
        font-family: 'Pattaya', sans-serif;
		color: white;
	    }
        @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
        }   
        *:not(i){
        font-family:GmarketSansMedium;
        }
        
        
    </style>
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