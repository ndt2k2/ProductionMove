const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
    product: {
        type: String,
        require: true,
    },
    error: {
        type: String,
        require: false,
    },
    Quantity: {
        type: Number,
        require: false,
    }
}, { timestamps: true });
module.exports = mongoose.model("Error", ErrorSchema);