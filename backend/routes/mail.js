import express from "express"
import nodemailer from "nodemailer"
import SMTPTransport from "nodemailer/lib/smtp-transport/index.js"

const router = express.Router()

const transporter = nodemailer.createTransport(new SMTPTransport({
    host: "smtp.forwardemail.net",
    port: 587,
    secure: false,
    auth: {
        user: "order@isshobakery.com",
        pass: "d6bbd03aeec6b2551c0d9c9b",
    },
}))

router.post('/', async (req, res) => {
    const email = req.body.email
    const order = req.body.order
    const amount = req.body.amount
    try{
        const info = await transporter.sendMail({
            from: '"Issho Bakery" <order@isshobakery.com>',
            to: email,
            subject: `Confirmation for Order ${order}`,
            html: `<img src="https://res.cloudinary.com/dy6sxilvq/image/upload/v1696694205/ISSHO_Icon_green_72dpi_salhyz.png"
            alt="issho logo" style="width: 90px; height: auto;">
           <p>Thank you for your order!<br><br>
            Order# : ${order}

               Please complete the payment via e-transfer with the details below:<br><br>
               to: isshobakery@gmail.com<br>
               amount: $${amount}<br>
               note: ${order} <br><br>
       
               Thank you!<br><br>
       
               If you have any questions about the order, please email us at isshobakery@gmail.com
           </p>`
        })
        if(info.ok){
            res.status(200).json(`Email sent to ${email}`)
        }
    }
    catch(err){
        console.error(err)
        res.status(500).json(err.message)
    }
})

export {router}