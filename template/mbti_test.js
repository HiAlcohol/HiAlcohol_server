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
    HOME: function(n, q, a1, a2) {
       return `
       <body>
       <header>
       
       </header>
       <main>
           <div><a>${n}/12</a></div><br>
       
           <div class="qna">
               <p id="q">Q${n}. ${q}</p><br><br>
             
               <div class="button"><button id="brn_1" class="btn" onClick="location.href='test'">${a1}</button></div>
               <br>
               <div class="button"><button id="btn_2" class="btn" onClick="location.href='test'">${a2}</button></div>
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