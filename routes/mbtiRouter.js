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

console.log(qData);
console.log(rData);



router.get('/', function(request, response){
  
    const body = mbti_start.HOME();
	response.send(mbti_start.HTML(body));
});

router.get('/test', function(request, response){
    const body = mbti_test.HOME();
	response.send(mbti_test.HTML(body));
});

router.get('/result', function(request, response){
    const body = mbti_result.HOME();
	response.send(mbti_result.HTML(body));
});


module.exports = router;