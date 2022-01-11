const express = require('express');
const router = express.Router();
const db = require('../config/db.js');

router.post('/', function(request, response) {

    queryData = request.query;
	db.query(`SELECT * from post WHERE id=?`, [queryData.id], function(err2, result2){

        var userId = result2[0].userId;

        if(!request.isAuthenticated()){
            response.send('<script>alert("로그인이 필요한 서비스입니다.");\
            location.href="/oauth/kakao";</script>');
        }else{
            if( userId !== request.user.id){
                response.send('<script>alert("작성자만 삭제 가능합니다.");\
                location.href="/board";</script>');
            }else{
				db.beginTransaction(function(err0) {
					if (err0) throw err0;
					db.query(`DELETE FROM post WHERE id=?`, [queryData.id], function(err, result){
						if (err) {
							return db.rollback(function() {
								console.error("err : " + err);
								throw err;
							})
						}
						db.query(`DELETE FROM liked WHERE postId=?`, [queryData.id], function(err2, result2){
							if (err2) {
								return db.rollback(function() {
									console.error("err : " + err2);
								})
							}
							db.commit(function(err3) {
								if (err3) {
									db.rollback(function() {
										throw err3;
									})
								}
							});
							response.redirect('/board');
						})
					})
				})
        	}
        }
    });
});


module.exports = router;