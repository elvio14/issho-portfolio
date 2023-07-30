import mongoose from "mongoose"

export const OrderSchema = new mongoose.Schema({
    products: [{ 
        title: { type: String,},
        quantity: {type: Number},
    }],
    total: { type: Number},
    email: {type: String},
    fullName: {type: String},
    flexibleDelivery: {type: Boolean},
    deliveryDate: {type: String},
    address: { type: String},
    postalCode: {type: String},
    status: { type: String, default: "pending"},
},
{ timestamps: true }
);
