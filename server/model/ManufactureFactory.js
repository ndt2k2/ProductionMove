const mongoose = require('mongoose');

const FactorySchema = new mongoose.Schema({
    ID: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ManufactureFactory", FactorySchema);