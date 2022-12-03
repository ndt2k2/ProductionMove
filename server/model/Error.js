const mongoose = require('mongoose');

const ErrorSchema = new mongoose.Schema({
    ID: {
        type: String,
        require: true,
    },
    error: {
        type: String,
        require: false,
    },
    status: {
        type: Number,
        require: false,
    }
}, { timestamps: true });
module.exports = mongoose.model("Error", ErrorSchema);