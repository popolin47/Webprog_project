const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', // Change this to your database host
  user: 'username', // Change this to your database username
  password: 'password', // Change this to your database password
  database: 'database_name' // Change this to your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Perform a query
connection.query('SELECT * FROM your_table', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end();
