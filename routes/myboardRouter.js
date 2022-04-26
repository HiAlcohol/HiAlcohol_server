const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const boardlist = require('../template/likes_list.js');

// /myboard

function dateFormat(date) {
    var newdate = new Date(date);
    let month = newdate.getMonth() + 1;
    let day = newdate.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return newdate.getFullYear() + '.' + month + '.' + day + ' ';
}; 


router.get('/', function(request, response) {
	if(!request.isAuthenticated()){
		response.send('<script>alert("로그인이 필요한 서비스입니다.");\
		location.href="/oauth/kakao";</script>');
	} else {
		db.query(`SELECT post.id, post.title, post.createdate, count(liked.id) 'count' 
			FROM (SELECT * FROM post WHERE post.userId=${request.user.id}) post left join liked 
			on post.id = liked.postId group by post.id`, function(err, result) {

			if (result.length == 0){
				response.send('<script>alert("작성한 글이 없습니다.");\
			location.href="/";</script>');
			}else{
				if (err) throw err;
			
				var list ='';

				
			
				for (var i = 0;i < result.length; i++) {
					var date = dateFormat(result[i].createdate);
					list += `
					<div class="content">
						<a href='/board/view?id=${result[i].id}'>
							<div class="subject">
								<p>${result[i].title}</p>
								<div class="info"><span>${request.user.nickname}</span> | <span>${date}</span></div>
							</div>
						</a>
							<div class="like">
								<button type="button" class="likebtn" id="img_btn"><img src="/public/img/heart_outline.png"></button>
								<div class="cnt">${result[i].count}</div>
							</div>
					</div>
					`
				}
				const body = boardlist.HOME(list, request.user);
				response.send(boardlist.HTML(body));
			}

			
			
		})
	}
});

module.exports = router;