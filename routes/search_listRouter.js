const express = require('express');
const router = express.Router();
const search_list = require('../template/search_list.js');
// const mysql = require('mysql');
const db = require('../config/db')

var url = require('url');

// var db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'hialcohol'
// });
// db.connect();

router.get('/', function(request, response){
	db.query(`select * from recipe`, function(err, result){
		if (err) throw err;
			var id = result[0].id;
			var cocktail = result[0].cocktail;

			var list = search_list.LIST(result)
			var html = search_list.HTML(id, cocktail, list)
	
			response.send(html);		
		});
});

module.exports = router;