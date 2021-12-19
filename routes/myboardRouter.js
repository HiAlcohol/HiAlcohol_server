const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const boardlist = require('../template/likes_list.js');

// /myboard

router.get('/', function(request, response) {
	if (request.user === undefined) {
		response.redirect('/');
	}
	db.query(`SELECT post.id, post.title, post.createdate, count(liked.id) 'count' 
	FROM (SELECT * FROM post WHERE post.userId=${request.user.id}) post left join liked 
	on post.id = liked.postId group by post.id`, function(err, result) {
		if (err) throw err;
		console.log(result)
		var list ='';
		console.log(result[0].createdate)
		for (var i = 0;i < result.length; i++) {
			list += `
			<div class="content">
				<a href='/board/view?id=${result[i].id}'>
					<div class="subject">
						<p>${result[i].title}</p>
						<div class="info"><span>${request.user.nickname}</span> | <span>${result[i].createdate}</span></div>
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
	})
	
});

module.exports = router;