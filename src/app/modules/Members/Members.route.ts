import express from 'express' 
import { memberController } from './Members.controller'

const route = express.Router()


route.get('/', memberController.getAllMember)
route.get('/:memberId', memberController.getSingleMember)
route.post('/', memberController.createMember)
route.put('/:memberId', memberController.updateMember)
route.delete('/:memberId', memberController.deleteMember)

export const MemverRoute = route