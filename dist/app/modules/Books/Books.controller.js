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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const Books_service_1 = require("./Books.service");
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
// get all book data
const getAllBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Books_service_1.BookService.getAllBookIntoDb();
    res.status(200).json({
        success: true,
        status: 200,
        message: "Books retrieved successfully",
        data: Result,
    });
}));
// get single book data
const getSingleBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Books_service_1.BookService.getSigleBookIntoDb(req.params.bookId);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Books retrieved successfully",
        data: Result,
    });
}));
// create book
const createBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = req.body;
    const Result = yield Books_service_1.BookService.createBookIntoDb(Data);
    res.status(201).json({
        success: true,
        status: 201,
        message: "Book created successfully",
        data: Result,
    });
}));
const updateBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = req.body;
    const id = req.params.bookId;
    const Result = yield Books_service_1.BookService.updateBookIntoDb(id, Data);
    res.status(201).json({
        success: true,
        status: 200,
        message: "Book updated successfully",
        data: Result,
    });
}));
const deleteBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.bookId;
    const Result = yield Books_service_1.BookService.deletBookIntodb(id);
    res.status(201).json({
        success: true,
        status: 200,
        message: "Book successfully deleted",
    });
}));
exports.BookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBook,
    deleteBook,
};
