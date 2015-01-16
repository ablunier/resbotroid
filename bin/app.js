#!/usr/bin/env node

var program = require('commander');
var inquirer = require('inquirer');

var resbotroid = require('./src');

var pkg = require('../package.json');
var config = require('./config');

program.version(pkg.version);

// Do the stuff
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
        console.log('init...');
        
        var setup = new resbotroid.Setup(config, inquirer);
        setup.setCurrentConfig(null);
        
        setup.generateConfig(function (config, file) {
            console.log('config generated');
            
            console.log('init finished');
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
