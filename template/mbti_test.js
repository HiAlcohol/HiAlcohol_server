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
    HOME: function(qna) {
       return `
       <body>
 
       <header>
       
       </header>
       <main>
           ${qna}
           
       
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
           <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
       </head>
   
       `;
    },
    TAIL: function() {
       return `
       </body>
      
 </html>
       `
    }, QNA: function(qid, q, a1, a2){
       return `
       <div><a>${qid}/12</a></div><br>
       <div class="qna">
       <p id="q">Q${qid}. ${q}</p><br><br>
       <form class="my" method="get" action=test>

          <input type="hidden" name="q" value="1">
          <div class="button"><button type="submit" name="a" value="1"  id="btn_1" class="btn">${a1}</button></div>
          <br>
          <div class="button"><button type="submit" name="a" value="2" id="btn_2" class="btn">${a2}</button></div>
          
          </form>
      
         <br><br>
   
    </div>
       `
    }
 };