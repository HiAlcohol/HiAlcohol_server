const passport = require('passport');
const kakao = require('./kakaoStrategy');
const User = require('../models/User');
const db = require('../config/db');

module.exports = () => {
	passport.serializeUser((user, done) => {
		// console.log('serializeUser:', user.kakaoid);
		done(null, user.kakaoid);
	});

	passport.deserializeUser((id, done) => {
		db.query(`SELECT * FROM user WHERE kakaoid=?`, [id], function(err, result) {
			if (err) throw err
			done(null, result);
		})
	})

	kakao();
};