import express from "express"
import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js"
import { MailtrapClient } from "mailtrap"
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
                Order# : ${order}
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

router.post('/trap', (req,res) => {
    const TOKEN = process.env.FORWARD_PASS
    const SENDER_EMAIL = "order@isshobakery.com"
    const RECIPIENT_EMAIL = req.body.email

    const client = new MailtrapClient({ token: TOKEN });

    const sender = { name: "Issho Bakery", email: SENDER_EMAIL };

    const order = req.body.order
    const amount = req.body.amount

    try{
        client
        .send({
          from: sender,
          to: [{ email: RECIPIENT_EMAIL }],
          subject: "Issho Order Confirmation",
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
              Order# : ${order}
                  Please complete the payment via e-transfer with the details below:<br><br>
                  to: isshobakery@gmail.com<br>
                  amount: $${amount}<br>
                  note: ${order} <br><br>
  
                  Thank you!<br><br>
  
                  If you have any questions about the order, please email us at isshobakery@gmail.com
              </p>
          </body>
          </html>
          `,
        })
        .then(console.log)
        .catch(console.error);

        res.status(200).json(`Email sent to ${RECIPIENT_EMAIL}`)
    } catch(err) {
        res.status(500).json(err.message)
    }
    
})

export {router}