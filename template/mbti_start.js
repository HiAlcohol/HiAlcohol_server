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
       <script>
       $("#start").click(function() {
       location.href = "/mbti/test";
     });
     </script>
     
     <body>
       <header>
         <a>당신에게 어울리는 <span style="color:#0BF3BC ">술</span>테스트</a>
       </header>
       <main>
         
         <div class="button"><button id="start" class="btn">테스트 시작</button></div>
       </main>
     
    `
    },
    HEAD: function() {
       return `
       <!DOCTYPE html>
       <html lang="en">
        
       <head>
           <meta charset="UTF-8">
           <title>Hi MBTI Start</title>
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <link rel="stylesheet" href="/public/css/test_start.css" />
           <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
       
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