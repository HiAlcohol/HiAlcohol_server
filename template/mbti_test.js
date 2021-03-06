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
       <a href="/" style="font-family: 'Pattaya', sans-serif; font-size:25px;color: #0bf3bc">Hi Alcohol</a>
   
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
           <title>HiAlcohol MBTI TEST</title>
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
       <div class="progress_bar">
       <div class="progress" style="width:${Number(qid)*8.3}%;"></div>
      </div>
      <div class="blank"></div>

       <div class="number"><a>${qid} / 12</a></div><br>
       <div class="qna">
       <p id="q">Q${qid}. ${q}</p><br><br>
       <form class="my" method="get" action=test>

          <input type="hidden" name="q" value="${qid}">
          <div class="button"><button type="submit" name="a" value="1"  id="btn_1" class="btn">${a1}</button></div>
          <br><br>
          <div class="button"><button type="submit" name="a" value="2" id="btn_2" class="btn">${a2}</button></div>
          
          </form>
    </div>
       `
    }
 };