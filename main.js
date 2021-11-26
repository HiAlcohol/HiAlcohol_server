const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const indexRouter = require('./routes/indexRouter.js')
const passport = require('passport')
const KaKaoStrategy = require('passport-kakao').Strategy

passport.use(new KaKaoStrategy({
		clientID: '989236d695e051a00be147f5a2d11274',
		clientSecret: '',
		callbackURL: 'localhost:3000'
	},
	(accessToken, refreshToken, profile, done) => {
		console.log(profile);
		// 사용자의 정보는 profile에 들어있다.
		// User.findOrCreate(..., (err, user) => {
		//   if (err) { return done(err) }
		//   return done(null, user)
		// })
	  }
));


// parse application/x-www-form-urlencoded
// 사용자가 요청할 때 마다 호출
app.use(bodyParser.urlencoded({extended: false}));

// 정적 파일 (css, js) 경로 등록
// public 아래에 정적 파일 정리
app.use('/public', express.static( __dirname + '/public'));
// app.use('/topic', topicRouter);

app.use('/', indexRouter);

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