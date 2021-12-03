const express = require('express');
const router = express.Router();
const passport = require('passport')
const KaKaoStrategy = require('passport-kakao').Strategy
const User = require('../models/User');
const db = require('../config/db');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

passport.serializeUser(function(user, done) {
	console.log('passport session save: ', user.id);
	done(null, user.id);	
});

passport.deserializeUser(function (id, done) {
	console.log('passport session get id: ', id);
	var userinfo;
	// db.query(`SELECT * FROM user WHERE id=?`, [id], function(err, result) {
	// 	if (err) {
	// 		console.log('mysql error');
	// 		throw err
	// 	}
	// 	console.log('deserializeUser mysql result: ', result);
	// 	var json = JSON.stringify(result[0]);
	// 	var userinfo = JSON.parse(json);
	// 	return userinfo;
	// })
	done(null, id);
});

router.get('/login', function(req, res, next) {
	console.log('/login')
	var user_id = '';
	console.log(req.cookies);
	console.log(req.session)
	if (req.cookies['kakaoid'] !== undefined) {
		console.log(req.cookies);
	}
	
})

passport.use('kakao', new KaKaoStrategy({
	clientID: '989236d695e051a00be147f5a2d11274',
	callbackURL: '/oauth/kakao/callback'
}, async (accessToken, refreshToken, profile, done) => {
	console.log(profile);
	console.log('accessToken: ' + accessToken);
	console.log(`refreshToken: ${refreshToken}`);
	try {
		const exUser = await User.findOne(profile.id);
		if (exUser) {
			return done(null, exUser);
		} else {
			const newUser = await User.create({
				kakaoid: profile.id,
				profile_image: profile._json.properties.thumbnail_image,
				nickname: profile.username
			});
			return done(null, newUser);
		}
	} catch(err) {
		console.log('err',err);
		return done(err);
	}
	// user.findOrCreate(profile._json, done);
  }
));

router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
	failureRedirect: '/oauth/login?fail',
}), (request, response) => {
	console.log('req: ', request.user);
	response.redirect('/success');
});
// router.get('/kakao/callback', function (req, res, next) {
// 	passport.authenticate('kakao', function (err, user) {
// 	  console.log('passport.authenticate(kakao)실행');
// 	  if (!user) { return res.redirect('http://localhost:3000/login'); }
// 	  req.logIn(user, function (err) { 
// 		 console.log('kakao/callback user : ', user);
// 		 return res.redirect('http://localhost:3000/');        
// 	  });
// 	})(req, res);
//   });

// router.get('/login', function(req, res){
// 	console.log('/login');
// 	console.log(req.user);
// })

module.exports = router;