module.exports = {
	HTML: function(list) {
		const head = this.HEAD();
		const tail = this.TAIL();
        
		return `
		${head}
        <header>
        <!-- hamburger menu -->
        <div class="menu_btn">
            <a href="#">
                <div class="container">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                    <!-- <img src="menuIcon.png" width="40px" /> -->
                </div>
            </a>
        </div>
        <div class="menu_bg"></div>
        <div class="sidebar_menu">
            <div class="close_btn">
                <a href="#">
                    <div class="container">
                        <div
                                class="change bar1 a"
                                style="
                    -webkit-transform: rotate(-45deg) translate(-1px, 1px);
                    transform: rotate(-45deg) translate(-1px, 1px);
                  "
                        ></div>
                        <div
                                class="bar3 change b"
                                style="
                    -webkit-transform: rotate(45deg) translate(-4px, -4px);
                    transform: rotate(45deg) translate(-4px, -4px);
                  "
                        ></div>
                    </div>
                    <!-- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjMuOTU0IDIxLjAzbC05LjE4NC05LjA5NSA5LjA5Mi05LjE3NC0yLjgzMi0yLjgwNy05LjA5IDkuMTc5LTkuMTc2LTkuMDg4LTIuODEgMi44MSA5LjE4NiA5LjEwNS05LjA5NSA5LjE4NCAyLjgxIDIuODEgOS4xMTItOS4xOTIgOS4xOCA5LjF6Ii8+PC9zdmc+"> -->
                </a>
            </div>
            <div class="menu_wrap">
                <div><a href="#">꿀조합 게시판</a></div>
                <div><a href="#">우리동네 주류매장</a></div>
                <div><a href="#">내가 쓴 꿀조합</a></div>
                <div><a href="#">좋아요 리스트</a></div>
                <div><a href="#">로그아웃</a></div>
            </div>
        </div>
    
        <h2 style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">
            Hi Alcohol
        </h2>
    
    </header>
    <main>
    
        <!-- 검색창 -->
        <form class="search" method="get" action=search_list>
            <input type="text" name="keyword" placeholder="술 이름을 입력해주세요.">
            <button type="submit">
                <i class="fas fa-search" style="font-size: 20px;"></i>
            </button>
        </form>
        
        <!-- 검색 결과 리스트(반복될 요소) -->
        ${list}

        <div class="list" id="list1">
            <a href="">내 마음대로 주</a>
            <div class="recipe" id="btn1">></div>
            <br><br>
            <div class="input">
                <div>체리</div>
                <div>맥콜</div>
                <div>사이다</div>
                <div>소주</div>
                <div>깔라만씨 토닉워터</div>
                <div>토닉워터</div>
                <div>토닉워터</div>
            </div>  
        </div>
       
        
    </main>
    <!--    모달창(칵테일 레시피)     -->
    <div id="modal-overlay"></div>
    <div id="modal">
        <div class="modal-window">
            <div class="title">
                <h2 style="color: white">내 마음대로 주</h2>
                <div class="modal_close">X</div>
            </div>
    
            <div class="content">
                <div class="input">
                    <div>재료</div>
                    <div>맥콜</div>
                    <div>사이다</div>
                </div>
    
                <h3 style="color: white">소주 5 : 맥주 1 : 사이다 0.1</h3>
                <ol>
                    <li>소주를 한 병 넣는다.</li>
                    <li>소주를 두 병 넣는다.</li>
                    <li>소주를 세 병 마시면서 쉰다.</li>
                    <li>소주를 네 병 넣는다.</li>
                    <li>소주를 다섯 병 넣고 섞어서 원샷한다.</li>
                </ol>
            </div>
    
        </div>
    </div>
     
		${tail}
		`
	},
	HOME: function() {
		return `
	
	`
	},
	HEAD: function() {
		return `
		<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="public/css/search_list.css">
    <link rel="stylesheet" href="public/css/menu.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="public/js/modal.js" type="text/javascript"></script>

    <title>Hi Alcohol List</title>

</head>

<body>
		`;
	},
	TAIL: function() {
		return `
		</body>
</html>
		`
	}, 
    LIST: function(result) {
        var i = 0;

        var list = '';
        var name = `
        <div class="list" id="list1">
        <a href="">${result[i].cocktail}</a>
        <div class="recipe" id="btn1">></div>
        <br><br>`;
    //     var mat = ` 
    //     <div class="input">
    //     <div>${result[i].cocktail}</div></div>
    // </div>`;

        while(i<result.length){
            

            list = list + 
                `
                <div class="list" id="list1">
                <a href="">${result[i].cocktail}</a>
                <div class="recipe" id="btn1">></div>
                <br><br>`+ 
                ` 
                <div class="input">
                    <div>${result[i].material}</div></div>
                </div>`;
            i = i + 1;
        }

        return list;
    }
};