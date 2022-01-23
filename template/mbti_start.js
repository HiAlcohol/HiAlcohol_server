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
         <a>당신에게 어울리는 <span style="color:#0BF3BC ">술</span>테스트</a>
       </header>
       <main>
         
         <div class="button"><button id="start" class="btn"  onClick="location.href='mbti/test'">테스트 시작</button></div>
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