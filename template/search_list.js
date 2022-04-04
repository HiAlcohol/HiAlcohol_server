const menu = require('./menu.js');
const axios = require('axios');

module.exports = {
	HTML: function(list, user) {
		const head = this.HEAD();
		const tail = this.TAIL();
        var menu_list = menu.MENU(user);
        
		return `
		${head}
        <header>
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
        
        <a href="/" style="font-family: 'Pattaya', sans-serif; color: #0bf3bc">Hi Alcohol</a>
        <div class="blank"></div>
    </div>
    </header>
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/css/search_list.css">
    <link rel="stylesheet" href="public/css/menu.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="/public/js/menu.js" type="text/javascript"></script>

    <title>Hi Alcohol List</title>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8219658684250722"
	crossorigin="anonymous"></script>
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
				<button onClick=modal(${result[i].id})>${result[i].cocktail}</button>
                <!--<a href="/search_list/recipe?id=${result[i].id}">${result[i].cocktail}</a>-->
               
                <br><br>`+ 
                ` 
                <div class="input">
                    ${materials}</div>
                </div>`;
            i = i + 1;
        }
		list += `
		<script>
		function modal(id) {
//			axios.get('/search_list/recipe/' + id)
//				.then(function(response) {
//					console.log(response);
//				})
//				.catch(function(error) {
//					console.log(error);
//				})
//		}
		</script>`;

        return list;
    }
};
