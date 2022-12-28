const mongoose = require('mongoose');

const FactorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ManufactureFactory", FactorySchema);