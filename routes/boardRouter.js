const { request } = require('express');
const express = require('express');
const router = express.Router();
const board = require('../template/board.js');
const board_write = require('../template/board_write.js');
const board_view = require('../template/board_view.js');
const mysql = require('mysql');
const { post } = require('./indexRouter.js');
const db = require('../config/db.js');



router.get('/', function(request, response) {
	const body = board.HOME();
	response.send(board.HTML(body));
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
			// var date = date1.toLocaleDateString();
			var like_num = 10000; // 좋아요 연결 후 반영하기
			var content = result2[0].content;

			var html = board_view.HTML(title, user_id, date, like_num, content)

			response.send(html);
			// response.send(result2);
			// console.log(result2[queryData.id])
		});


	});


});

module.exports = router; 
