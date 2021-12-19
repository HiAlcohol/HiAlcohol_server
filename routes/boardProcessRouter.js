const { request } = require('express');
const express = require('express');
const res = require('express/lib/response');
const { fstat } = require('fs');
const router = express.Router();
const mysql = require('mysql');
const { devNull } = require('os');
const passport = require('passport');
const db = require('../config/db.js');


router.post('/', function(request, response) {

        const body = request.body;
        let title = body.title;
        let content = body.content;
        var userID = request.user.id;
    
	db.beginTransaction(TranErr => {
		if (TranErr) {
			console.error("Transaction Error => ", TranErr);
			throw TranErr;
		}
		db.query(`INSERT INTO post (id, userID, title, content, createdate, updatedate) VALUES (?,?,?,?,now(),now())`, [null, userID, title, content, null, null], function(err, result){
            if (err) console.error("err : " + err);
			db.commit();
            response.redirect('/board');
        })
	})
        
    
    
});


module.exports = router;