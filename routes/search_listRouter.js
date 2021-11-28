const express = require('express');
const router = express.Router();
const search_list = require('../template/search_list.js');

router.get('/', function(request, response) {
	const body = search_list.HOME();
	response.send(search_list.HTML(body));
});

module.exports = router;