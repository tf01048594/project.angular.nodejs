"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./controller/customer.controller");
require('dotenv').config();
require('dotenv').config();
const util = require('util');
const mysql = require('mysql');
const app = express_1.default();
const port = 3000;
const appConnectionPool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
// Ping database to check for common exception errors.
appConnectionPool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.');
        }
    }
    if (connection) {
        connection.release();
        startServer();
    }
    return;
});
// Promisify for Node.js async/await.
appConnectionPool.query = util.promisify(appConnectionPool.query);
exports.default = appConnectionPool;
function startServer() {
    app.use(`/customers`, new customer_controller_1.CustomerController().getRouter());
    //dasjd
    app.get('/', (req, res) => {
        res.send('Hello world');
    });
    app.listen(port, err => {
        if (err) {
            return console.error(err);
        }
        return console.log(`server is listening on ${port}`);
    });
}
//# sourceMappingURL=app.js.map