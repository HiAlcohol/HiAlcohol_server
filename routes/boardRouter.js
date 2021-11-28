const express = require('express');
const router = express.Router();
const board = require('../template/board.js');
const board_write = require('../template/board_write.js');
const db = require('../config/db');

function dateFormat(date) {
	let month = date.getMonth() + 1;
	let day = date.getDate();

	month = month >= 10 ? month : '0' + month;
	day = day >= 10 ? day : '0' + day;

	return date.getFullYear() + '.' + month + '.' + day + ' ';
}

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
	const body = board_write.HOME();
	response.send(board_write.HTML(body));
});

module.exports = router;