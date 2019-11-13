"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_controller_1 = require("./controller/customer.controller");
var HttpMethod;
(function (HttpMethod) {
    HttpMethod["GET"] = "get";
    HttpMethod["POST"] = "post";
    HttpMethod["DELETE"] = "delete";
    HttpMethod["PATH"] = "path";
    HttpMethod["UPDATE"] = "update";
})(HttpMethod || (HttpMethod = {}));
class Routes {
    constructor() {
        this.customerController = new customer_controller_1.CustomerController();
    }
    customerRoutes() {
        return [
            {
                path: "/api/customer",
                method: HttpMethod.GET,
                action: (req, res) => this.customerController.findAll(req, res)
            }
        ];
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map