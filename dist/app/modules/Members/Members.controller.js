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
exports.memberController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const Members_service_1 = require("./Members.service");
// get all book data
const getAllMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Members_service_1.MembersService.getAllMembersIntoDb();
    res.status(200).json({
        success: true,
        status: 200,
        message: "Members retrieved successfully",
        data: Result,
    });
}));
// get single book data
const getSingleMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Result = yield Members_service_1.MembersService.getSiglememberIntoDb(req.params.memberId);
    res.status(200).json({
        success: true,
        status: 200,
        message: "Member retrieved successfully",
        data: Result,
    });
}));
// create book
const createMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = req.body;
    const Result = yield Members_service_1.MembersService.createMemberIntoDb(Data);
    res.status(201).json({
        success: true,
        status: 201,
        message: "Member created successfully",
        data: Result,
    });
}));
const updateMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Data = req.body;
    const id = req.params.memberId;
    const Result = yield Members_service_1.MembersService.updateMemberIntoDb(id, Data);
    res.status(201).json({
        success: true,
        status: 200,
        message: "Member updated successfully",
        data: Result,
    });
}));
const deleteMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.memberId;
    const Result = yield Members_service_1.MembersService.deletMemberIntodb(id);
    res.status(201).json({
        success: true,
        status: 200,
        message: "Member successfully deleted",
    });
}));
exports.memberController = {
    createMember,
    getAllMember,
    getSingleMember,
    updateMember,
    deleteMember,
};
