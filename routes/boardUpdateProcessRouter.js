const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const sanitizeHtml = require('sanitize-html');

router.post('/', function(request, response) {
	const body = request.body;
	queryData = request.query;

	let title = sanitizeHtml(body.title);
	let content = sanitizeHtml(body.content);
	let now = new Date();

	db.query(`UPDATE post SET title=?, content=?, updatedate=? WHERE id=?`, [title, content, now, queryData.id], function(err, result){
		if (err) console.error("err : " + err);
		response.redirect('/board/view?id=' + queryData.id);
	})
});


module.exports = router;