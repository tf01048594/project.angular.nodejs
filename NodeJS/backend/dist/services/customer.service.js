"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_dao_1 = require("../dao/customer.dao");
class CustomerService {
    constructor() {
        this.customerDao = new customer_dao_1.CustomerDao();
    }
    findAll() {
        return this.customerDao.findAll();
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map