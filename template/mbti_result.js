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
    HOME: function(data, des, cockid) {
       return `
       <body>
	   <header>
	       <a href="/" style="font-family: 'Pattaya', sans-serif; font-size:30px;color: #0bf3bc">Hi Alcohol</a>
       </header>
         <div class="result">
           <a>당신에게 어울리는 술은</a><br>
           <img src="/public/img/cocktail.png"><br>
           <a><span style="font-size: 30px">${data.cocktail}  <a href="/search_list/recipe?id=${cockid}" >></a></span></a>
         
           <div class="exp" style="color: white">
             <ul>
               ${des}
             </ul>
           </div>
         </div>
       
         <div class="match">
             <div class="best">
               최고의 궁합<br>
               <a>< ${data.best} ></a>
             </div>
             <div class="worst">
               최악의 궁합<br>
               <a>< ${data.worst} ></a>
             </div>
         </div>
       
         <main>
         
         <div class="button"><button id="restart" class="btn" onClick="location.href='../mbti' "> 처음으로</button></div><br>
         
         <button onclick="copy()" id = "link">링크복사</button><br>

         <div class="share"><a id="kakao-link-btn" href="javascript:sendLink()">
            <img src="/public/img/bt_kakao.png"/>
          </a></div>
           
           <div class="site">
           <span style= "color:white;">더 많은 술을 추천받고싶다면?<br>술 조합 추천 웹사이트</span>
           
           <a href="/" style="font-family: 'Pattaya', sans-serif; font-size:30px;color: #0bf3bc">Hi Alcohol</a><br><br>
           </div>
           
         </main>
        
    `
    },
    HEAD: function() {
       return `
       <!DOCTYPE html>
       <html lang="en">
       <head>
        <meta charset="UTF-8">
        <title>Hi MBTI Result</title>
	      <link rel="stylesheet" href="/public/css/test_result.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
        <script src="/public/js/share.js" type="text/javascript"></script>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        
       </head>    
       
       `;
    },
    TAIL: function(data) {
       return `
       </body>


 </html>
       `
    },
    DES: function() {
      var i = 0;
      var description = '';

      while(i<5)  {
        description += ` <li>${data.description[i]}</li>`
        i = i+1;
      }
      return description;
    }
 };