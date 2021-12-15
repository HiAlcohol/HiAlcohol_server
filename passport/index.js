const passport = require('passport');
const kakao = require('./kakaoStrategy');
const User = require('../models/User');
const db = require('../config/db');

module.exports = () => {
	passport.serializeUser((user, done) => {
		console.log('serializeUser:', user);
		// console.log('')
		done(null, user.id);
	});

	passport.deserializeUser((id, done) => {
		db.query(`SELECT * FROM user WHERE id=?`, [id], function(err, result) {
			if (err) throw err
			console.log('deserializeUser: ', result[0]);
			done(null, result[0]);
		})
	})

	kakao();
};