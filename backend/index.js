import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import {router as userRoute} from "./routes/user.js"
import {router as authRoute} from "./routes/auth.js"
import {router as productRoute} from "./routes/product.js"
import {router as cartRoute} from "./routes/cart.js"
import {router as orderRoute} from "./routes/order.js"
import {router as mailRoute} from "./routes/mail.js"
import {router as orderCountRoute} from "./routes/orderCount.js"
import { Buffer } from 'buffer'
globalThis.Buffer = Buffer
import cors from 'cors'

export const app = express()
app.use(express.json());
dotenv.config();
app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, token')
    next()
})

app.use(express.urlencoded({extended: true}))

const corsOptions = {
    allowedHeaders: ['Content-Type', 'token'],
    origin: [
    'http://localhost:5000/', 
    'https://vercel.com/andrewelvio14-gmailcom/issho-portfolio/3ZkRJsXaYMmazZEyvtSdtZWywSom',
    'https://issho-deploy-465e55c6c2f1.herokuapp.com/api/products'
]
}
app.use(cors(corsOptions))

app.use('/upload', express.static('upload'))

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
app.use("/api/mail", mailRoute);
app.use("/api/count", orderCountRoute);



app.listen(process.env.PORT || 5000, () =>{
    console.log('backend server is running!')
});