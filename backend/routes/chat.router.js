import express from 'express'
const router = express.Router()
import { newGroupChat,getMyChats,getMyGroups,addMember } from '../controllers/chat.controller.js'
import isAuthenticated from '../middlewares/auth.js'

router.post('/new',isAuthenticated,newGroupChat)
router.get('/my',isAuthenticated,getMyChats)
router.get('/my/groups',isAuthenticated,getMyGroups)
router.put('/addmember',isAuthenticated,addMember)


export default router;