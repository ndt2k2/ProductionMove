const mongoose = require('mongoose');

const ProductLineSchema = new mongoose.Schema({
    productLine: {
        type: String,
        required: true,
    },
    typeFuel: {
        type: String,
        required: true,
    },
    textDescription: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ProductLine", ProductLineSchema);