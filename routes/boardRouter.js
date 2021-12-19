const express = require('express');
const router = express.Router();
const board = require('../template/board.js');
const board_write = require('../template/board_write.js');
const board_view = require('../template/board_view.js');
const mysql = require('mysql');
const { post } = require('./indexRouter.js');
const board_edit = require('../template/board_edit.js');
const db = require('../config/db.js');

function dateFormat(date) {
	var newdate = new Date(date);
	let month = newdate.getMonth() + 1;
	let day = newdate.getDate();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;

	return newdate.getFullYear() + '.' + month + '.' + day + ' ';
}; 

router.get('/write', function(request, response) {
	const body = board_write.HOME();
	response.send(board_write.HTML(body));
});

router.post('/', function(request, response) {
	var sql = '';
	console.log(request)
  
	if (request.body.order === 'likes') {
		var selected = `
			<option value="date">최신순</option>
			<option value="likes" selected>좋아요순</option>`;
		sql = `SELECT post.*, (SELECT count(*) FROM liked WHERE liked.postId = post.id ) AS likes FROM post order by likes desc`;
	} else if (request.body.order === 'date') {
		var selected = `
			<option value="date" selected>최신순</option>
			<option value="likes" >좋아요순</option>`;
		sql = `SELECT post.*, (SELECT count(*) FROM liked WHERE liked.postId = post.id ) AS likes FROM post order by createdate desc`;
	}
  
	db.query(sql, function(err, result){
		if (err) throw err;
    
    	db.query(`SELECT * from liked WHERE liked.userId=${request.user.id}`,function(err2, result2){
			if (err2) throw err2;
		  var list = '';

			for (var i = 0; i < result.length; i++) {
				var id = result[i].nickname;
				var postId = result[i].postId;
				var title = result[i].title;
				var createdate = dateFormat(result[i].createdate);
				var likes = result[i].count;
				var check = false;

				for (var j = 0; j < result2.length; j++) {
					check = (result[i].postId == result2[j].postId);
				};

				likeMode = check ? "del" : "add";
				likeImg = check ? "/public/img/heart_fill.png" : "/public/img/heart_outline.png";
				
				list += board.HOME(id, postId, title, createdate, likes, likeMode, likeImg);
			};
    
		var head = board.HEAD(selected);
		var body = board.HTML(head, list);
		response.send(body);
	});
})

router.get('/', function(request, response) {
	var sql = '';
	console.log(request.query)
	if (request.query.order === 'likes') {
		sql = `SELECT post.*, (SELECT count(*) FROM liked WHERE liked.postId = post.id ) AS likes FROM post order by likes desc`;
	} else if (request.query.order === 'date') {
		sql = `SELECT post.*, (SELECT count(*) FROM liked WHERE liked.postId = post.id ) AS likes FROM post order by createdate desc`;
	} else {
		sql = `SELECT post.*, (SELECT count(*) FROM liked WHERE liked.postId = post.id ) AS likes FROM post order by createdate desc`;
	}
	db.query(sql, function(err, result){
		if (err) throw err;
		var list = '';

		for (var i = 0; i < result.length; i++) {
			var id = request.userID?.id;
			var postId = result[i].id;
			var title = result[i].title;
			var userId = result[i].userId;
			var createdate = dateFormat(result[i].createdate);
			var likes = result[i].likes;

			list += board.HOME(id, postId, title, userId, createdate, likes);
		};
		var body = board.HTML(undefined ,list);
		response.send(body);
	});
});

router.get('/write', function(request, response) {
	response.send(board_write.HTML(board_write.HTML));
});

router.get('/view', function(request, response){


		queryData = request.query;

		db.query(`SELECT * from post WHERE id=?`, [queryData.id], function(err2, result2){

			if (err2) throw err2;

			var title = result2[0].title;
			var user_id = result2[0].userID;
			var date = result2[0].createdate;
			// var date = date1.toLocaleDateString();
			var like_num = 10000; // 좋아요 연결 후 반영하기
			var content = result2[0].content;

			var html = board_view.HTML(title, user_id, date, like_num, content)

			response.send(html);
			// response.send(result2);
			// console.log(result2[queryData.id])
		});


});

router.get('/edit', function(request, response){


		queryData = request.query;

		db.query(`SELECT * from post WHERE id=?`, [queryData.id], function(err2, result2){

			if (err2) throw err2;

			var title = result2[0].title;
			var userId = result2[0].userId;
			// var date = result2[0].createdate;
			// var like_num = 10000; // 좋아요 연결 후 반영하기
			var content = result2[0].content;


			db.query(`SELECT nickname FROM user WHERE id = ?;`, [userId], function(err3, result3){
				
				if(!request.isAuthenticated()){
					response.send('<script>alert("로그인이 필요한 서비스입니다.");\
					location.href="/oauth/kakao";</script>');
				}else{
					if( userId != request.user.id){
						response.send('<script>alert("접근 권한이 없습니다.");\
						location.href="/board";</script>');
					}else{
						// var user_id = result3[0].nickname;

						var html = board_edit.HTML(title, content, queryData.id)
						response.send(html);
					}
				}
				
			})	
		});
});


module.exports = router; 
