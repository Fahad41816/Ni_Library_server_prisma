"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllRouters = void 0;
const express_1 = __importDefault(require("express"));
const Books_route_1 = require("../app/modules/Books/Books.route");
const Members_route_1 = require("../app/modules/Members/Members.route");
const BorrowReturns_route_1 = require("../app/modules/BorrowAndReturns/BorrowReturns.route");
const router = express_1.default.Router();
const Routers = [
    {
        path: '/books',
        api: Books_route_1.BookRouter
    },
    {
        path: '/members',
        api: Members_route_1.MemverRoute
    },
    {
        path: '/',
        api: BorrowReturns_route_1.BorrowReturnRoute
    }
];
Routers.map((route) => {
    router.use(route.path, route.api);
});
exports.AllRouters = router;
