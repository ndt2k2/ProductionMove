const mongoose = require('mongoose');

const ServiceCenterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ServiceCenter", ServiceCenterSchema);