const express = require('express');
const router = express.Router();
const board = require('../template/board.js');
const board_write = require('../template/board_write.js');

router.get('/', function(request, response) {
	const body = board.HOME();
	response.send(board.HTML(body));
});

router.get('/write', function(request, response) {
	const body = board_write.HOME();
	response.send(board_write.HTML(body));
});

module.exports = router;