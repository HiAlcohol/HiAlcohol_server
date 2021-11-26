const express = require('express');
const router = express.Router();
const passport = require('passport')
const KaKaoStrategy = require('passport-kakao').Strategy

passport.use('kakao', new KaKaoStrategy({
	clientID: '989236d695e051a00be147f5a2d11274',
	clientSecret: '',
	callbackURL: '/oauth/kakao/callback'
},
(accessToken, refreshToken, profile, done) => {
	console.log(profile);
	console.log('accessToken: ' + accessToken);
	console.log(`refreshToken: ${refreshToken}`);
	// 사용자의 정보는 profile에 들어있다.
	// User.findOrCreate(..., (err, user) => {
	//   if (err) { return done(err) }
	//   return done(null, user)
	// })
  }
));
router.get('/kakao', passport.authenticate('kakao'));

router.get('/kakao/callback', passport.authenticate('kakao', {
	failureRedirect: '/',
}), (request, response) => {
	response.redirect('/');
});

module.exports = router;