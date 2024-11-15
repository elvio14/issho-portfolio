import { verifyTokenAndAdmin } from "./verifyToken.js"
import {CartSchema} from "../models/Cart.js"
import express from "express"
import mongoose from "mongoose"

const router = express.Router()
const Cart = mongoose.model("cart", CartSchema)
//CREATE
router.post("/", async (req,res)=>{
    const newCart = new Cart(req.body)

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    }catch(err){
        res.status(500).json(err)
    }
})

//UPDATE
// router.options("/:id", async (req,res)=>{
//     try{
//         const updatedCart = await Cart.findByIdAndUpdate(
//         req.params.id, {
//             $set: req.body
//         },
//         {new: true}
//         );
//         res.status(200).json(updatedCart);
//     } catch(err) {
//         res.status(500).json("error updating");
//     }
// });


//DELETE
router.delete("/:id", async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been emptied.");
    }catch(err){
        res.status(500).json(err)
    }
});

// // GET USER CART
router.get("/find/:userId", async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL 
router.get("/", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
});

export {router}