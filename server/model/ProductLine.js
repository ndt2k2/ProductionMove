const mongoose = require('mongoose');

const ProductLineSchema = new mongoose.Schema({
    prouctLine: {
        type: String,
        require: true,
    },
    textDescription: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ProductLine", ProductLineSchema);