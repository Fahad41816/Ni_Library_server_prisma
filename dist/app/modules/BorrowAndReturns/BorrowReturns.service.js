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
exports.borrowReturnService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createborrowBookIntoDb = (borrowData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.borrowRecords.create({
        data: borrowData
    });
    return result;
});
const addReturnBookIntoDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.borrowRecords.update({
        where: {
            borrowId: id,
        },
        data: {
            returnDate: new Date(),
        },
    });
    return result;
});
const checkOverDueBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.borrowRecords.findMany({
        where: {
            returnDate: null
        },
        include: {
            bookid: true,
            memberid: true
        }
    });
    console.log(result);
    return result;
});
exports.borrowReturnService = {
    createborrowBookIntoDb,
    addReturnBookIntoDb,
    checkOverDueBook
};
