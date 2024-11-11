"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const Books_controller_1 = require("./Books.controller");
const route = express_1.default.Router();
route.get('/', Books_controller_1.BookController.getAllBook);
route.get('/:bookId', Books_controller_1.BookController.getSingleBook);
route.post('/', Books_controller_1.BookController.createBook);
route.put('/:bookId', Books_controller_1.BookController.updateBook);
route.delete('/:bookId', Books_controller_1.BookController.deleteBook);
exports.BookRouter = route;
