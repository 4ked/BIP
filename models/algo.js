const mongoose = require('mongoose');

// Algo Schema
const algoSchema = mongoose.Schema({
    author: { type: String},
    dateCreated: { type: Date, default: '1/01/2019' },
    name: { type: String }
});


module.exports = mongoose.model('Algo', algoSchema);