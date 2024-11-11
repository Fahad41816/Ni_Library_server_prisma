import express from 'express'
import { BookController } from './Books.controller'

const route = express.Router()


route.get('/', BookController.getAllBook)
route.get('/:bookId', BookController.getSingleBook)
route.post('/', BookController.createBook)
route.put('/:bookId', BookController.updateBook)
route.delete('/:bookId', BookController.deleteBook)

export const BookRouter = route