import express from 'express'  
import { borrowReturnController } from './BorrowReturns.controller'

const route = express.Router()


route.post('/borrow', borrowReturnController.createBorrowBook)
route.post('/return', borrowReturnController.addReturnBook) 
route.get('/borrow/overdue', borrowReturnController.getDueDateBook) 

export const BorrowReturnRoute = route