const express = require('express');
const router = express.Router();
const search_list = require('../template/search_list.js');
var db = require('../config/db'); // db.js 폴더 경로
var url = require('url');

sql = `select recipe.cocktail, material.material from recipe, material  where
material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id )`

router.get('/', function(request, response){

	db.query(sql, function(err, result){
		var _url = request.url;
		var queryData = url.parse(_url, true).query;

		sql2 = `select recipe.cocktail, material.material from recipe, material  where recipe.id=any(select recipeId from inclusion 
			where  materialId = any(select id from material 
				where material= '${queryData.keyword}' or material = any(select alcolType from product where name='${queryData.keyword}'))) 
				and material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id )`
		

		if (err) throw err;
		

		db.query( sql2,  function(err2, result2){
			if(err2) throw err2;
			if(result2.length===0){
				var list = search_list.LIST(result)
				var html = search_list.HTML( list)
							
				response.send(html);	
			} else {
				var list = search_list.LIST(result2)
				var html = search_list.HTML( list)
			
				response.send(html);	
			}
		})
	});

});

module.exports = router;