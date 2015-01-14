var Config = function() {
    this.defaultFilename = "resbotroid.json";

    this.defaultValues = {
        convertCommand: "",
        resFolder: "",
        convertSource: "xhdpi",
        convertDestination: ["hdpi", "mdpi", "ldpi"],
        reizeConfig: {
            xhdpi: 2,
            hdpi: 1.5,
            mdpi: 1,
            ldpi: 0.75
        },
        optimize: false,
        tinypngApiKey: ""
    };

    this.inquirerQuestions = [
        {
            type: "input",
            name: "resFolder",
            message: "Resources folder location",
            default: this.defaultValues.resFolder
        },
        {
            type: "input",
            name: "convertSource",
            message: "Convert from resolution",
            default: this.defaultValues.convertSource
        }
    ];
};

Config.prototype.generate = function (config, callback) {
    var inquirer = require('inquirer');

    
};

module.exports = new Config();
