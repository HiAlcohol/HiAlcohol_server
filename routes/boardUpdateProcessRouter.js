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
        queryData = request.query;

        let title = body.title;
        let content = body.content;
        
    
        db.query(`UPDATE post SET title=?, content=?, updatedate=? WHERE id=?`, [title, content, null, queryData.id], function(err, result){
            if (err) console.error("err : " + err);
            response.redirect('/');
        })
    
    
});


module.exports = router;