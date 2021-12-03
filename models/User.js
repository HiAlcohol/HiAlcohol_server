const db = require('../config/db');

module.exports = {
	findOrCreate: function(profile, done) {
		db.query(`SELECT * FROM user WHERE kakaoid = ?`, [profile.id], function (error, result) {
			if (error) throw error
			console.log('select result:',result);
			if (result.length === 0) {
				db.query(`INSERT INTO user (kakaoid, profile_image, nickname) VALUES(?, ?, ?)`,
					[profile.id, profile.properties.thumbnail_image, profile.properties.nickname], 
					function (error2, result2) {
						if (error2) throw error2
						console.log('insert result: ', result2)
						db.query(`SELECT * FROM user WHERE kakaoid = ?`, [profile.id], function (err3, result3) {
							if (err3) throw err3;
							return done(null, result3[0]);
						});
				})
			}
			// return done(null, {'id': result.id, 'profile': result.profile_image, 'nickname': result.nickname});
			return done(null, false, {message: 'existed user'});
		});
	},
	findOne: function(kakaoid) {
		db.query(`SELECT * FROM user WHERE kakaoid = ?`, [kakaoid],
			function(err, result) {
				if (err) throw err;
				console.log(result);
				var json = JSON.stringify(result[0]);
				var userinfo = JSON.parse(json);
				return userinfo;
			});
	},
	create: function (user) {
		db.query(`SELECT * FROM user WHERE kakaoid = ?`, [user.kakaoid],
			function(err1, result1) {
				if (err1) throw err1;
				if (result1.length === 0) {
					db.query(`INSERT INTO user (kakaoid, profile_image, nickname) VALUES(?, ?, ?)`,
					[user.kakaoid, user.profile_image, user.nickname], function (err, result) {
						if (err) throw err;
						db.query(`SELECT * FROM user WHERE kakaoid = ?`, [user.kakaoid], function (err2, result2) {
							if (err2) throw err2;
							var json = JSON.stringify(result2[0]);
							var userinfo = JSON.parse(json);
							return userinfo;
						});
					});
				}
			});
	}
};