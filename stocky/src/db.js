const mysql = require("mysql");
var connection = mysql.createConnection({
    host: 'localhost',
    database:'stocky',
    user:'stocky_final',
    password:'Mahidol20'
});
module.exports = connection;

var connectionM = mysql.createConnection({
    host: 'localhost',
    database: '',
    user: 'stocky',
    password: 'Mingtar2546'
})