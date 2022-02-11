const express = require('express');
const router = express.Router();
const board = require('../template/board.js');
const board_write = require('../template/board_write.js');
const board_view = require('../template/board_view.js');
const board_edit = require('../template/board_edit.js');
const db = require('../config/db.js');
const sanitizeHtml = require('sanitize-html');

function dateFormat(date) {
    var newdate = new Date(date);
    let month = newdate.getMonth() + 1;
    let day = newdate.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return newdate.getFullYear() + '.' + month + '.' + day + ' ';
}; 

router.post('/', function(request, response) {
    var sql = '';
  
    if (request.body.order === 'likes') {
        var selected = `
            <option value="date">최신순</option>
            <option value="likes" selected>좋아요순</option>`;
        sql = `select post.*, count(liked.id) 'count' from (select post.id 'postId', post.title, post.createdate, user.nickname from post, user where post.userId=user.id) post left join liked on post.postId=liked.postId group by post.postId order by count desc;`;
    } else if (request.body.order === 'date') {
        var selected = `
            <option value="date" selected>최신순</option>
            <option value="likes" >좋아요순</option>`;
            sql = `select post.*, count(liked.id) 'count' from (select post.id 'postId', post.title, post.createdate, user.nickname from post, user where post.userId=user.id) post left join liked on post.postId=liked.postId group by post.postId order by post.createdate desc;`;
    }
  
    db.query(sql, function(err, result){
        if (err) throw err;
        var list = '';
		
        if(!request.isAuthenticated()){

			for (var i = 0; i < result.length; i++) {
				var id = sanitizeHtml(result[i].nickname);
				var postId = result[i].postId;
				var title = sanitizeHtml(result[i].title);
				var createdate = dateFormat(result[i].createdate);
				var likes = result[i].count;
				var check = false;

				likeMode = undefined;
				likeImg = "/public/img/heart_empty.png";
				buttonMode= "disabled='disabled'"
				
				list += board.HOME(id, postId, title, createdate, likes, likeMode, likeImg, buttonMode);
			};

			var head = board.HEAD(request.user, selected);
			var body = board.HTML(head, list);
			response.send(body);

        }else{
            db.query(`SELECT * from liked WHERE liked.userId=${request.user.id}`,function(err2, result2){
                if (err2) throw err2;
    
                for (var i = 0; i < result.length; i++) {
                    var id = sanitizeHtml(result[i].nickname);
                    var postId = result[i].postId;
                    var title = sanitizeHtml(result[i].title);
                    var createdate = dateFormat(result[i].createdate);
                    var likes = result[i].count;
                    var check = false;
    
                    for (var j = 0; j < result2.length; j++) {
                        check = (result[i].postId == result2[j].postId);
						if (check == true) {
							break;
						};
                    };

                    likeMode = check ? "del" : "add";
                    likeImg = check ? "/public/img/heart_fill.png" : "/public/img/heart_outline.png";
					buttonMode= ""
                    
                    list += board.HOME(id, postId, title, createdate, likes, likeMode, likeImg, buttonMode);

					// console.log("check", check, likeImg);
                };
    
                var head = board.HEAD(request.user, selected);
                var body = board.HTML(head, list);
                response.send(body);
            });
        }
    });
});

