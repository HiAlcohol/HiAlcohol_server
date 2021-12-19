const menu = require('./menu.js');

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
	HOME: function(user, result) {
		// console.log('HOME: ', user);
		var cockName = result[0].cocktail;
		var cockId = result[0].id;
		var nickname = '';
		var profile_image = '';
		var menu_list = menu.MENU(user);
		if (user === undefined) {
			nickname = '로그인하기';
			profile_image = '/public/img/loginIcon.png';
		} else {
			nickname = user.nickname;
			profile_image = user.profile_image;
		}
		return `
		
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
	crossorigin="anonymous"
	/>
	<title>Hi Alcohol</title>
	<!-- css, js 경로 수정-->
	<link rel="stylesheet" href="public/css/home.css" />
	<style>
	@import url("https://fonts.googleapis.com/css2?family=Pattaya&display=swap");
	p {
		font-family: "Pattaya", sans-serif;
		color: white;
	}
	@font-face {
		font-family: "GmarketSansMedium";
		src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
		format("woff");
		font-weight: normal;
		font-style: normal;
	}
	*:not(i) {
		font-family: GmarketSansMedium;
	}
	</style>

    <script
      src="https://kit.fontawesome.com/1f362cab2c.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
		<div class="header">
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
	<div class="login_btn">
		<a href="/oauth/kakao">
		<div class="container">
			<p class="login">${nickname}</p>
			<img src="${profile_image}" width="25px" />
		</div>
		</a>
	</div>
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
	<nav class="homebar">
	<header>
		<a href="/"
		style="font-family: 'Pattaya', sans-serif; color: #0bf3bc"
		>Hi Alcohol
		</a>
		<span style="color: #0bf3bc">
		<i class="fas fa-glass-martini-alt" style="font-size: 30px"></i>
		</span>
	</header>
	<form class="homebar__search" method="get" action=search_list>
      <input type="text" name="keyword" placeholder="예시 : 보드카">
      <button type="submit" onclick=" location.href='search_list.js">
         <i class="fas fa-search" style="font-size: 20px;"></i>
      </button>
   </form>
	<div class="homebar__recommend">
		<p style="color: white">오늘의 술 추천</p>
		<br>
		<a href="/search_list/recipe?id=${cockId}">${cockName} ></a>
		<br />
		<img src="/public/img/cocktail.png" alt="cocktailImg" width="100" height="100" style="padding: 20px;" />
	</div>
	</nav>
	`
	},
	HEAD: function() {
		return `
		<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	
	<link rel="stylesheet" href="/public/css/menu.css" />
	<link rel="stylesheet" href="/public/css/home.css" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script src="/public/js/menu.js" type="text/javascript"></script>
		`;
	},
	TAIL: function() {
		return `
		</body>
</html>
		`
	}
};