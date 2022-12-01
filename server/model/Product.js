const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    ID: {
        type: String,
        require: true,
        unique: true
    },
    name:{
        type: String,
        require:true,
    },
    color: {
        type: String,
        require: true,
    },
    factory: {
        type: String,
        require: true,
    },
    distributor: {
        type: String,
        require: false,
    },
    serviceCenter: {
        type: String,
        require: false
    },
    status: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    owner: {
        type: String,
        require: false,
    },
    warrantyPeriod: {
        type: String,
        require: false,
    },
    deliveryTime: {
        type: Date,
        require: false,
    }
    

}, { timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);