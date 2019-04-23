const mongoose = require('mongoose');

// Map global promise to get rid of warning
mongoose.promise = global.Promise;
// connect to db
const db = mongoose.connect('mongodb://localhost:27017/jawabs', {
    useNewUrlParser: true
});

// Import models
const algo = require('./models/algo');
const bug = require('./models/bugs');

// Enable Commands
const execSync = require('child_process').execSync;

// Other vars
let bugCount = 1;

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

// Push algo
const pushAlgo = (name) => {
    execSync(`git add ${name}.py  && git commit -m "${name} updated" && git push origin master`, { encoding: 'utf-8' });
    console.info(`${name} pushed to github`);
}

// Run algo
const runAlgo = (name, dataset) => {
    execSync(`zipline run -f ./algos/${name}.py --state-file ./algos/${name}.state --realtime-bar-target ~/zipline-algos/realtime-bars/ --broker ib --broker-uri localhost:7496:1232 --bundle ${dataset} --data-frequency minute`, { encoding: 'utf-8' });
    console.info(`${name} backtest complete`);
}

// Ingest dataset
const ingestSet = (dataset) => {
    execSync(`zipline-live ingest -b ${dataset}`, { encoding: 'utf-8' });
    console.info(`The ${name} dataset has been ingested`);
}

// Report a bug
const reportBug = (Bug, bugCount) => {
    bug.create(Bug).then(Bug => {
        // execSync('git push issue', { encoding: 'utf-8' });
        bugCount++;
        console.info(`Bug #${bugCount} Reported`);
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
    listAlgos,
    pushAlgo,
    runAlgo,
    ingestSet,
    reportBug
}
