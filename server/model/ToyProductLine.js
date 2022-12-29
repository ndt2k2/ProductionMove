const mongoose = require('mongoose');

const ProductLineToSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    seats: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    },
    xylanh: {
        type: String,
        required: true,
    },
    hp: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ProductLineTo", ProductLineToSchema);