#!/usr/bin/env node

const program = require('commander');
const { prompt } = require('inquirer');
const { 
    addAlgo, 
    findAlgo,
    updateAlgo,
    removeAlgo,
    listAlgos
} = require('./index');

// Algo questions
const questions = [
    {
        type: 'input',
        name: 'author',
        message: 'Author First Name'
    },
    {
        type: 'input',
        name: 'dateCreated',
        message: 'Date Created'
    }
]

program
    .version('1.0.0')
    .description('Backtest Management System')

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
    .alias('r')
    .description('Remove an algorithm')
    .action(_id => removeAlgo(_id));

// List command
program
    .command('list')
    .alias('l')
    .description('List all algorithms on file')
    .action(() => listAlgos());


program.parse(process.argv);