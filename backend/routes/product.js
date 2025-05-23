import { verifyTokenAndAdmin } from "./verifyToken.js"
import {ProductSchema} from "../models/Product.js"
import express from "express"
import mongoose from "mongoose";


const Product = mongoose.model("Product", ProductSchema)
const router = express.Router();

//CREATE
router.post("/", verifyTokenAndAdmin, async (req,res)=>{
    const {title, desc, price, category, img} = req.body
    const newProduct = new Product({
        title,
        desc,
        price,
        category,
        img
    })

    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
        
    }catch(err){
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:_id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params._id, {
            $set: req.body
        },
        {new: true}
        );
        res.status(200).json(updatedProduct);
    } catch(err) {
        res.status(500).json("error updating");
    }
});

router.delete("/:id", verifyTokenAndAdmin, async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Product has been deleted."});
    }catch(err){
        res.status(500).json({message: "Server error."})
    }
});

// GET PRODUCT
router.get("/find/:id", async (req,res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{
        let products;

        if (qNew) {
            products = await Product.find().sort({createdAt:-1}).limit(5);
        }else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory],
                }
            })
        }else {
            products = await Product.find();
        }
        res.status(200).json(products);
    }catch(err){
        res.status(500).json(err);
    }
});

export {router}