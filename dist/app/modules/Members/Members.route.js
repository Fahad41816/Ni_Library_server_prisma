"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemverRoute = void 0;
const express_1 = __importDefault(require("express"));
const Members_controller_1 = require("./Members.controller");
const route = express_1.default.Router();
route.get('/', Members_controller_1.memberController.getAllMember);
route.get('/:memberId', Members_controller_1.memberController.getSingleMember);
route.post('/', Members_controller_1.memberController.createMember);
route.put('/:memberId', Members_controller_1.memberController.updateMember);
route.delete('/:memberId', Members_controller_1.memberController.deleteMember);
exports.MemverRoute = route;
