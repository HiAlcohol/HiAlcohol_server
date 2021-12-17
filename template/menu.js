module.exports = {
	MENU: function(user) {
		var menu_list =`
		<div class="menu_wrap">
			<div><a href="/board">꿀조합 게시판</a></div>
			<div><a href="/map">우리동네 주류매장</a></div>
		`;
		if (user != undefined) {
			menu_list += `
			<div><a href="/myboard">내가 쓴 꿀조합</a></div>
			<div><a href="/likes">좋아요 리스트</a></div>
			<div><a href="/logout">로그아웃</a></div>
			`
		}
		menu_list += `</div>`
		return menu_list;
	}
}