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
exports.MembersService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create book 
const getAllMembersIntoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.members.findMany();
    return Result;
});
// get all book data 
const createMemberIntoDb = (memberData) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.members.create({
        data: memberData
    });
    return Result;
});
// get single book 
const getSiglememberIntoDb = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.members.findFirstOrThrow({
        where: {
            memberId: bookId
        }
    });
    return Result;
});
// update book data 
const updateMemberIntoDb = (id, memberData) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.members.update({
        where: {
            memberId: id
        },
        data: memberData
    });
    return Result;
});
// delete book data 
const deletMemberIntodb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield prisma.members.delete({
        where: {
            memberId: id
        }
    });
    return Result;
});
exports.MembersService = {
    getAllMembersIntoDb,
    getSiglememberIntoDb,
    createMemberIntoDb,
    updateMemberIntoDb,
    deletMemberIntodb
};
