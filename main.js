const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const passport = require('passport');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/indexRouter.js')
const oauthRouter = require('./routes/loginRouter.js');
const likeRouter = require('./routes/likeRouter');
const boardRouter = require('./routes/boardRouter.js')
const search_listRouter = require('./routes/search_listRouter.js');
const mapRouter = require('./routes/mapRouter');
const passportConfig = require('./passport');
const boardProcessRouter = require('./routes/boardProcessRouter.js');
const boardUpdateProcessRouter = require('./routes/boardUpdateProcessRouter.js');
const boardDeleteProcessRouter = require('./routes/boardDeleteProcessRouter.js');
const myboardRouter = require('./routes/myboardRouter.js');
const env = require('./config/env.js');

const port = env.port;

// var jsdom = require('jsdom');
// const { JSDOM } = jsdom;
// const { document } = (new JSDOM('')).window;
// global.document = document;

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
		host: env.host,
		port: 3306,
		user: env.user,
		password: env.password,
		database: env.database
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

app.use('/map', mapRouter);

app.use('/board_process', boardProcessRouter);

app.use('/board_update_process', boardUpdateProcessRouter);

app.use('/board_delete_process', boardDeleteProcessRouter);

app.use('/likes', likeRouter);

app.use('/myboard', myboardRouter);

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