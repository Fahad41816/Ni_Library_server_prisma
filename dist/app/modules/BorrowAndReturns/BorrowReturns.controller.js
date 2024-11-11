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
exports.borrowReturnController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const BorrowReturns_service_1 = require("./BorrowReturns.service");
const createBorrowBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = req.body;
    const Result = yield BorrowReturns_service_1.borrowReturnService.createborrowBookIntoDb(Data);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Book borrowed successfully",
        data: Result,
    });
}));
const addReturnBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = req.body.borrowId;
    const Result = yield BorrowReturns_service_1.borrowReturnService.addReturnBookIntoDb(Data);
    res.status(201).json({
        success: true,
        status: 200,
        message: "Book returned successfully",
    });
}));
const getDueDateBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield BorrowReturns_service_1.borrowReturnService.checkOverDueBook();
    const currentDate = new Date();
    const findOverDueBook = result.filter((data) => {
        const borrowDate = new Date(data.borrowDate);
        console.log(borrowDate);
        console.log(borrowDate);
        const daysDifference = (currentDate.getTime() - borrowDate.getTime()) / (1000 * 60 * 60 * 24); // Calculate days difference
        return daysDifference > 14;
    });
    const modifiedData = findOverDueBook.map((data) => {
        return {
            borrowId: data.borrowId,
            bookTitle: data.bookid.title,
            borrowerName: data.memberid.name,
            overdueDays: Math.floor((currentDate.getTime() - new Date(data.borrowDate).getTime()) / (1000 * 60 * 60 * 24)) - 14
        };
    });
    res.status(200).json({
        success: true,
        status: 200,
        message: "Overdue borrow list fetched",
        data: modifiedData,
    });
}));
exports.borrowReturnController = {
    createBorrowBook,
    addReturnBook,
    getDueDateBook,
};
