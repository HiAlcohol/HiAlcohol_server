const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { fstat } = require('fs');
const router = express.Router();
const mysql = require('mysql');
const { DATE } = require('mysql/lib/protocol/constants/types');
const db = require('../config/db.js');


router.post('/', function(request, response) {

        const body = request.body;
        queryData = request.query;

        let title = body.title;
        let content = body.content;
        let now = new Date();
    
        db.query(`UPDATE post SET title=?, content=?, updatedate=? WHERE id=?`, [title, content, now, queryData.id], function(err, result){
            if (err) console.error("err : " + err);
            response.redirect('/board/view?id=' + queryData.id);
        })
    
    
});


module.exports = router;