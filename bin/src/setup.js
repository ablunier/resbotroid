
var Setup = function(config, inquirer) {
    this.config = config;
    
    this.inquirer = inquirer;
};

Setup.prototype = {
    
    setCurrentConfig: function (config) {
        
    },
    
    generateConfig: function (generatedCallback) {
        console.log('generate config...');
        var self = this;
        
        self.inquirer.prompt(self.config.inquirer.questions, function (answers) {
            var newConfig = {};
            
            if (answers.resFolder) {
                newConfig.resFolder = answers.resFolder;
            }
            
            if (answers.convertSource) {
                newConfig.convertSource = answers.convertSource;
            }
            
            console.log(JSON.stringify(newConfig, null, '\t'));
            
            self.inquirer.prompt([
                {
                    type: "confirm",
                    name: "ok",
                    message: "Confirm config file?"
                }
            ], function (answers) {
                if (answers.ok) {
                    generatedCallback(null, null);
                }
            });
        });
        
    }
    
};


module.exports = Setup;
