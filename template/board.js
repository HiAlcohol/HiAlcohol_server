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
    HOME: function(title, userId, createdate) {
        return `
        <div class="content">
            <div class="subject">
                <p>${title}</p>
                <div class="info"><span>${userId}  </span> | <span>  ${createdate}</span></div>

            </div>
            <div class="like">
            <button type="button" class="likebtn" id="img_btn"><img src="/public/img/heart_outline.png"></button>
                <div class="cnt">조아요 개수</div>
            </div>
        </div>
        `;
    },
    HEAD: function() {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                /*모든 요소 적용*/
                @import url('https://fonts.googleapis.com/css2?family=Pattaya&display=swap');
                p{
                font-family: 'Pattaya', sans-serif;
                color: white;
                }
                @font-face {
                font-family: 'GmarketSansMedium';
                src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
                font-weight: normal;
                font-style: normal;
                }   
                *:not(i){
                font-family:GmarketSansMedium;
                }
                
                * {
                    color: white;
                }
                body {
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                }
                /*개별 적용*/
                .wrapper {
                    width: 500px;
                    height: 100%;
                    min-height: 100vh;
                    background-color: rgb(51, 51, 51);
                    margin: auto;
                }
                .menuBar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
        
                    width: 100%;
                    height: 80px;

        
                    padding: 20px;
                    box-sizing: border-box;
        
                    position: absolute;
                    position: sticky;
                    top: 0;
                    
                    background-color: rgb(51, 51, 51);
                }
                
                /* menu */
                .menuIcon {
                    width: 30px;
                    height: 30px;
                    background-color: teal;
                }
                .writeIcon {
                    width: 30px;
                    height: 30px;
                    background-color: teal;
                }
        
                /*content*/
                .contentList{
                    padding: 20px;
                    box-sizing: border-box;
                    margin-bottom: 30px;
                }
                .content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .content p {
                    margin: 0;
                }
                .subject {
                    font-size: 16px;
                }
                
                .info, .info span {
                    color: gray;
                    font-size: 13px;
                    margin-top: 14px;
                }
                
                .likebtn {
                    background-color: #242424;
                    border: none;
                    align-items: center;
                }

            </style>
        </head>
        <body>

        <div class="wrapper">
        <div class="contentWrapper">
        <!-- 메뉴바 -->
        <div class="menuBar">
            <div class="menuIcon"></div>
            <div class="logo">logo</div>
            <div class="writeIcon"></div>
            </div>
            <div class="contentList">
        `;
    },
    TAIL: function() {
        return `
        </div>
        </div>
        </div>
        </body>
</html>
        `
    }
};