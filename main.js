const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const indexRouter = require('./routes/indexRouter.js')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const oauthRouter = require('./routes/loginRouter.js');

const boardRouter = require('./routes/boardRouter.js')
const search_listRouter = require('./routes/search_listRouter.js');
const passport = require('passport');
const flash = require('connect-flash');

const passportConfig = require('./passport');
const cookieParser = require('cookie-parser');

const boardProcessRouter = require('./routes/boardProcessRouter.js')
const db = require('./config/db.js')

app.use(cookieParser('ras'));
passportConfig();
// parse application/x-www-form-urlencoded
// 사용자가 요청할 때 마다 호출
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
	secret: 'ras',
	resave: false,
	secure: false,
	saveUninitialized: true,
	store: new MySQLStore({
		host: "localhost",
		port: 3306,
		user: "root",
		password: "mysql1234",
		database: "hialcohol"
	})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// 정적 파일 (css, js) 경로 등록
// public 아래에 정적 파일 정리
app.use('/public', express.static( __dirname + '/public'));
app.use('/oauth', oauthRouter);

app.use('/', indexRouter);

app.use('/board', boardRouter);

app.use('/search_list', search_listRouter);

app.use('/board_process', boardProcessRouter);


app.get('/logout', function(req, res) {
	req.logout();
	req.session.save(() => {
		res.redirect('/');
	})
});

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