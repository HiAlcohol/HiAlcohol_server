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
    HOME: function(data, des) {
       return `
       <script>
       $("#restart").click(function() {
       location.href = "test_start.html";
   });
   
   $('.copy').click(function(){	
   var link= $('#link');
   link.css('display','block').select();
   document.execCommand("Copy");
   alert('결과 링크가 복사되었습니다.');	
   return false;
   });
   
   // // 카카오 공유를 위한 임시코드
   // Kakao.init('b305a1173710e4ff765e09b5a62e314c'); 
   // function link_kakao() {
   //   var sh_title = "나와 어울리는 칵테일은?";
   //   var sh_desc = "당신에게 어울리는 칵테일을 찾아보세요.\nHi Alcohol"; 
   //   Kakao.Link.sendDefault({ 
   //     objectType: 'feed', 
   //     content: {
   //      title: sh_title, description: sh_desc, 
   //      imageUrl: "../img/cocktail.png", 
   //      link: { mobileWebUrl: "모바일 링크 url", 
   //      webUrl: "PC 링크 url" 
   //     } 
   //   }, 
   // }); 
   // }
   
   
   </script>
   
       <body>
         <div class="result">
           <a>당신에게 어울리는 술은</a><br>
           <img src="/public/img/cocktail.png"><br>
           <a><span style="font-size: 30px">${data.cocktail}</span></a>
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
           <div class="button"><button id="restart" class="btn"> 처음으로</button></div><br>
           
           <div class="copy"><button id="copy" class="btn">링크 복사</button></div>
           <div class="share"><img src="/public/img/bt_kakao.png"><br>공유하기</div>
          
           
           <input type="text" value="복사될 URL c경로" id="link" style="display:none;">
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