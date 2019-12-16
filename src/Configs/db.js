const mysql = require ('mysql');
const db = mysql.createConnection ({
  // host: process.env.HOST,
  // user: process.env.USER,
  // password: process.env.PASSWORD,
  // database: process.env.DATABASE,

  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'go-hire-app'

});

db.connect (err => {
  if (err) throw err;
});

module.exports = db;
