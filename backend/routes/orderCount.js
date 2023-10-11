import express from "express"
import mongoose from "mongoose";

const router = express.Router()

const orderCountSchema = new mongoose.Schema({
    count: {type: Number},
    id: {type: String}
})

const OrderCount = mongoose.model("orderCount", orderCountSchema)

router.get("/", async (req,res) => {
    try{
        const currentNumber = await OrderCount.findOne({id: "main"})
        res.status(200).json(currentNumber.count)
    }catch(err){
        res.status(500).json(err.message)
    }
})

router.put("/update", async (req,res) => {
    try{
        const updatedNumber = req.body.current + 1
        const updateData = await OrderCount.updateOne({id: "main"},
        {
            count : updatedNumber
        },
        {
            new: true,
            upsert: false
        })
        res.status(200).json(updateData)
    }catch(err){
        res.status(500).json(err.message)
    }
})

router.post("/init", async (req,res) => {
    
    const count = req.body.count
    const id = req.body.id
    const newCount = new OrderCount({
            count: count,
            id: id
    })

    try{
        const savedCount = await newCount.save()
        res.status(200).json(savedCount)
    } catch(err) {
        res.status(500).json(err.message)
    }
})

export {router}