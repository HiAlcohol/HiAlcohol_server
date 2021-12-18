const { request } = require('express');
const express = require('express');
const router = express.Router();
const board = require('../template/board.js');
const board_write = require('../template/board_write.js');
const board_view = require('../template/board_view.js');
const mysql = require('mysql');
const { post } = require('./indexRouter.js');
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
	const body = board_write.HTML();
	response.send(board_write.HTML(body));
});

router.get('/', function(request, response) {
	db.query(`SELECT * from post`, function(err, result){
		if (err) throw err;
		var list = '';
		for (var i = 0; i < result.length; i++) {
			var title = result[i].title;
			var userId = result[i].userId;
			var createdate = dateFormat(result[i].createdate);
			list += board.HOME(title, userId, createdate);
		};
		var body = board.HTML(list);
		response.send(body);
	});
});

router.get('/write', function(request, response) {
	response.send(board_write.HTML(board_write.HTML));
});

router.get('/view', function(request, response){


	db.query(`SELECT * from post`, function(err, result){

		queryData = request.query;

		if (err) throw err;
		db.query(`SELECT * from post WHERE id=?`, [queryData.id], function(err2, result2){

			if (err2) throw err2;

			var title = result2[0].title;
			var user_id = result2[0].userID;
			var date = result2[0].createdate;
			var like_num = 10000; // 좋아요 연결 후 반영하기
			var content = result2[0].content;

			var html = board_view.HTML(title, user_id, date, like_num, content)

			response.send(html);
			
		});


	});


});

module.exports = router; 
