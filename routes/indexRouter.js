const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const home = require('../template/home.js');

router.get('/', function(request, response) {
	// console.log('path: /');
	sql = `select * from recipe order by rand() limit 1`
	db.query(sql, function(err, result){
		if(err) throw err;

		const body = home.HOME(request.user, result);
		response.send(home.HTML(body));
	})

});

module.exports = router;