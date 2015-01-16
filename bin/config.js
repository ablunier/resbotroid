var config = {};

// Config default filename
config.filename = 'resbotroid.json';

// Resbotroid config default values
config.options = {};
config.options.debug = true;
config.options.convertCommand = '';
config.options.resFolder = '',
config.options.convertSource = 'xhdpi';
config.options.convertDestination = ['hdpi', 'mdpi', 'ldpi'];
config.options.resizeRatio = {
    xhdpi: 2,
    hdpi: 1.5,
    mdpi: 1,
    ldpi: 0.75
};
config.options.tinypng = {
    active: false,
    apiKey: ''
};

// Inquirer config
config.inquirer = {};
config.inquirer.questions = [
    {
        type: 'input',
        name: 'resFolder',
        message: 'Resources folder location',
        default: config.options.resFolder
    },
    {
        type: 'input',
        name: 'convertSource',
        message: 'Convert from resolution',
        default: config.options.convertSource
    },
    {
        type: 'checkbox',
        name: 'convertDestination',
        message: 'Convert to resolutions',
        choices: config.options.convertDestination,
        default: config.options.convertDestination
    },
    {
        type: 'confirm',
        name: 'tinypng',
        message: 'Compress with TinyPNG',
        default: config.options.tinypng.active
    },
    {
        type: 'input',
        name: 'apiKey',
        message: 'TinyPNG API Key'
    }
];

module.exports = config;
