import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import {router as userRoute} from "./routes/user.js"
import {router as authRoute} from "./routes/auth.js"
import {router as productRoute} from "./routes/product.js"
import {router as cartRoute} from "./routes/cart.js"
import {router as orderRoute} from "./routes/order.js"
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
import cors from 'cors'
import { upload } from './multer.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import {v2 as cloudinary} from 'cloudinary'

export const app = express()
app.use(express.json());
dotenv.config();
app.use((req, res, next) =>{
    // res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token')
    next()
})

app.use(express.urlencoded({extended: true}))

const corsOptions = {
    allowedHeaders: ['Content-Type', 'token'],
    origin: ['http://localhost:5000/', 'https://vercel.com/andrewelvio14-gmailcom/issho-portfolio/3ZkRJsXaYMmazZEyvtSdtZWywSom']
}
app.use(cors(corsOptions))

app.post('/uploads', upload.array('files', 12), (req,res) => {
    console.log(req.files)
    res.send('Files uploaded.')
  })

app.use('/uploads', express.static('uploads'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const UPLOADS_DIRECTORY = path.join(__dirname, './uploads')

app.get('/uploaded-filenames', (req,res)=> {
    fs.readdir(UPLOADS_DIRECTORY, (err, files) => {
        if (err){
            return res.status(500).json(err)
        }

        const fileNames = files.filter(file => {
            return fs.statSync(path.join(UPLOADS_DIRECTORY, file)).isFile()
        })

        res.json(fileNames)
    })
})

cloudinary.config({ 
    cloud_name: 'dy6sxilvq', 
    api_key: '494449584914118', 
    api_secret: process.env.CLOUDINARY_API_SECRET
  })

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file.path

    cloudinary.uploader.upload(file, (error,result)=>{
        if (error){
            return res.status(500).json({error: error.message})
        }
        res.json(result)
    })
})


mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err)
    });

app.get("/api/test", ()=>{
    console.log("test is successful!!")
});




app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);



app.listen(process.env.PORT || 5000, () =>{
    console.log('backend server is running!')
});