router.get('/', function(request, response) {
    var sql = '';
    // console.log(request.query);
    var selected = `
            <option value="date" selected>최신순</option>
            <option value="likes" >좋아요순</option>`;

    sql = `select post.*, count(liked.id) 'count' from 
	(select post.id 'postId', post.title, post.createdate, user.nickname from post, user where post.userId=user.id) post left join liked 
	on post.postId=liked.postId group by post.postId order by post.createdate desc;`;
    db.query(sql, function(err, result){
        if (err) throw err;
        var list = '';
        console.log('result:', result)

        if(!request.isAuthenticated()){

			for (var i = 0; i < result.length; i++) {
				var id = sanitizeHtml(result[i].nickname);
				var postId = result[i].postId;
				var title = sanitizeHtml(result[i].title);
				var createdate = dateFormat(result[i].createdate);
				var likes = result[i].count;
				var check = false;

				likeMode = undefined;
				likeImg = "/public/img/heart_empty.png";
				buttonMode= "disabled='disabled'";
				
				list += board.HOME(id, postId, title, createdate, likes, likeMode, likeImg, buttonMode);
			};

			var head = board.HEAD(request.user, selected);
			var body = board.HTML(head, list);
			response.send(body);

        }else{
            db.query(`SELECT * from liked WHERE liked.userId=${request.user.id}`,function(err2, result2){
                if (err2) throw err2;
    
                for (var i = 0; i < result.length; i++) {
                    var id = result[i].nickname;
                    var postId = result[i].postId;
                    var title = sanitizeHtml(result[i].title);
                    var createdate = dateFormat(result[i].createdate);
                    var likes = result[i].count;
                    var check = false;
    
                    for (var j = 0; j < result2.length; j++) {
                        check = (result[i].postId == result2[j].postId);
						if (check == true) {
							break;
						};
                    };

                    likeMode = check ? "del" : "add";
                    likeImg = check ? "/public/img/heart_fill.png" : "/public/img/heart_outline.png";
					buttonMode = "";
                    
                    list += board.HOME(id, postId, title, createdate, likes, likeMode, likeImg, buttonMode);

					// console.log("check", check, likeImg);
                };
    
                var head = board.HEAD(request.user, selected);
                var body = board.HTML(head, list);
                response.send(body);
            });
        }


    });
});

router.get('/write', function(request, response) {
        if(!request.isAuthenticated()){
        response.send('<script>alert("로그인이 필요한 서비스입니다.");\
        location.href="/oauth/kakao";</script>');
    }else{
        const body = board_write.HTML();
        response.send(board_write.HTML(body));
    }
});

router.get('/view', function(request, response){

	queryData = request.query;

	db.query(`SELECT * from post WHERE id=?`, [queryData.id], function(err, result){

		if (err) throw err;

		var title = sanitizeHtml(result[0].title);
		var userId = result[0].userId;
		var date = result[0].updatedate;
		var content = sanitizeHtml(result[0].content);
		var postId = result[0].id;

		db.query(`select post.*, count(liked.id) 'count' from (select post.id 'postId', post.title, post.createdate, user.nickname from post, user where post.userId=user.id and post.id=${queryData.id}) post left join liked on post.postId=liked.postId group by post.postId`, function(err1, result1){
			if (err1) throw err1;
	
			db.query(`SELECT comment.*, user.nickname FROM comment, user WHERE (user.id=comment.userId) and postId=?`, [queryData.id],function(err3, result3) {
				if (err3) throw err;
				// console.log(result3);

				var like_num = result1[0].count;
				var user_id = result1[0].nickname;
				var comment = board_view.COM(result3);
	
				if (!request.isAuthenticated()) {
					likeMode = 'add';
					likeImg = "/public/img/heart_empty.png";
					buttonMode = "disabled='disabled'";
	
					var html = board_view.HTML(title, user_id, date, like_num, content, result1[0].postId, request.user, likeMode, likeImg, postId, buttonMode, comment);
					response.send(html);
				} else {
					db.query(`SELECT * FROM liked WHERE postId=? and userId=?;`, [result1[0].postId, request.user.id], function(err2, result2){
					
						if (err2) throw err2;
						var check = (result2.length !== 0);
						likeMode = check ? "del" : "add";
						likeImg = check ? "/public/img/heart_fill.png" : "/public/img/heart_outline.png";
						buttonMode = "";
	
						var html = board_view.HTML(title, user_id, date, like_num, content, result1[0].postId, request.user, likeMode, likeImg, postId, buttonMode, comment);
						response.send(html);
					});
				}
			});
		})
		
	});


});


router.get('/edit', function(request, response){

	queryData = request.query;

	db.query(`SELECT * from post WHERE id=?`, [queryData.id], function(err2, result2){

		if (err2) throw err2;

		var title = result2[0].title;
		var userId = result2[0].userId;
		var content = result2[0].content;


		db.query(`SELECT nickname FROM user WHERE id = ?;`, [userId], function(err3, result3){
			
			if(!request.isAuthenticated()){
				response.send('<script>alert("로그인이 필요한 서비스입니다.");\
				location.href="/oauth/kakao";</script>');
			}else{
				if( userId != request.user.id){
					response.send('<script>alert("접근 권한이 없습니다.");\
					location.href="/board";</script>');
				}else{

					var html = board_edit.HTML(title, content, queryData.id)
					response.send(html);
				}
			}
			
		})  
	});
});

module.exports = router;