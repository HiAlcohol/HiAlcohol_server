const express = require('express');
const router = express.Router();
const mbti_start = require('../template/mbti_start.js');
const mbti_test = require('../template/mbti_test.js');
const mbti_result = require('../template/mbti_result.js');
// var db = require('../config/db'); // db.js 폴더 경로

const fs = require('fs');
const { query } = require('../config/db.js');

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

	console.log('cookies:', request.cookies)
	console.log('signedCookies:', request.signedCookies)
	var answers = request.signedCookies.answers || ''
	if (request.query.q >= 1 && request.query.q < 13 && request.query.a) {
		answers += String(request.query.a)
		
		if (request.query.q < 12) {
			var num = String(++request.query.q)
			var q = qData[num].question;
			var a1 = qData[num].answer1;
			var a2 = qData[num].answer2;
		} else {
			response.cookie('answers', answers, {
				path: '/',
				httpOnly: true,
				signed: true
			})
			console.log('redirect');
			response.redirect("/mbti/result");
			return ;
		}
	} else {
		answers = ''
		var num = String(1);
		var q = qData[num].question;
		var a1 = qData[num].answer1;
		var a2 = qData[num].answer2;
	}
    response.cookie('answers', answers, {
		path: '/',
		httpOnly: true,
		signed: true
	})

    const body = mbti_test.HOME(num, q, a1, a2);
	response.send(mbti_test.HTML(body));
});

router.get('/result', function(request, response){
	console.log('/result', request.cookies)
	console.log('/result', request.signedCookies)
	if (request.signedCookies.answers && request.signedCookies.answers.length === 12) {
		var cookie = request.signedCookies.answers;
		var ei = parseInt(cookie[0]) + parseInt(cookie[4]) + parseInt(cookie[8])
		var ns = parseInt(cookie[1]) + parseInt(cookie[5]) + parseInt(cookie[9])
		var tf = parseInt(cookie[2]) + parseInt(cookie[6]) + parseInt(cookie[10])
		var pj = parseInt(cookie[3]) + parseInt(cookie[7]) + parseInt(cookie[11])
		var result = ''
		if (ei <= 4)
			result += 'e'
		else result += 'i'
		if (ns <= 4)
			result += 'n'
		else result += 's'
		if (tf <= 4)
			result += 't'
		else result += 'f'
		if (pj <= 4)
			result += 'p'
		else result += 'j'
	}
	response.cookie('answers', '', {
		maxAge: 0
	})
    var mbti = result;
    data = rData[mbti];
    const des = mbti_result.DES(data);
    const body = mbti_result.HOME(data, des);
	response.send(mbti_result.HTML(body));
});

module.exports = router;