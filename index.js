const mongoose = require('mongoose');


// Map global primse to get rid of warning
mongoose.promise = global.Promise;
// connect to db
const db = mongoose.connect('mongodb://localhost:27017/bip', {
    useNewUrlParser: true
});

// Import models
const algo = require('./models/algo');

// Add algo
const addAlgo = (algorithm) => {
    algo.create(algorithm).then(algorithm => {
        console.info('New Algo Added');
        client.close();
    });
}

// Find algo
const findAlgo = (name) => {
    // Make case insensitive
    const search = new RegExp(name, 'i');

    algo.find({$or: [{author: search}]
    }).then(algorithm => {
        console.info(algorithm);
        console.info(`${algorithm.length} matches`);
    });
}


// Export all Methods
module.exports = {
    addAlgo,
    findAlgo
}