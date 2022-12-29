const mongoose = require('mongoose');
const Product = require('./Product');

const WarrantySchema = new mongoose.Schema({
    idProduct: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required: true,
    },
    idDistributor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Distributor,
        required: true,
    },
    idServiceCenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ServiceCenter,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    receivedDate: {
        type: Date,
        required: true,
    },
    completedDay: {
        type: Date,
        required: true,
    },
    result: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("Warranty", WarrantySchema);