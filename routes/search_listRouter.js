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
		// console.log(db.escape(queryData.keyword))
		sql2 = `select recipe.cocktail, recipe.id, material.material from recipe, material  
		where ( (recipe.cocktail=` + db.escape(queryData.keyword) + `) and (material.id =
			any(select inclusion.materialId from inclusion where inclusion.recipeId= 
			(select recipe.id from recipe where recipe.cocktail = ` + db.escape(queryData.keyword) + `)))) or
		 (recipe.id=any(select recipeId from inclusion 
			where  (materialId = any(select id from material 
				where instr( material, ` + db.escape(queryData.keyword) +` )or 
				material = any(select alcolType from product where instr(name, `+ db.escape(queryData.keyword) + `)))) 
				and material.id =any(select inclusion.materialId from inclusion where inclusion.recipeId= recipe.id ))) order by recipe.cocktail asc`
	

		// sql2 =`select recipe.cocktail, recipe.id, material.material from recipe, material 
		// where (recipe.cocktail=` + db.escape(queryData.keyword) + `) and (material.id =
		// any(select inclusion.materialId from inclusion where inclusion.recipeId= 
		// (select recipe.id from recipe where recipe.cocktail = ` + db.escape(queryData.keyword) + `)))
		// `
		if(err0) throw err0;

		db.query(sql2, function(err, result){
	
			if (err) throw err;
			var recipe_list = [];
			var index = 0;
			// console.log(result)
			// console.log(result.length)
			// console.log(result[result.length - 1])
			// console.log(result[0]);
			if(result.length===0){
				var checked = [];
				for (var i = 0; i < result0.length; i++)
					checked[i] = 0;
				for (var i = 0;i < result0.length - 1;i++) {
					var item = new Item();
					if (checked[i] === 0) {
						item.id = result0[i].id;
						item.cocktail = result0[i].cocktail;
						item.materials[0] = result0[i].material;
						recipe_list[index] = item;
						checked[i] = 1;
					}
					
					for (var j = i + 1; j < result0.length; j++){
						if (checked[j] === 0 && result0[i].id === result0[j].id) {
							checked[j] = 1;
							recipe_list[index].materials[recipe_list[index].materials.length] = result0[j].material;
						} else {
							index++;
							i = j - 1;
							break ;
						}
					}
					// console.log(recipe_list[index-1])
				}
				// console.log(recipe_list);
				// var list = search_list.LIST(recipe_list)
				// var html = search_list.HTML( list, request.user)
			} else if (result.length === 1) {
				var item = new Item();
				item.id = result[0].id;
				item.cocktail = result[0].cocktail;
				item.materials[0] = result[0].material;
				recipe_list[0] = item;
			}else{
				var checked = [];
				for (var i = 0; i < result.length; i++)
					checked[i] = 0;
				for (var i = 0;i < result.length - 1;i++) {
					var item = new Item();
					if (checked[i] === 0) {
						item.id = result[i].id;
						item.cocktail = result[i].cocktail;
						item.materials[0] = result[i].material;
						recipe_list[index] = item;
						checked[i] = 1;
					}
					
					for (var j = i + 1; j < result.length; j++){
						if (checked[j] === 0 && result[i].id === result[j].id) {
							checked[j] = 1;
							recipe_list[index].materials[recipe_list[index].materials.length] = result[j].material;
						} else {
							index++;
							i = j - 1;
							break ;
						}
					}
				}

				// var list = search_list.LIST(recipe_list)
				// var html = search_list.HTML(list, request.user)
			}
			var list = search_list.LIST(recipe_list)
			var html = search_list.HTML(list, request.user)
			response.send(html);
		});
	})
	
});

router.get('/recipe', function(request, response){


	db.query(`select * from recipe`, function(err, result0){

		var _url = request.url;
		var queryData = url.parse(_url, true).query;

		sql=`select recipe.*, material.material from recipe, material 
		where (material.id=any(select inclusion.materialId from inclusion where inclusion.recipeId=`+ db.escape(queryData.id) +`)) and (recipe.id=`+ db.escape(queryData.id) +`)
		`;

		if (err) throw err;
		db.query(sql, function(err2, result){
			
			if (err2) throw err2;

			var recipe_list = [];
			var index = 0;

			if(result.length===0){
				var checked = [];
				for (var i = 0; i < result0.length; i++)
					checked[i] = 0;
				for (var i = 0;i < result0.length - 1;i++) {
					var item = new Item();
					if (checked[i] === 0) {
						item.id = result0[i].id;
						item.cocktail = result0[i].cocktail;
						item.materials[0] = result0[i].material;
						recipe_list[index] = item;
						checked[i] = 1;
					}
					
					for (var j = i + 1; j < result0.length; j++){
						if (checked[j] === 0 && result0[i].id === result0[j].id) {
							checked[j] = 1;
							recipe_list[index].materials[recipe_list[index].materials.length] = result0[j].material;
						} else {
							index++;
							i = j - 1;
							break ;
						}
					}
				}
		
			} else if (result.length === 1) {
				var item = new Item();
				item.id = result[0].id;
				item.cocktail = result[0].cocktail;
				item.materials[0] = result[0].material;
				recipe_list[0] = item;
			}else{
				var checked = [];
				for (var i = 0; i < result.length; i++)
					checked[i] = 0;
				for (var i = 0;i < result.length - 1;i++) {
					var item = new Item();
					if (checked[i] === 0) {
						item.id = result[i].id;
						item.cocktail = result[i].cocktail;
						item.materials[0] = result[i].material;
						recipe_list[index] = item;
						checked[i] = 1;
					}
					
					for (var j = i + 1; j < result.length; j++){
						if (checked[j] === 0 && result[i].id === result[j].id) {
							checked[j] = 1;
							recipe_list[index].materials[recipe_list[index].materials.length] = result[j].material;
						} else {
							index++;
							i = j - 1;
							break ;
						}
					}
				}
			}
			console.log(recipe_list)
			var name = result[0].cocktail;
			var rate = result[0].rate;
			var content = result[0].content;

			var mat = recipe.MAT(recipe_list);
			var html = recipe.HTML(name, rate, content, request.user, mat);

			response.send(html);
			});
	});
});

module.exports = router;