const express = require('express');
const router = express.Router();
const mbti_start = require('../template/mbti_start.js');
const mbti_test = require('../template/mbti_test.js');
const mbti_result = require('../template/mbti_result.js');
// var db = require('../config/db'); // db.js 폴더 경로

const fs = require('fs');

const qfile = fs.readFileSync('./config/question.json', 'utf8');
const rfile = fs.readFileSync('./config/result.json', 'utf8');

const qData = JSON.parse(qfile);
const rData = JSON.parse(rfile);

// console.log(qData);
// console.log(rData);

router.get('/', function(request, response){
  
    const body = mbti_start.HOME();
	response.send(mbti_start.HTML(body));
});

router.get('/test', function(request, response){
    var num = String(3);
    var q = qData[num].question;
    var a1 = qData[num].answer1;
    var a2 = qData[num].answer2;
    
    const body = mbti_test.HOME(num, q, a1, a2);
	response.send(mbti_test.HTML(body));
});

router.get('/result', function(request, response){
    var mbti = 'isfj';
    data = rData[mbti];
    const des = mbti_result.DES(data);
    const body = mbti_result.HOME(data, des);
	response.send(mbti_result.HTML(body));
});

module.exports = router;