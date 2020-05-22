const mysql = require('mysql');
const connection = mysql.createConnection({
    host: '59.110.24.86',
    user: 'root',
    password: 'lbn0628...',
    database: 'my_app',
    port: 3306,
    charset: 'utf8'
});

connection.connect();

module.exports = connection;
