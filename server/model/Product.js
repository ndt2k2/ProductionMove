const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required:true,
    },
    color: {
        type: String,
        required: true,
    },
    factory: {
        type: String,
        required: true,
    },
    distributor: {
        type: String,
        required: false,
    },
    serviceCenter: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: false,
    },
    warrantyPeriod: {
        type: String,
        required: false,
    },
    deliveryTime: {
        type: Date,
        required: false,
    }
    

}, { timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);