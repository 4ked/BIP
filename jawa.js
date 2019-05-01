#!/usr/bin/env node

const K = require('kleur');

const program = require('commander');
const { prompt } = require('inquirer');
const { 
    addAlgo, 
    findAlgo,
    updateAlgo,
    removeAlgo,
    listAlgos,
    pushAlgo,
    runAlgo,
    ingestSet,
    reportBug
} = require('./index');

// Enable Commands from terminal intexts
const execSync = require('child_process').execSync;

// Algo questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Algorithm Name:'
    },
    {
        type: 'input',
        name: 'dataset',
        message: 'Dataset to be used:'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author First Name:'
    },
    {
        type: 'input',
        name: 'dateCreated',
        message: 'Date Created:'
    }
]

const bugQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title the bug'
    },
    {
        type: 'input',
        name: 'body',
        message: 'Describe in detail the issue you are encountering'
    }
]

// Setup
program
    .version(K.yellow('1.0.0'))
    .usage(K.gray("\n [options] [<command>]"))
    .description(K.yellow('   ******************************** \n   *                              *\n   *     Jawa Backtesting CLI     * \n   *                              * \n   ********************************'))

/************************
 *****              *****
 ***** Command Defs *****
 *****              *****
 ***********************/

// Add command
program
    .command(K.white('add   '))
    .alias(K.green('a'))
    .description(K.cyan('Add an algorithm'))
    .action(() => {
        prompt(questions).then(answers => addAlgo(answers));
    });

// Find command
program
    .command(K.white('find <name> '))
    .alias(K.green('f'))
    .description(K.cyan('Find an algorithm by name'))
    .action(name => findAlgo(name));

// Update command
program
    .command(K.white('update <_id> '))
    .alias(K.green('u'))
    .description(K.cyan('Update an algorithm'))
    .action(_id => {
        prompt(questions).then(answers => updateAlgo(_id, answers));
    });

// Remove command
program
    .command(K.white('remove <_id> '))
    .alias(K.green('rm'))
    .description(K.cyan('Remove an algorithm'))
    .action(_id => removeAlgo(_id));

// List command
program
    .command(K.white('list  '))
    .alias(K.green('l'))
    .description(K.cyan('List all algorithms on file'))
    .action(() => listAlgos());

// Push command
program
    .command(K.white('push <name> '))
    .alias(K.green('p'))
    .description(K.cyan('Push an algorithm to github'))
    .action(name => pushAlgo(name));

// Run command
program
    .command(K.white('run <name> <dataset> '))
    .alias(K.green('r'))
    .description(K.cyan('Run a backtest on an algorithm'))
    .action(name => runAlgo(name, dataset));

// Ingest command
program
    .command(K.white('ingest <dataset> '))
    .alias(K.green('i'))
    .description(K.cyan('Ingest a new dataset'))
    .action((dataset) => ingestSet(dataset))

// Report command
program
    .command(K.white('report  '))
    .alias(K.green('rep'))
    .description(K.cyan('Report a bug'))
    .action(() => {
        // need to alert that user should check issues on github before reporting a new bug
        prompt(bugQuestions).then(answers => reportBug(answers, bugCount));
    });

program.parse(process.argv)
      
    