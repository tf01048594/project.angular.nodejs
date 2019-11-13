import express from 'express';
import { Route, Routes } from "./routes";
import { CustomerController } from "./controller/customer.controller";
import { json, urlencoded } from "body-parser";
require('dotenv').config();
require('dotenv').config();

const util = require('util')
const mysql = require('mysql')
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());


const appConnectionPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// Ping database to check for common exception errors.
appConnectionPool.getConnection((err, connection) => {
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
    if (connection) {
        connection.release();
        startServer();
      }
    
    return
})

// Promisify for Node.js async/await.
appConnectionPool.query = util.promisify(appConnectionPool.query)

export default appConnectionPool;

function startServer(){
  const env = process.env.NODE_ENV || "development";



  app.use(`/api/customers`, new CustomerController().getRouter());
  app.get(`/api/customer`,function (req,res){
    res.json({"test" : "test"});
  })
  app.get(`/api/`,function (req,res){
    res.send("TEST 2");
  })
  //   app.all("/*", function(req, res, next) {
  //     // Just send the index.html for other files
  //     res.sendFile("index.html", { root: frontendFolder });
  //   });
  // } else {
  //   app.get("/", function(req, res) {
  //     res.send(
  //       "This is where the server will serve the frontend app on production!"
  //     );
  //   });
  // }

  app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
  });

}


