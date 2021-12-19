var mysql = require('mysql');
const env = require('./env');

const db = mysql.createConnection({
	host: env.host,
	user: env.user,
	password: env.password,
	database: env.database,
	dateStrings: 'date'
});

db.connect();
module.exports = db;