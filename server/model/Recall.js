const mongoose = require('mongoose');

const RecallSchema = new mongoose.Schema({
    ID: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: true,
    }
}, { timestamps: true });
module.exports = mongoose.model("Recall", RecallSchema);