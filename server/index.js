import express from "express";
import {createServer} from 'http'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose';
import router from './routes/main.js'
import Message from './models/Folder.js'
import path from 'path'

const app = express();
const server = createServer(app)
server.listen(process.env.PORT, ()=>console.log('start'))

try {  
  await mongoose.connect('mongodb+srv://Shugga939:Iamtracer123@cluster0.0uyxt.mongodb.net/Mailbox_project?retryWrites=true&w=majority')
} catch (e) {
  console.log(e)
}


app.use(cors({
  origin : 'http://localhost:3000',
  credentials : true
}))
app.use(express.json())
app.use('/',router)


