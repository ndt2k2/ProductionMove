const mongoose = require('mongoose');

const ServiceCenterSchema = new mongoose.Schema({
    ID: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("ServiceCenter", ServiceCenterSchema);