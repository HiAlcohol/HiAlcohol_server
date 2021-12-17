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
		<div class="wrapper">
        <div class="contentWrapper">
            <!-- 메뉴바 -->
            <div class="header">
                <!-- <div class="menuIcon"><img src="menuIcon.png"></div> -->
                <!-- <button type="button" class="menuBtn" id="img_btn"><img src="/public/img/menuIcon.png"></button> -->
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
					<div class="menu_wrap">
						<div><a href="/board">꿀조합 게시판</a></div>
						<div><a href="#">우리동네 주류매장</a></div>
						<div><a href="/myboard">내가 쓴 꿀조합</a></div>
						<div><a href="/likes">좋아요 리스트</a></div>
						<div><a href="/logout">로그아웃</a></div>
						// login 시에만 보이게 할 예정
					</div>
				</div>
                <div class="logo">Hi Alcohol</div>
                <button type="button" class="writeBtn" id="img_btn"><img class="writeBtn" src="/public/img/writeButton.png" width="40px"></button>
                <!-- <div class="writeIcon"><img src="writeButton.png"></div> -->
            </div>
            <div class="contentList">
                <!-- 게시물 샘플 시작 (반복될 요소)-->
                <div class="content">
                    <div class="subject">
                        <p>퀴즈1</p>
                        <div class="info"><span>박지웅</span> | <span>2021.11.11</span></div>
                    </div>
                    <div class="like">
                        <button type="button" class="likebtn" id="img_btn"><img src="/public/img/heart_outline.png"></button>
                        <div>123</div>
                    </div>
                </div>
                <!-- 게시물 샘플 끝 (반복될 요소)-->
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