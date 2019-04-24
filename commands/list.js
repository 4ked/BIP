/*
    IN DEVELOPMENT
*/

/*
const mongoose = require('mongoose');

// Import algo model
const algo = require('./models/algo');

module.exports = function listCommand(program) {
	'use strict';

    // List algos function
    const listAlgos = () => {
        algo.find()
            .then(algorithms => {
                console.info(algorithms);
                console.info(`${algorithms.length} algos`);
                mongoose.connection.close();
            });
    }

	program
        .command('list')
        .alias('l')
        .description('List all algorithms on file')
        .action(() => listAlgos());
};
*/