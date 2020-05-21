const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'lbn0628...',
  database: 'my_app',
  port: 3306
});

connection.connect();

module.exports = connection;
