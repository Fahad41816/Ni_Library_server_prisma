import { PrismaClient } from "@prisma/client"
import { TBook } from "./Book.interface"

const prisma = new PrismaClient()

// create book 
const getAllBookIntoDb = async() =>{

    const Result = await prisma.books.findMany()
    return Result

}

// get all book data 
const createBookIntoDb = async(bookData: TBook) => {

    const Result = await prisma.books.create({
        data: bookData 
    })

    return Result

} 

// get single book 
const getSigleBookIntoDb = async(bookId : string) => {

    const Result = await prisma.books.findFirstOrThrow({
        where: {
            bookId : bookId
        }
    })

    return Result

} 
 
 

// update book data 
const updateBookIntoDb =  async(id: string, BookData: Partial<TBook>) => {

    const Result = await prisma.books.update({
        where: {
            bookId: id
        },
        data: BookData
    })

    return Result

}

// delete book data 
const deletBookIntodb = async(id: string) => {
    
    const Result = await prisma.books.delete({
        where: {
            bookId: id
        }
    })

    return Result

} 

export const BookService = {
    getAllBookIntoDb,
    getSigleBookIntoDb,
    createBookIntoDb,
    updateBookIntoDb,
    deletBookIntodb
}