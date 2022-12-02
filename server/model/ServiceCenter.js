const mongoose = require('mongoose');

const ServiceCenterSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
d    },
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ServiceCenter", ServiceCenterSchema);