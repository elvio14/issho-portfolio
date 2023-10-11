import express from "express"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const router = express.Router()

let transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 587,
    secure: false,
    auth: {
        user: process.env.FORWARD_USER,
        pass: process.env.FORWARD_PASS,
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true,
    logger: true
})

router.post('/', async (req, res) => {
    const email = req.body.email
    const order = req.body.order
    const amount = req.body.amount
    try{
        const info = await transporter.sendMail({
            from: '"Issho Bakery" <order@isshobakery.com>',
            to: `${email}`,
            subject: `Confirmation for Order ${order}`,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <img src="https://res.cloudinary.com/dy6sxilvq/image/upload/v1696694205/ISSHO_Icon_green_72dpi_salhyz.png"
                 alt="issho logo" style="width: 90px; height: auto;">
                <p>Thank you for your order!<br><br>
                <b>Order# : ${order}</b><br><br>
                    Please complete the payment via e-transfer with the details below:<br><br>
                    to: isshobakery@gmail.com<br>
                    amount: $${amount}<br>
                    note: ${order} <br><br>
    
                    Thank you!<br><br>
    
                    If you have any questions about the order, please email us at isshobakery@gmail.com
                </p>
            </body>
            </html>
            `
        })
        
        res.status(200).json(`Email sent to ${email}`)
        
    }
    catch(err){
        console.error(err)
        res.status(500).json(err.message)
    }
})

router.get('/test', (req,res) =>{
    try{
        const name = req.body.name
        const secret = process.env.SECRET_TEST
        res.status(200).json(`Hello ${name}, ${secret}!`)
    } catch{
        res.status(500).json("Test failed")
    }
})

export {router}