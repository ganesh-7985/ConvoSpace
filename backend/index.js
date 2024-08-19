import express from 'express'
import cors from 'cors'
import multer from 'multer'
import connectDB from './utils/connectDB.js'   
import errorMiddleware from './middlewares/error.js'
import cookieParser from 'cookie-parser'
import { createUsers } from './seeders/users.js'

import userRouter from './routes/user.router.js'
import chatRouter from './routes/chat.router.js'    

const app = express();

app.use(express.json())
app.use(cors())
app.use(multer().single('avatar'))
app.use(cookieParser())

createUsers(10)

app.use('/api/users',userRouter)
app.use('/api/chats',chatRouter)


app.use(errorMiddleware)

app.listen(3000,()=>{
    connectDB()
    console.log('Server is running on port 3000')
})