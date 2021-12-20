
const express = require('express');
const db = require('../config/db.js');
const router = express.Router();
const template = require('../template/likes_list');

// prefix: /likes

function dateFormat(date) {
    var newdate = new Date(date);
    let month = newdate.getMonth() + 1;
    let day = newdate.getDate();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return newdate.getFullYear() + '.' + month + '.' + day + ' ';
}; 


router.get('/', function(request, response) {
    console.log(request.user);
    if(!request.isAuthenticated()){
        response.send('<script>alert("로그인이 필요한 서비스입니다.");\
        location.href="/oauth/kakao";</script>');
    } else {
        db.query(`SELECT post.id, post.title, post.createdate, count(*) 'count' 
            FROM post, liked 
            WHERE post.id = liked.postId and liked.userId=${request.user.id} group by post.id`, 
            function(err, result) {
            
            var list ='';
            var date = dateFormat(result[0].createdate);
            
            for (var i = 0;i < result.length; i++) {
                list += `
                
                    <div class="content">
                    <a href='/board/view?id=${result[i].id}'>
                        <div class="subject">
                            <p>${result[i].title}</p>
                            <div class="info"><span>${request.user.nickname}</span> | <span>${date}</span></div>
                        </div>
                        </a>
                        <div class="like">
                            <button type="button" class="likebtn" id="img_btn"><img src="/public/img/heart_outline.png"></button>
                            <div class="cnt">${result[i].count}</div>
                        </div>
                    </div>
                
                `
            }
            var body = template.HOME(list, request.user);
            var html = template.HTML(body);
            response.send(html);
        })
    }
});

router.get('/add', function(req, res) {

    if(!req.isAuthenticated()){
        res.send('<script>alert("로그인이 필요한 서비스입니다.");\
        location.href="/oauth/kakao";</script>');
    } else {
        console.log("ㅇ",req.query);
        console.log("ㅇ", req.body);

        if (req.query.postId !== undefined) {
            db.query(`SELECT * FROM liked WHERE postId=? and userId=${req.user.id}`, [req.query.postId], function(err0, result0) {
                if (err0) throw err0;
                if (result0.length === 0) {
                    db.query(`SELECT count(*) 'count' FROM 
                    (select * from post where post.id=${req.query.postId}) post, liked 
                    where post.id=liked.postId`, function(err1, result1) {
                        if (err1) throw err1;
                    });
                }
                db.query(`INSERT INTO liked VALUES (NULL, ${req.query.postId}, ${req.user.id})`, function(err, result) {
                    if (err) {
                        db.rollback();
                        throw err;
                    }
                    db.query(`SELECT count(*) 'count' FROM 
                    (select * from post where post.id=${req.query.postId}) post, liked 
                    where post.id=liked.postId`, function(err2, result2) {
                        if (err2) throw err2;
                    });
                });
            });
        }
        if (req.query.redirect_uri == undefined) {
            res.redirect("/board");
        } else {
            res.redirect(req.query.redirect_uri);
        }
    }
})

router.get('/del', function(req, res) {
    if(!req.isAuthenticated()){
        res.send('<script>alert("로그인이 필요한 서비스입니다.");\
        location.href="/oauth/kakao";</script>');
    } else {
        if (req.query.postId !== undefined) {
            console.log("쿼리!!",req.query);
            db.query(`DELETE FROM liked WHERE liked.postId=? and liked.userId=${req.user.id}`, [req.query.postId], function(err, result) {

                if (err) throw err;
                db.query(`SELECT count(*) 'count' FROM 
                (select * from post where post.id=${req.query.postId}) post, liked 
                where post.id=liked.postId`, function(err2, result2) {
                    if (err2) throw err2;
                    console.log(result2);
                    // res.json(result2[0]);
                })
            })
        }
        if (req.query.redirect_uri == undefined) {
            res.redirect("/board");
        } else {
            res.redirect(req.query.redirect_uri);
        }
    }
}
)

module.exports = router;
