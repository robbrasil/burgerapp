var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '5320422',
    database: 'burgers_db'
});

connection.connect(function (err) {
    if (err) throw (err);
    console.log("Connected as id: " + connection.threadid);
});

module.exports = connection;