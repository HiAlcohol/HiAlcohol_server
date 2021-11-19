var mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'qwerty123',
	database: 'hialcohol'
});

db.connect();
module.exports = db;