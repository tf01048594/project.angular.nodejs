"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_service_1 = require("../services/customer.service");
const astract_controller_1 = require("./astract.controller");
class CustomerController extends astract_controller_1.AbstractController {
    constructor() {
        super();
        this.customerService = new customer_service_1.CustomerService();
    }
    setRoutes() {
        this.router.route("/").get(this.findAll.bind(this));
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req;
            console.log(body);
            //let customers : Customer[] = await this.customerService.findAll();
            //return customers;
        });
    }
}
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map