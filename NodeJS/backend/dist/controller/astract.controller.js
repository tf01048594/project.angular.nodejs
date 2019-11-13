"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AbstractController {
    constructor() {
        this.router = express_1.Router();
        this.setRoutes();
    }
    getRouter() {
        return this.router;
    }
}
exports.AbstractController = AbstractController;
//# sourceMappingURL=astract.controller.js.map