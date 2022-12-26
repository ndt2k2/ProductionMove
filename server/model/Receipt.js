const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({
    idCustomer: {
        type: String,
        required: true,
    },
    idDistributor: {
        type: String,
        required: true,
    },
    idProduct: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    orderDate: {
        type: Date,
        required: true,
    },
    completionDate: {
        type: Date,
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
}, { timestamps: true });
module.exports = mongoose.model("Receipt", ReceiptSchema);