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
import {v2 as cloudinary} from 'cloudinary'
import nodemailer from 'nodemailer'

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

// cloudinary.config({ 
//     cloud_name: 'dy6sxilvq', 
//     api_key: '494449584914118', 
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure:true
//   })

// app.post("/image/upload", upload.single('file'), (req, res) => {
//     const file = req.file.path

//     cloudinary.v2.uploader.unsigned_upload(file, {upload_preset: "tngkldzn" }, {folder: "issho"})
//     .then((error,result)=>{
//         if (error){
//             return res.status(500).json({error: error.message})
//         }
//         res.json(result)
//     })
// })

// app.post(`${cloudURL}/image/destroy`, (req, res) => {
//     const public_id = req.body.publicId

//     cloudinary.v2.uploader.destroy(`${public_id}`)
//     .then((error,result)=>{
//         if (error){
//             return res.status(500).json({error: error.message})
//         }
//         console.log(result)
//     })
// })

// app.get('/getimages', (req,res) => {
//     cloudinary.v2.api.resources_by_asset_folder('issho', {max_results: 100})
//         .then(
//             (error, result) => {
//                 if(error) {
//                     return res.status(400).json({error})
//                 }
//                 res.status(200).json(result.resources)
//             }
//         )
// }
// )

const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 587,
    secure: false,
    auth: {
        user: "order@isshobakery.com",
        pass: process.env.FORWARD_PASS
    }
})

app.post('/sendMail', async (req, res) => {
    const email = req.body.email
    const order = req.body.order
    const info = await transporter.sendMail({
        from: '"Issho Bakery" <order@isshobakery.com>',
        to: email,
        subject: `Confirmation for Order ${order}`,
        html: `<img src="https://res.cloudinary.com/dy6sxilvq/image/upload/v1696694205/ISSHO_Icon_green_72dpi_salhyz.png"
        alt="issho logo" style="width: 90px; height: auto;">
       <p>Thank you for your order!<br>
           Please complete the payment via e-transfer with the details below:<br><br>
           to: isshobakery@gmail.com<br>
           amount: $25<br>
           note: ordernumber <br><br>
   
           Thank you!<br><br>
   
           If you have any questions about the order, please email us at isshobakery@gmail.com
       </p>`
    })
}

)

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