const db = require("../config/db");

module.exports = {
    HTML: function(head, body) {
		if (head === undefined) {
			head = this.HEAD();
		}
        const tail = this.TAIL();
        return `
        ${head}
        ${body}
        ${tail}
        `
    },
    HOME: function(id, postId, title, userId, createdate, likes) {
        // function didTapButton(inputId, inputPostId) {
        //     var on = "/public/img/heart_fill.png";  
        //     var off = "/public/img/heart_outline.png";

        //     console.log("이게 실행이 되는거신가?");

        //     });
        // };
        return `
        <div class="content">
            <div class="subject">
                <p>${title}</p>
                <div class="info"><span>${userId} </span> | <span> ${createdate}</span></div>
            </div>
            <div class="like">
            <button type="button" class="likebtn" id="img_btn" onclick="didTapButton();"><img src="/public/img/heart_outline.png"></button>
                <div>${likes}</div>
            </div>
        </div>

        <script>
            function didTapButton() {
                console.log("눌림")  
            };
        </script>
        `;
    },
    HEAD: function(selected) {
		if (selected === undefined) {
			selected = `<option value="date">최신순</option>
			<option value="likes">좋아요순</option>`;
		}
        return `
        <head>
        <link rel="stylesheet" href="/public/css/menu.css" />
        <link rel="stylesheet" href="/public/css/home.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="public/js/menu.js" type="text/javascript"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        crossorigin="anonymous"
        />
        <title>Hi Alcohol</title>
        <link rel="stylesheet" href="/public/css/board.css" />
        </head>

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

        <body>
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
								<img src="/public/img/back.png" height="18px" style="text-align: right; display: flexbox;"/>
							</div>
						</a>
					</div>
					<div class="menu_wrap">
						<div><a href="/board">꿀조합 게시판</a></div>
						<div><a href="/map">우리동네 주류매장</a></div>
						<div><a href="/myboard">내가 쓴 꿀조합</a></div>
						<div><a href="/likes">좋아요 리스트</a></div>
						<div><a href="/logout">로그아웃</a></div>
						// login 시에만 보이게 할 예정
					</div>
				</div>
                <a href="/"><div class="logo">Hi Alcohol</div></a>
				<div class = "writeBtn">
					<a href="/board/write"><img class="writeBtn" src="/public/img/writeButton.png"></a>
				</div>
            </div>
            <div class="dropdown">
            <form action="/board" method="post" class="sort">
            <label for="singer">정렬</label>
            <select id="singer" name="order" required onChange="this.form.submit()">
                ${selected}
            </select>
        </form>
        </div>
            <div class="contentList">
            
           
            
            
        `;
    },
    TAIL: function() {
        return `
        </div>
        </div>
        </div>
        </body>
</html>
        `
    }
};