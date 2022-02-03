const express = require('express');
const router = express.Router();
const db = require('../config/db.js');
const sanitizeHtml = require('sanitize-html');

// prefix: /comment

router.get('/', function(req, res) {
	const query = req.query;
	db.query(`SELECT *, user.nickname FROM comment, user WHERE postId=?`, [query.postId],
	function(err, result) {
		if (err) throw err
		console.log(result);
		res.status(200).json(result);
		
	})
});

// 댓글 추가
// { postId: , comment: }
router.post('/', function(req, res) {
	const body = req.body;
	console.log(req.body);
	if (!req.isAuthenticated()) {
		res.status(401).send({error: '로그인이 필요한 서비스입니다.'});
	} else if (sanitizeHtml(body.content).length === 0) {
		res.status(4001).statusMessage('스크립트를 제외한 길이가 0이므로 요청을 처리할 수 없습니다.');
	} else {
		db.query(`INSERT INTO comment(id, userId, postId, content, createdate) VALUES(?, ?, ?, ?, now())`,
			[null, req.user.id, parseInt(body.postId), sanitizeHtml(body.content)],
		function(err, result) {
			if (err)
				throw err
			console.log(result);
			res.status(201).json({message: '댓글 추가 성공'});
		})
	}
});

// 댓글 삭제
// {userId: , postId: , commentId: }
router.post('/del', async function(req, res) {
	console.log("req", req.user)
    queryData = req.query;
	// console.log('queryData',queryData);

	if (!req.isAuthenticated()) {
		res.status(401).send('<script>alert("로그인이 필요한 서비스입니다.");\
            location.href="/oauth/kakao";</script>');
	}

	let promise = new Promise((resolve, reject) => {
		db.query("SELECT * FROM comment WHERE id = ?", [parseInt(queryData.commentId)],
		function(err, result) {
			if (err)
				throw err
			// console.log('user1', req.user.id, 'post1', result[0].postId)
			// console.log('user2', queryData.userId, 'post2', queryData.postId)
			if (req.user.id == queryData.userId &&
				result[0].postId == queryData.postId)
				resolve(result[0].id)
			else
				resolve(0)
		})
	});
	let commentId = await promise;
	console.log(commentId);

	if (commentId === 0){
		res.status(401).send(`<script>alert("자신의 댓글만 삭제할 수 있습니다.");\
		location.href="/board/view?id=${queryData.postId}";</script>`);
	}
	else {
		db.query("DELETE FROM comment WHERE id=?", [parseInt(queryData.commentId)],
		function(err, result) {
			res.status(200).send(`<script>alert("댓글을 삭제했습니다.");\
		location.href="/board/view?id=${queryData.postId}";</script>`);
			// res.status(200).send({message: '댓글 삭제 성공'});
		})
	}
});

module.exports = router;