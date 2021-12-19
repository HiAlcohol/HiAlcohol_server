const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { fstat } = require('fs');
const router = express.Router();
const mysql = require('mysql');
const db = require('../config/db.js');


router.get('/', function(request, response) {

        queryData = request.query;
    
        db.query(`DELETE FROM post WHERE id=?`, [queryData.id], function(err, result){
            if (err) console.error("err : " + err);
            response.redirect('/board');
        })
    
    
});


module.exports = router;