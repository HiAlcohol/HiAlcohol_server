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
    HOME: function( ) {
       return `     
     <body>
       <header>
	   	<div>
		   <a href="/" style="font-family: 'Pattaya', sans-serif; font-size:30px;color: #0bf3bc">Hi Alcohol</a>
		</div>
         <a>당신에게 어울리는 <span style="color:#0BF3BC ">술</span>테스트</a>
       </header>
       <main>
         <img class="img" src="/public/img/cocktail.png" alt="cocktailImg" width="150"/>
         <div class="button"><button id="start" class="btn"  onClick="location.href='mbti/test'">테스트 시작</button></div>
       </main>
    `
    },
    HEAD: function() {
      return `
      <!DOCTYPE html>
      <html lang="ko">
        
      <head>
         <meta charset="UTF-8">
         <title>Alcohol MBTI Test | Hi Alcohol </title> 
		 <meta property=”og:type” content=”website”>
		 <meta property=”og:title” content=”칵테일 mbti 테스트”>
        <meta name= "description" content="칵테일로 알아보는 당신의 성격 유형 테스트">

         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <link rel="stylesheet" href="/public/css/test_start.css" />
		 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8219658684250722"
     crossorigin="anonymous"></script>
      </head>

       `;
    },
    TAIL: function() {
       return `
       </body>
 </html>
       `
    }
 };