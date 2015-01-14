#!/usr/bin/env node

var program = require('commander');

var config = require('./config');

var pkg = require('../package.json');

program.version(pkg.version);

program
    .command('exec [<config>]')
    .description('Executes resbotroid')
    .action(function (configFile, command) {
        console.log('executing ' + command);
    });


// Config
program
    .command('init [<config>]')
    .description('Initiates a new configuration file')
    .action(function (file, command) {
        config.generate(null, function (config, file) {
            console.log('file');
        });
    });


// No available command
program
    .command('*')
    .action(function (command) {
        console.log('');
        console.log(' error: unknown command `' + command + '`');
        console.log('');
        console.log(' type resbotroid -h for help');
        console.log('');
    });


program.parse(process.argv);

if (program.args.length === 0) {
    program.help();
}
