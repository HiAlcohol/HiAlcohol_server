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
                db.query(`DELETE FROM post WHERE id=?`, [queryData.id], function(err, result){
                    if (err) console.error("err : " + err);
                    db.query(`DELETE FROM liked WHERE postId=?`, [queryData.id], function(err2, result2){
                        if (err) console.error("err : " + err2);
                        response.redirect('/board');
                    })
                })
                
        }
        
        }
    });
});


module.exports = router;