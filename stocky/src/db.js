const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'team7',
    user: 'team7',
    password: 'EP28WL'
});
module.exports = connection;