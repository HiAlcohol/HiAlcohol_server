const express = require('express');
const router = express.Router();
const search_list = require('../template/search_list.js');
const recipe = require('../template/recipe.js');
var db = require('../config/db'); // db.js 폴더 경로
var url = require('url');

class Item
{
	cocktail = ''
	materials= []
}

router.get('/', function(request, response){
	
	sql = `select recipe.id, recipe.cocktail, material.material from recipe, material  where
	material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id )
	order by recipe.cocktail asc`
	
	db.query(sql, function(err0, result0){
		
		var queryData = request.query;

		sql2 = `select recipe.id, recipe.cocktail, material.material from recipe, material  where recipe.id=any(select recipeId from inclusion 
			where  materialId = any(select id from material 
				where material= '${queryData.keyword}' or material = any(select alcolType from product where name='${queryData.keyword}'))) 
				and material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id ) order by recipe.cocktail asc`
		
		if(err0) throw err0;

		db.query(sql2, function(err, result){
	
			if (err) throw err;
			var recipe_list = [];
			var index = 0;
	
			if(result.length===0){
				for (var i = 0;i < result0.length - 1;i++) {
					var item = new Item();
					item.id = result0[i].id;
					item.cocktail = result0[i].cocktail;
					item.materials[0] = result0[i].material;
					recipe_list[index] = item;
					for (var j = i + 1; j < result0.length; j++){
						if (result0[i].id === result0[j].id) {
							recipe_list[index].materials[recipe_list[index].materials.length] = result0[j].material;
						} else {
							index++;
							i = j - 1;
							break ;
						}
					}
				}

				var list = search_list.LIST(recipe_list)
				var html = search_list.HTML( list, request.user)
			} else{
				for (var i = 0;i < result.length - 1;i++) {
					var item = new Item();
					item.id = result[i].id;
					item.cocktail = result[i].cocktail;
					item.materials[0] = result[i].material;
					recipe_list[index] = item;
					for (var j = i + 1; j < result.length; j++){
						if (result[i].id === result[j].id) {
							recipe_list[index].materials[recipe_list[index].materials.length] = result[j].material;
						} else {
							index++;
							i = j - 1;
							break ;
						}
					}
				}

				var list = search_list.LIST(recipe_list)
				var html = search_list.HTML(list, request.user)
			}

			response.send(html);
		});
	})
	
});

router.get('/recipe', function(request, response){

	db.query(`select * from recipe`, function(err, result){

		var _url = request.url;
		var queryData = url.parse(_url, true).query;

		if (err) throw err;
		db.query(`select * from recipe WHERE id=?`, [queryData.id], function(err2, result2){

			if (err2) throw err2;

			var name = result2[0].cocktail;
			var rate = result2[0].rate;
			var content = result2[0].content;

			var html = recipe.HTML(name, rate, content, request.user);

			response.send(html);
		});
	});
});

module.exports = router;