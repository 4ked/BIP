const mongoose = require('mongoose');

// Map global primse to get rid of warning
mongoose.promise = global.Promise;
// connect to db
const db = mongoose.connect('mongodb://localhost:27017/bip', {
    useNewUrlParser: true
});

// Import models
const algo = require('./models/algo');

/************************
 *******          *******
 ******* Commands *******
 *******          *******
 ***********************/

// Add algo
const addAlgo = (algorithm) => {
    algo.create(algorithm).then(algorithm => {
        console.info('New Algo Added');
        mongoose.connection.close();
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

// Update algo
const updateAlgo = (_id, algorithm) => {
    algo.updateOne({_id}, algorithm)
        .then(algorithm => {
            console.info('Algo Updated');
            mongoose.connection.close();
        });
}

// Remove algo
const removeAlgo = (_id) => {
    algo.deleteOne({_id})
        .then(algorithm => {
            console.info('Algo Removed');
            mongoose.connection.close();
        });
}

// List algos
const listAlgos = () => {
    algo.find()
        .then(algorithms => {
            console.info(algorithms);
            console.info(`${algorithms.length} algos`);
            mongoose.connection.close();
        });
}

/************************
 *******         ********
 ******* Exports ********
 *******         ********
 ***********************/

// Export all Methods
module.exports = {
    addAlgo,
    findAlgo,
    updateAlgo,
    removeAlgo,
    listAlgos
}