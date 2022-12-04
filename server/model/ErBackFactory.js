const mongoose = require('mongoose');

const ErBackFactorySchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    iDManufactureFactory: {
        type: String,
        required: true,
    },
    idServiceCenter: {
        type: String,
        required: true,
    },
    time : {
        type: Date,
        default: Date.now,
    }
}, { timestamps: true });
module.exports = mongoose.model("ErBackFactory", ErBackFactorySchema);