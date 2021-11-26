const express = require('express');
const router = express.Router();
const home = require('../template/home.js');
const board_create = require('../template/board_create.js');

router.get('/', function(request, response) {
	const body = home.HOME();
	response.send(home.HTML(body));
});

router.get('/board/create', function(request, response) {
	const body = board_create.HOME();
	response.send(board_create.HTML(body));
});

module.exports = router;