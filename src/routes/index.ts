import express from 'express'
import { BookRouter } from '../app/modules/Books/Books.route';
import { MemverRoute } from '../app/modules/Members/Members.route';
import { BorrowReturnRoute } from '../app/modules/BorrowAndReturns/BorrowReturns.route';

const router = express.Router()

const Routers = [
    {
        path: '/books',
        api: BookRouter
    },
    {
        path: '/members',
        api: MemverRoute
    },
    {
        path: '/',
        api: BorrowReturnRoute
    }
]

Routers.map((route) => {
    router.use(route.path, route.api);
});

export const AllRouters = router