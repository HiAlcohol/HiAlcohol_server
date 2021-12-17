const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const home = require('../template/home.js');

// prefix: /likes

router.get('/', function(request, response) {
	if (request.user === undefined) {
		response.redirect('/');
	}
	db.query(`SELECT * FROM post where id =any(select liked.postId from liked where userId=${request.user.id})`, function(err, result) {
		console.log(result);
		
		response.send();
	})
});

module.exports = router;