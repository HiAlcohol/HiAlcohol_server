module.exports = {
	HTML: function(title, content, id) {
		
		return `
        <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>글 작성 페이지</title>
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
		<div class="board_wrap">
        <form action="/board_update_process?id=${id}" method="post" >
        <div class="main_title">
            <div class="exit">
                <a href="/board"><img class="x_icon" src="/public/img/x_icon.png"></a>
            </div>
            <div class="hi_alcohol">
                <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
            </div>
            <div class="completion">
                <input type="submit" value= "완료" style="background-color: #242424; color: #0BF3BC; font-size: 15px; border: 0;
                outline: 0;">
            </div>
            
        </div>
        <div class ="container" >
            <div class="title">
                <input type="text" name="title" placeholder=" 제목" value ="${title}">
            </div>
            <div class="Contents">
                <textarea name="content" placeholder="    
 내용 입력">${content}</textarea>
            </div>
        
        </div>
        </form>
	</nav>
	</body>
</html>
		`
	}
	
};