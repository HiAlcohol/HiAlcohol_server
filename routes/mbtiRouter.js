const express = require('express');
const router = express.Router();
const mbti_start = require('../template/mbti_start.js');
const mbti_test = require('../template/mbti_test.js');
const mbti_result = require('../template/mbti_result.js');

const fs = require('fs');
const { query } = require('../config/db.js');

const qfile = fs.readFileSync('./config/question.json', 'utf8');
const rfile = fs.readFileSync('./config/result.json', 'utf8');

const qData = JSON.parse(qfile);
const rData = JSON.parse(rfile);

// console.log(qData);
// console.log(rData);

router.get('/', function(request, response){
	response.cookie('answers', '', {
		maxAge: 0
	})
  
    const body = mbti_start.HOME();
	response.send(mbti_start.HTML(body));
});

router.get('/test', function(request, response){

	// console.log('cookies:', request.cookies)
	// console.log('signedCookies:', request.signedCookies)
	var answers = request.signedCookies.answers || ''
	
	if (request.query.q >= 1 && request.query.q < 13 && request.query.a) {
		console.log('before: ', answers)
		if (answers.length == request.query.q - 1) {
			answers += String(request.query.a)
		}else {
			answers[request.query.q - 1] = String(request.query.a)
		}
		console.log(answers)
		// answers += String(request.query.a)
		
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
    const qna = mbti_test.QNA(num, q, a1, a2);
    const body = mbti_test.HOME(qna);
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
		var cockid = ''
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
	// response.cookie('answers', '', {
	// 	maxAge: 0
	// })
    var mbti = result;
	if(mbti == 'istj')
		cockid = 26
	else if(mbti == 'istp')
		cockid = 36
	else if(mbti == 'isfj')
		cockid = 37
	else if(mbti == 'isfp')
		cockid = 32

	else if(mbti == 'intj')
		cockid = 29
	else if(mbti == 'intp')
		cockid = 7
	else if(mbti == 'infj')
		cockid = 21
	else if(mbti == 'infp')
		cockid = 39
	
	else if(mbti == 'estj')
		cockid = 34
	else if(mbti == 'estp')
		cockid = 19
	else if(mbti == 'esfj')
		cockid = 38
	else if(mbti == 'esfp')
		cockid = 9

	else if(mbti == 'entj')
		cockid = 27
	else if(mbti == 'entp')
		cockid = 3
	else if(mbti == 'enfj')
		cockid = 24
	else if(mbti == 'enfp')
		cockid = 25
		
    data = rData[mbti];
	
    const des = mbti_result.DES(data);
    const body = mbti_result.HOME(data, des, cockid);
	response.send(mbti_result.HTML(body));
});

module.exports = router;