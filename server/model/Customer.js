const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    numPhone: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("Customer", CustomerSchema);