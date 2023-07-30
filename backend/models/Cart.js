import mongoose from "mongoose"

export const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    products: [{ 
        productTitle: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
        price: {
            type: Number
        }
    }],
},
{ timestamps: true }
);
