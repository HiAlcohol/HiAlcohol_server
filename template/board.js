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
            <div class="menuBar">
                <!-- <div class="menuIcon"><img src="menuIcon.png"></div> -->
                <button type="button" class="menuBtn" id="img_btn"><img src="/public/img/menuIcon.png"></button>
                <div class="logo">Hi Alcohol</div>
                <button type="button" class="writeBtn" id="img_btn"><img src="/public/img/writeButton.png"></button>
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