const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const home = require('../template/home.js');

router.get('/', function(request, response) {
	console.log('path: /');
	console.log(request)
	const body = home.HOME(request.user);
	console.log('1');
	console.log(request.session);
	response.send(home.HTML(body));
});

module.exports = router;