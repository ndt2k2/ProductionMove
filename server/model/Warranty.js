const mongoose = require('mongoose');

const WarrantySchema = new mongoose.Schema({
    idProduct: {
        type: String,
        required: true,
    },
    idDistributor: {
        type: String,
        required: true,
    },
    idServiceCenter: {
        type: String,
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