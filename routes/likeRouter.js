const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
// const home = require('../template/home.js');
const template = require('../template/likes_list');

// prefix: /likes

router.get('/', function(request, response) {
	if (request.user === undefined) {
		response.redirect('/');
	}
	if (request.query.id === undefined) {
		db.query(`SELECT post.id, post.title, post.createdate, count(*) 'count' 
			FROM post, liked 
			WHERE post.id = liked.postId group by post.id`, 
		function(err, result) {
			console.log(result);
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
			var body = template.HOME(list, request.user);
			var html = template.HTML(body);
			response.send(html);
		})
	} else {
		response.redirect('/');
	}
	
});

module.exports = router;