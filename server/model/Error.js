const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("Error", ErrorSchema);