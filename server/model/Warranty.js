const mongoose = require('mongoose');

const WarrantySchema = new mongoose.Schema({
    ID: {
        type: String,
        require: true,
    },
    error: {
        type: String,
        require: false,
    },
    status: {
        type: String,
        require: false,
    },
    idDistributor: {
        type: String,
        require: true,
    },
    idServiceCenter: {
        type: String,
        require: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("Warranty", WarrantySchema);