require('dotenv').config();
const util = require('util')
const mysql = require('mysql')
const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) connection.release()

    return
})

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query)

module.exports pool;
//CREATE
//var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
// con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });

//INSERT
// var sql = "INSERT INTO customers (name, address) VALUES ?";
// var values = [
//     ['Py', 'Linh Trung']
// ];
// con.query(sql, [values], function(err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
// });

// SELECT
// var sql = "SELECT * FROM customers";
// con.query(sql, function(err, result, fields) {
//     if (err) throw err;
//     console.log(result);
// });

//DELETE
// var sql = "DELETE FROM customers WHERE address = 'Linh Trung'";
// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
// });

//UPDATE
// var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
// });

//DROP TABLE
// var sql = "DROP TABLE customers";
// con.query(sql, function(err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
// });