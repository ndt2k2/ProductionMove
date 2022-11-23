const mongoose = require('mongoose');

const DistributorSchema = new mongoose.Schema({
    ID: {
        
    }
}, { timestamps: true });
module.exports = mongoose.model("Distributor", DistributorSchema);