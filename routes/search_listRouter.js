const express = require('express');
const router = express.Router();
const search_list = require('../template/search_list.js');
var db = require('../config/db'); // db.js 폴더 경로

var url = require('url');

// sql = `select * from recipe`

sql = `select recipe.cocktail, material.material from recipe, material  where
material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id )`

router.get('/', function(request, response){

	db.query(sql, function(err, result){
		if (err) throw err;

		
			var list = search_list.LIST(result)
			var html = search_list.HTML( list)
	
			response.send(html);		
		});
});

module.exports = router;