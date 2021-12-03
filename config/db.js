var mysql = require('mysql');

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'qwerty123',
	database: 'hialcohol'
});

// const db = new mysql({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'qwerty123',
// 	database: 'hialcohol'
// });

db.connect();
module.exports = db;