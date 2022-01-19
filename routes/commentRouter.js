const express = require('express');
const router = express.Router();
const db = require('../config/db.js');

// prefix: /comment

router.post('/', function(req, res) {
	const body = req.body;
	console.log(req.body);
	if (!req.isAuthenticated()) {
		res.status(401).send({error: '로그인이 필요한 서비스입니다.'});
	} else {
		db.query(`INSERT INTO comment(id, userId, postId, content, createdate) VALUES(?, ?, ?, ?, now())`,
			[null, req.user.id, parseInt(body.postId), body.content],
		function(err, result) {
			if (err)
				throw err
			console.log(result);
			res.status(201).json('댓글 추가 성공');
		})
	}
});

module.exports = router;