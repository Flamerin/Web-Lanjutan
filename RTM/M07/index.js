var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user:'me',
    password:'secret',
    database:'my-db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields){
    if(error) throw error;
    console.log('The solution is: ', result[0].solution);
});

connection.end();