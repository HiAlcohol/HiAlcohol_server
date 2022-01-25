const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const sanitizeHtml = require('sanitize-html');

router.post('/', function(request, response) {
	const body = request.body;
	console.log(body);
	let title = sanitizeHtml(body.title);
	let content = sanitizeHtml(body.content);
	var userID = request.user.id;

	if (!request.isAuthenticated()) {
		response.status(401).send({error: '로그인이 필요한 서비스입니다.'});
	} else if (sanitizeHtml(body.content).length === 0) {
		response.status(400).send({status: 4000, error: "스크립트를 제외한 길이가 0이므로 요청을 처리할 수 없습니다."});
	}else {
		db.query(`INSERT INTO post (id, userID, title, content, createdate, updatedate) VALUES (?,?,?,?,now(),now())`, [null, userID, title, content], function(err, result){
			if (err) console.error("err : " + err);
			response.redirect('/board');
		})
	}
});


module.exports = router;