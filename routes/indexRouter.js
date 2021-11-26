const express = require('express');
const router = express.Router();
const home = require('../template/home.js');

router.get('/', function(request, response) {
	const body = home.HOME();
	response.send(home.HTML(body));
});

module.exports = router;