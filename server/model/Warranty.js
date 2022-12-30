const mongoose = require('mongoose');
const Product = require('./Product');
const Account = require("./Account");

const WarrantySchema = new mongoose.Schema({
    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required: true,
    },
    idDistributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Account,
        required: true,
    },
    idServiceCenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Account,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("Warranty", WarrantySchema);