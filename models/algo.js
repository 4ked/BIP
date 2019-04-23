const mongoose = require('mongoose');

// Algo Schema
const algoSchema = mongoose.Schema({
    name: { type: String },
    dataset: { type: String },
    author: { type: String},
    description: { type: String },
    dateCreated: { type: Date, default: '11/11/1111' }
});


module.exports = mongoose.model('Algo', algoSchema);