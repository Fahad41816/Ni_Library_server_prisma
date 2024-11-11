import { PrismaClient } from "@prisma/client"
import { TMember } from "./Members.interface"
 

const prisma = new PrismaClient()

// create book 
const getAllMembersIntoDb = async() =>{

    const Result = await prisma.members.findMany()
    return Result

}

// get all book data 
const createMemberIntoDb = async(memberData: TMember) => {

    const Result = await prisma.members.create({
        data: memberData 
    })

    return Result

} 

// get single book 
const getSiglememberIntoDb = async(bookId : string) => {

    const Result = await prisma.members.findFirstOrThrow({
        where: {
            memberId : bookId
        }
    })

    return Result

} 
  
// update book data 
const updateMemberIntoDb =  async(id: string, memberData: Partial<TMember>) => {

    const Result = await prisma.members.update({
        where: {
            memberId: id
        },
        data: memberData
    })

    return Result

}

// delete book data 
const deletMemberIntodb = async(id: string) => {
    
    const Result = await prisma.members.delete({
        where: {
            memberId: id
        }
    })

    return Result

} 

export const MembersService = {
    getAllMembersIntoDb,
    getSiglememberIntoDb,
    createMemberIntoDb,
    updateMemberIntoDb,
    deletMemberIntodb
}