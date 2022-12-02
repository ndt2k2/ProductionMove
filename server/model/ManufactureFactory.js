const mongoose = require('mongoose');

const FactorySchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ManufactureFactory", FactorySchema);