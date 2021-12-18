module.exports = {
	HTML: function(title, user_id, date, like_num, content ) {
		
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
    <title>공지사항</title>
    <link rel="stylesheet" href="/public/css/board_view_css.css">
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
			<div><a href="#">우리동네 주류매장</a></div>
			<div><a href="/myboard">내가 쓴 꿀조합</a></div>
			<div><a href="/likes">좋아요 리스트</a></div>
			<div><a href="/logout">로그아웃</a></div>
		</div>
	</div>
            <div class="hi_alcohol">
                <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
            </div>
            <div class="completion">
                <p></p>
            </div>
            
        </div>
        <div class ="container" >
            <div class="heading">
                <div class="title">
                    <h2>${title}</h2>
                    <div class="user_data">
                        <p>${user_id}</p>
                        <p>  |  </p>
                        <p>${date}</p>
                    </div>
                </div>
                <div class="like">
                    <img src="/public/img/heart.png" alt="heart">
                    <p>${like_num}</p> 
                </div>
            </div>
            <div class="content">${content}</div>
            <div class="option">
                <a href="#">수정</a>
                <p>  |  </p>
                <a href="#">삭제</a>
            </div>
        </div>
        
    </div>
    </body>
</html>
		
		`
	}
    // ,
    // list:function(topics){
    //     // 인자 topics에 main.js template.list(topics)의 topics이 들어옴
        
    //         var list = '<ul>';
    //           var i = 0;
      
    //           while(i < topics.length){
    //             list = list + `<li><a href="/?id=${topics[i].id}">${topics[i].title}</a></li>`;
    //             // topics 각 id와 title 값이 링크 주소와 이름이 됨
    //             i = i + 1;
    //           }
    //           list = list+'</ul>';
    //          return list;
    //     }
};
    
