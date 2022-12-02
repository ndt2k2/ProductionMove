const mongoose = require('mongoose');

const WarrantySchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    status: {
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
}, { timestamps: true });
module.exports = mongoose.model("Warranty", WarrantySchema);