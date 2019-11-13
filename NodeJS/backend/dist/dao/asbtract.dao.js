"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../app"));
class AbstractDao {
    constructor() {
        this.connectionPool = app_1.default;
    }
}
exports.AbstractDao = AbstractDao;
//# sourceMappingURL=asbtract.dao.js.map