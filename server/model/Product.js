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
    brand: {
        type: String,
        require:true,
    },
    model: {
        type: String,
        require: true,
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
    owner: {
        type: String,
        require: false,
    },
    status: {
        type: String,
        require: true,
    }

}, { timestamps: true });
module.exports = mongoose.model("Product", ProductSchema);