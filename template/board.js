const menu = require('./menu')


module.exports = {
    HTML: function(head, body) {
        if (head === undefined) {
            head = this.HEAD();
        }
        const tail = this.TAIL();
        return `
        ${head}
        ${body}
        ${tail}
        `
    },
    HOME: function(id, postId, title, createdate, likes, check, likeImg) {
        return `
        <div class="content">
            <a href='/board/view?id=${postId}'>
                <div class="subject">
                    <p>${title}</p>
                    <div class="info"><span>${id}</span> | <span> ${createdate}</span></div>
                </div>
            </a>
            <div class="like">
            <a href="/likes/${check}?postId=${postId}">
            <button id="img_btn" class="likebtn" onclick="didTapButton('${postId}');"><img id="likeImg${postId}" src=${likeImg}></button>
            </a>
                <div id="likes${postId}">${likes}</div>
            </div>
        </div>
        <script>
            function didTapButton(postId) {
                var on = "http://localhost:3000/public/img/heart_fill.png";  
                var off = "http://localhost:3000/public/img/heart_outline.png";
                const image = document.getElementById("likeImg" + postId);
                const likes = document.getElementById("likes" + postId);
                console.log(image.src);

                if (image.src == off) {
                    console.log("off -> on");
                    image.src = on;

                    likes.innerText = String(parseInt(likes.innerText) + 1);
                } else {
                    console.log("on -> off");
                    image.src = off;

                    likes.innerText = String(parseInt(likes.innerText) - 1);
                }
            };
        </script>
        `;
    },
    HEAD: function(user, selected) {
        if (selected === undefined) {
            selected = `<option value="date">최신순</option>
            <option value="likes">좋아요순</option>`;
        }
        const menu_list = menu.MENU(user);
        return `
        <head>
        <link rel="stylesheet" href="/public/css/menu.css" />
        <link rel="stylesheet" href="/public/css/home.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
        <script src="public/js/menu.js" type="text/javascript"></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
        crossorigin="anonymous"
        />
        <title>Hi Alcohol</title>
        <link rel="stylesheet" href="/public/css/board.css" />
        </head>

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
        </style>

        <body>
        <div class="wrapper">
        <div class="contentWrapper">
            <!-- 메뉴바 -->
            <div class="header">
                <div class="menu_btn">
                    <a href="#">
                    <div class="container">
                        <div class="bar1"></div>
                        <div class="bar2"></div>
                        <div class="bar3"></div>
                    </div>
                    </a>
                </div>
                <div class="menu_bg"></div>
                <div class="sidebar_menu">
                    <div class="close_btn">
                        <a href="#">
                            <div class="container">
                                <img src="/public/img/back.png" height="18px" style="text-align: right; display: flexbox;"/>
                            </div>
                        </a>
                    </div>
                    ${menu_list}
                </div>
                <a href="/"><div class="logo">Hi Alcohol</div></a>
                <div class = "writeBtn">
                    <a href="/board/write"><img class="writeBtn" src="/public/img/writeButton.png"></a>
                </div>
            </div>
            <div class="dropdown">
            <form action="/board" method="post" class="sort">
            <label for="singer">정렬</label>
            <select id="singer" name="order" required onChange="this.form.submit()">
                ${selected}
            </select>
        </form>
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
