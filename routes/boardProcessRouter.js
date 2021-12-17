const { request } = require('express');
const express = require('express');
const { fstat } = require('fs');
const router = express.Router();
const mysql = require('mysql');

// var db = require('../config/db.js')
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql1234',
	database: 'hialcohol'
});


router.post('/', function(request, response) {
    const body = request.body;
    let title = body.title;
    let content = body.content;
    var today = new Date();
    // var year = today.getFullYear();
    // var month = ('0' + (today.getMonth() + 1)).slice(-2);
    // var day = ('0' + today.getDate()).slice(-2);
    // var createdate = year + '-' + month  + '-' + day;


    db.query(`INSERT INTO post (id, userID, title, content, createdate, updatedate) VALUES (?,?,?,?,now(),now())`, [null, "7777", title, content, null, null], function(err, result){
        if (err) console.error("err : " + err);
        response.redirect('/board');
    })

    
});


module.exports = router;