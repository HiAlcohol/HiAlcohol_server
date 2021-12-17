module.exports = {
	POSTS: function() {
		return `
                <!-- 게시물 샘플 시작 (반복될 요소)-->
                <div class="content">
                    <div class="subject">
                        <p>퀴즈1</p>
                        <div class="info"><span>박지웅</span> | <span>2021.11.11</span></div>
                    </div>
                    <div class="like">
                        <button type="button" class="likebtn" id="img_btn"><img src="heart_outline.png"></button>
                        <div class="cnt">123</div>
                    </div>
                </div>
                <!-- 게시물 샘플 끝 (반복될 요소)-->
		`;
	}
};