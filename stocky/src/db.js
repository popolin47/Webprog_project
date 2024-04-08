const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    database:'stocky',
    user:'stocky',
    password:'jajayjin25474'
});
module.exports = connection;