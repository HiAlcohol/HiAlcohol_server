const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const indexRouter = require('./route/indexRouter.js')
const boardRouter = require('./route/boardRouter.js')
const search_listRouter = require('./routes/search_listRouter.js')


// parse application/x-www-form-urlencoded
// 사용자가 요청할 때 마다 호출
app.use(bodyParser.urlencoded({extended: false}));

// 정적 파일 (css, js) 경로 등록
// public 아래에 정적 파일 정리
app.use('/public', express.static( __dirname + '/public'));
// app.use('/topic', topicRouter);

app.use('/', indexRouter);

app.use('/board', boardRouter);
app.use('/search_list', search_listRouter);

app.use(function(req, res, next) {	
    res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});