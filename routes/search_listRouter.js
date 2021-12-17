const express = require('express');
const router = express.Router();
const search_list = require('../template/search_list.js');
var db = require('../config/db'); // db.js 폴더 경로
var url = require('url');

class Item
{
	cocktail = ''
	materials= []
}

router.get('/', async function(request, response){
	var _url = request.url;
	var queryData = url.parse(_url, true).query;
	
	sql2 = `select recipe.cocktail, material.material from recipe, material  where recipe.id=any(select recipeId from inclusion 
	where  materialId = any(select id from material 
		where material= '${queryData.keyword}' or material = any(select alcolType from product where name='${queryData.keyword}'))) 
		and material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id )`

	db.query(sql2, function(err, result){
	
		// console.log('sql1:',result);
	
		if (err) throw err;
		var recipe_list = [];
		var index = 0;
		for (var i = 0;i < result.length - 1;i++) {
			var item = new Item();
			item.cocktail = result[i].cocktail;
			item.materials[0] = result[i].material;
			recipe_list[index] = item;
			for (var j = i + 1; j < result.length; j++){
				if (result[i].cocktail === result[j].cocktail) {
					recipe_list[index].materials[recipe_list[index].materials.length] = result[j].material;
				} else {
					index++;
					i = j - 1;
					break ;
				}
			}
		}
		// console.log(recipe_list)
		var list = search_list.LIST(recipe_list)
		var html = search_list.HTML( list)
					
		response.send(html);
	});
});

module.exports = router;