const program = require('commander');
const { addAlgo, findAlgo } = require('./index');

program
    .version('1.0.0')
    .description('Backtest Management System')

program
    .command('add <author> <dateCreated>')
    .alias('a')
    .description('Add an algorithm')
    .action((author, dateCreated) => {
        addAlgo({ author, dateCreated });
    });

program
    .command('find <name>')
    .alias('f')
    .description('Find an algorithm by name')
    .action(name => findAlgo(name));

program.parse(process.argv);



