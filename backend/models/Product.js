import mongoose from "mongoose"

export const ProductSchema = new mongoose.Schema({
    title: { type: String},
    desc: { type: String},
    price: { type: Number},
    category: { type: String },
    img: { type: String},
},
{ timestamps: true }
);