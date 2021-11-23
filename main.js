const express = require('express');
const app = express();
const port = 3000;
const template = require('./template/home.js');
const bodyParser = require('body-parser');
const home = require('./template/home.js');

app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => {
	const body = home.HOME();
	res.send(home.HTML(body));
});

// 정적 파일 (css, js) 경로 등록
// public 아래에 정적 파일 정리
app.use('/public', express.static( __dirname + '/public'));
// app.use('/topic', topicRouter);
// app.use('/', indexRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});