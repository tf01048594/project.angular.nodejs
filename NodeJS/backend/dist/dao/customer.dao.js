"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const asbtract_dao_1 = require("./asbtract.dao");
class CustomerDao extends asbtract_dao_1.AbstractDao {
    constructor() {
        super();
    }
    ;
    findAll() {
        let customers = [];
        let sql = "SELECT * FROM customer";
        console.log("Hello");
        this.connectionPool.query(sql, function (err, result) {
            //if (err) throw new Error(err);
            console.log(result);
            customers = result;
        });
        return customers;
    }
}
exports.CustomerDao = CustomerDao;
//# sourceMappingURL=customer.dao.js.map