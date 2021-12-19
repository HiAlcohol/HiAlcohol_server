const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { fstat } = require('fs');
const router = express.Router();
const mysql = require('mysql');
const db = require('../config/db.js');


router.get('/', function(request, response) {

        queryData = request.query;

        if(!request.isAuthenticated()){
            response.send('<script>alert("로그인이 필요한 서비스입니다.");\
            location.href="/oauth/kakao";</script>');
        }else{
            if( userId !== request.user.kakaoid){
                response.send('<script>alert("작성자만 삭제 가능합니다.");\
                location.href="/board";</script>');
            }else{
                db.query(`DELETE FROM post WHERE id=?`, [queryData.id], function(err, result){
                    if (err) console.error("err : " + err);
                    response.redirect('/board');
                })
        }
    
    }
});


module.exports = router;