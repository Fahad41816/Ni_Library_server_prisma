import { PrismaClient } from "@prisma/client" 

const prisma = new PrismaClient()

const createborrowBookIntoDb = async(borrowData : any) => {

    const result = await prisma.borrowRecords.create({
        data: borrowData
    })

    return result
  
}

const addReturnBookIntoDb = async (id: string) => {

    const result = await prisma.borrowRecords.update({
      where: {
        borrowId: id,
      },
      data: {
        returnDate: new Date(),
      },
    });
  
    return result;

};

const checkOverDueBook = async() => {

    const result = await prisma.borrowRecords.findMany({
        where: {
            returnDate: null
        },
        include:{
            bookid: true,
            memberid: true
        }
    })
    console.log(result)

    return result
 
}
  


export const borrowReturnService = {
    createborrowBookIntoDb,
    addReturnBookIntoDb,
    checkOverDueBook
}