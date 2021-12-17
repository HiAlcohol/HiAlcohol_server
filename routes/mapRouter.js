const express = require('express');
const router = express.Router();
const map = require('../template/map.js');
var db = require('../config/db'); // db.js 폴더 경로


router.get('/', function(request, response){
    const body = map.HOME();
	response.send(map.HTML(body));
});

module.exports = router;