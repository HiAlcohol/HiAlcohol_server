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
            <div class="menu_wrap">
                <div><a href="#">꿀조합 게시판</a></div>
                <div><a href="#">우리동네 주류매장</a></div>
                <div><a href="#">내가 쓴 꿀조합</a></div>
                <div><a href="#">좋아요 리스트</a></div>
                <div><a href="#">로그아웃</a></div>
            </div>
        </div>
    
        <div class="hi_alcohol">
        <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
        </div>
    
    </header>
    <main>
    
        <!-- 검색창 -->
        <form class="search" method="get" action=search_list>
            <input type="text" name="keyword" placeholder="술 이름을 입력해주세요.">
            <button type="submit">
                <i class="fas fa-search" style="font-size: 20px;"></i>
            </button>
        </form>
        
        ${list}
       
    </main>
    
     
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


        while(i<result.length){
			var j = 0;
			var materials = ``;
            while (j < result[i].materials.length) {
				materials += `
                    <div>${result[i].materials[j]}</div>
				`
				j++;
			}

            list = list + 
                `
                <div class="list" id="list1">
                <a href="/search_list/recipe?id=${result[i].id}">${result[i].cocktail}</a>
               
                <br><br>`+ 
                ` 
                <div class="input">
                    ${materials}</div>
                </div>`;
            i = i + 1;
        }

        return list;
    }
};