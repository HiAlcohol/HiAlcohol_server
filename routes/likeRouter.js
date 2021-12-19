const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const template = require('../template/likes_list');

// prefix: /likes

router.get('/', function(request, response) {
	console.log(request.user);
	if(!request.isAuthenticated()){
		response.send('<script>alert("로그인이 필요한 서비스입니다.");\
		location.href="/oauth/kakao";</script>');
	} else {
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
	}
});

router.get('/add', function(req, res) {
	if(!req.isAuthenticated()){
		res.send('<script>alert("로그인이 필요한 서비스입니다.");\
		location.href="/oauth/kakao";</script>');
	} else {
		console.log(req.query);
		if (req.query.postId !== undefined) {

			db.query(`SELECT * FROM liked WHERE postId=? and userId=${req.user.id}`, [req.query.postId], function(err0, result0) {
				if (err0) throw err0;
				if (result0.length === 0) {
					db.query(`SELECT count(*) 'count' FROM 
					(select * from post where post.id=${req.query.postId}) post, liked 
					where post.id=liked.postId`, function(err1, result1) {
						if (err1) throw err1;
						res.json(result1[0]);
					});
				}
				db.query(`INSERT INTO liked VALUES (NULL, ${req.query.postId}, ${req.user.id})`, function(err, result) {
					if (err) {
						db.rollback();
						throw err;
					}
					db.query(`SELECT count(*) 'count' FROM 
					(select * from post where post.id=${req.query.postId}) post, liked 
					where post.id=liked.postId`, function(err2, result2) {
						if (err2) throw err2;
						res.json(result2[0]);
					});
				});
			});
		}
	}
})

router.get('/del', function(req, res) {
	if(!req.isAuthenticated()){
		res.send('<script>alert("로그인이 필요한 서비스입니다.");\
		location.href="/oauth/kakao";</script>');
	} else {
		console.log(req.query);
		if (req.query.postId !== undefined) {
			db.query(`DELETE FROM liked WHERE liked.postId=? and liked.userId=${req.user.id}`, [req.query.postId], function(err, result) {
				if (err) throw err;
				console.log(result);
				db.query(`SELECT count(*) 'count' FROM 
				(select * from post where post.id=${req.query.postId}) post, liked 
				where post.id=liked.postId`, function(err2, result2) {
					if (err2) throw err2;
					console.log(result2);
					res.json(result2[0]);
				})
			})
		}
	}
})

module.exports = router;