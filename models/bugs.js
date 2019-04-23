const mongoose = require('mongoose');

// Algo Schema
const bugSchema = mongoose.Schema({
    title: { type: String },
    number: { type: Number },
    body: { type: String }
});


module.exports = mongoose.model('Bug', bugSchema);