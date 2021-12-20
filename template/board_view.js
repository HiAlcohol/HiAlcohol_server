const menu = require('./menu')

module.exports = {
	HTML: function(title, user_id, date, like_num, content, id, user, check, likeImg, postId, buttonMode) {
		const menu_list = menu.MENU(user);
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
					${menu_list}
				</div>
            <div class="hi_alcohol">
                <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
            </div>
            <div class="completion">
                <p></p>
            </div>
            
        </div>
        <div class ="container post" >
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
                    <a href="/likes/${check}?postId=${postId}&redirect_uri=/board/view?id=${postId}">
                    <button id="img_btn" class="likebtn" onclick="didTapButton(); " ${buttonMode}><input type="image" id="likeImg${postId}" src=${likeImg} ${buttonMode}></button>
                    </a>
                    <div id=likes>${like_num}</div> 
                </div>
                <script>
                function didTapButton() {
                    var on = "http://localhost:3000/public/img/heart_fill.png";  
                    var off = "http://localhost:3000/public/img/heart_outline.png";
                    const image = document.getElementById("likeImg");
                    const likes = document.getElementById("likes");
                    console.log(image.src);
    
                    if (image.src == off) {
                        console.log("off -> on");
                        image.src = on;
    
                        likes.innerText = String(parseInt(likes.innerText) + 1);
                    } else {
                        console.log("on -> off");
                        image.src = off;
    
                        likes.innerText = String(parseInt(likes.innerText) - 1);
                    }
                };
            </script>

            </div>
            <pre class="content">${content}</pre>
            <div class="option">
			<div></div>
                <a href="/board/edit?id=${id}">수정</a>
                <p>  |  </p>
                <form action="/board_delete_process?id=${id}" method="post" >
                <div class="del">
                    <input type="submit" id="del" name="del" value="삭제">
                </div>
                </form>
				<div></div>
            </div>
        </div>
        
    </div>
    </body>
</html>
		
		`
	}
 
};
    
