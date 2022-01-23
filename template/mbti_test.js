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
       
       </header>
       <main>
           <div><a>1/12</a></div><br>
       
           <div class="qna">
               <p id="q">Q1. 술집에서 멍하니 있는 당신의 머리속은?</p><br><br>
             
               <div class="button"><button id="brn_1" class="btn" onClick="location.href='test'"> 무한한 상상의 나래 속으로</button></div>
               <br>
               <div class="button"><button id="btn_2" class="btn" onClick="location.href='test'"> 집.. 어떻게 가지?</button></div>
           </div>
           <br><br>
           <div class="move">
           <div class="prev">이전</div>
           <div class="next">다음</div>
           </div>
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
           <title>Hi MBTI</title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="/public/css/test.css" />
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