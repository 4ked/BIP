#!/usr/bin/env node

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
    .version('1.0.0')
    .usage("[options] [<command>]")
    .description('Backtest Management System')

/************************
 *****              *****
 ***** Command Defs *****
 *****              *****
 ***********************/

// Add command
program
    .command('add')
    .alias('a')
    .description('Add an algorithm')
    .action(() => {
        prompt(questions).then(answers => addAlgo(answers));
    });

// Find command
program
    .command('find <name>')
    .alias('f')
    .description('Find an algorithm by name')
    .action(name => findAlgo(name));

// Update command
program
    .command('update <_id>')
    .alias('u')
    .description('Update an algorithm')
    .action(_id => {
        prompt(questions).then(answers => updateAlgo(_id, answers));
    });

// Remove command
program
    .command('remove <_id>')
    .alias('rm')
    .description('Remove an algorithm')
    .action(_id => removeAlgo(_id));

// List command
program
    .command('list')
    .alias('l')
    .description('List all algorithms on file')
    .action(() => listAlgos());

// Push command
program
    .command('push <name>')
    .alias('p')
    .description('Push an algorithm to github')
    .action(name => pushAlgo(name));

// Run command
program
    .command('run <name> <dataset>')
    .alias('r')
    .description('Run a backtest on an algorithm ')
    .action(name => runAlgo(name, dataset));

// Ingest command
program
    .command('ingest <dataset>')
    .alias('i')
    .description('Ingest a new dataset')
    .action((dataset) => ingestSet(dataset))

// Report command
program
    .command('report')
    .alias('rep')
    .description('Report a bug')
    .action(() => {
        // need to alert that user should check issues on github before reporting a new bug
        prompt(bugQuestions).then(answers => reportBug(answers, bugCount));
    });

program.parse(process.argv)
      
    