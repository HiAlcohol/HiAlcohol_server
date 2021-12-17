const passport = require('passport');
const KaKaoStrategy = require('passport-kakao').Strategy

const User = require('../models/User');

module.exports = () => {
	passport.use('kakao', new KaKaoStrategy({
		clientID: 'b305a1173710e4ff765e09b5a62e314c',
		clientSecret: '',
		callbackURL: '/oauth/kakao/callback'
	}, async (accessToken, refreshToken, profile, done) => {
		try {
			User.findOrCreate(profile._json, done);
		} catch(err) {
			console.log('err',err);
			return done(err);
		}
	}
	));
}