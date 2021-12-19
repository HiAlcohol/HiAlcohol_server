const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { fstat } = require('fs');
const router = express.Router();
const mysql = require('mysql');
const passport = require('passport');
const db = require('../config/db.js');


router.post('/', function(request, response) {

        const body = request.body;
        let title = body.title;
        let content = body.content;
        var userID = request.user.id;
    
    
        db.query(`INSERT INTO post (id, userID, title, content, createdate, updatedate) VALUES (?,?,?,?,now(),now())`, [null, userID, title, content, null, null], function(err, result){
            if (err) console.error("err : " + err);
            response.redirect('/board');
        })
    
    
});


module.exports = router;