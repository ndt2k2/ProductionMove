const mongoose = require('mongoose');

const DistributorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("Distributor", DistributorSchema);