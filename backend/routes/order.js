import { verifyTokenAndAdmin, verifyToken, verifyTokenAndAuthorization } from "./verifyToken.js"
import {OrderSchema} from "../models/Order.js"
import express from "express"
import mongoose from "mongoose";

const router = express.Router();
const Order = mongoose.model("Order", OrderSchema)
//CREATE
router.post("/", async (req,res)=>{
    const newOrder = new Order(req.body)

    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:_id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const updatedOrder = await Order.findByIdAndUpdate(
        req.params._id, {
            $set: req.body
        },
        {new: true}
        );
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json("error updating");
    }
});

router.get('/latest-order', async (req,res) => {
    try{
        const latestOrder = await Order.findOne().sort('-createdAt').limit(1)
        res.status(200).json(latestOrder)
    } catch(error){
        res.status(500).json(error)
    }
})


//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted.");
    }catch(err){
        res.status(500).json(err)
    }
});

// // GET USER ORDER
router.get("/find/:userId", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        const orders = await Order.find({userId: req.params.userId});
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const orders = await Order.find().sort({_id: -1}).exec();
        res.status(200).json(orders);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: {$gte: previousMonth}}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                    sales: "$amount",
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales"},
                },
            },
        ]);
        res.status(200).json(income);
    } catch(err){
        res.status(500).json(err);
    }
});

export {router}