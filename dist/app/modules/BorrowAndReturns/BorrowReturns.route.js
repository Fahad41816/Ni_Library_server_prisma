"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowReturnRoute = void 0;
const express_1 = __importDefault(require("express"));
const BorrowReturns_controller_1 = require("./BorrowReturns.controller");
const route = express_1.default.Router();
route.post('/borrow', BorrowReturns_controller_1.borrowReturnController.createBorrowBook);
route.post('/return', BorrowReturns_controller_1.borrowReturnController.addReturnBook);
route.get('/borrow/overdue', BorrowReturns_controller_1.borrowReturnController.getDueDateBook);
exports.BorrowReturnRoute = route;
