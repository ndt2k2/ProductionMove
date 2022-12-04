const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
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
    deliveryTime: {
        type: Date,
        required: false,
    }
    // ,
    // color: {
    //     type: String,
    //     require: true,
    // },
    // factory: {
    //     type: String,
    //     require: true,
    // },
    // distributor: {
    //     type: String,
    //     require: false,
    // },
    // serviceCenter: {
    //     type: String,
    //     require: false
    // },
    // status: {
    //     type: String,
    //     require: true,
    // },
    // image: {
    //     type: String,
    //     require: true,
    // },
    // owner: {
    //     type: String,
    //     require: false,
    // },
    // warrantyPeriod: {
    //     type: String,
    //     require: false,
    // },
    // deliveryTime: {
    //     type: Date,
    //     require: false,
    // }
    

}, { timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);