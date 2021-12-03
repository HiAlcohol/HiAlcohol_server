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
		<div class="board_wrap">
        <div class="main_title">
            <div class="exit">
                <a href="board-list.html"><img class="x_icon" src="/public/img/x_icon.png"></a>
            </div>
            <div class="hi_alcohol">
                <a href="home.html" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
            </div>
            <div class="completion">
                <a href="board_view.html" style="color: #0BF3BC;">완료</a>
            </div>
            
        </div>
        <div class ="container" >
            <div class="title">
                <input type="text" placeholder=" 제목" >
            </div>
            <div class="Contents">
                <textarea placeholder="    
 내용 입력"></textarea>
            </div>
        
        </div>
	</nav>
	`
	},
	HEAD: function() {
		return `
		<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항</title>
    <link rel="stylesheet" href="/public/css/board_write_css.css">
</head>
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
      *:not(i) {
        font-family: GmarketSansMedium;
      }
      
</style>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>공지사항</title>
    <link rel="stylesheet" href="/public/css/board_write_css.css">
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