module.exports = {
	HTML: function(title, user_id, date, like_num, content, id, user) {
		
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
    <title>게시글 상세보기 페이지</title>
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
								<img src="public/img/back.png" height="18px" style="text-align: right; display: flexbox;"/>
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
                <a href="/board/edit?id=${id}">수정</a>
                <p>  |  </p>
                <a href="/board_delete_process?id=${id}">삭제</a>
            </div>
        </div>
        
    </div>
    </body>
</html>
		
		`
	}
 
};
    
