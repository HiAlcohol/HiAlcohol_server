const express = require('express');
const router = express.Router();
const map = require('../template/map.js');
var db = require('../config/db'); // db.js 폴더 경로


router.get('/', function(request, response){
  
    var location = request.query.location;
    
    const a = map.MAP(location);
    // console.log(a);
    const body = map.HOME(request.user, location, a);
	response.send(map.HTML(body));
});

module.exports = router;