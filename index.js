'use strict';
//core
var seven = module.exports = require('seven-core');

seven.config.merge({

});

seven.cli = {};

seven.cli.name = 'sv';

seven.cli.commender = null;

seven.cli.info = fis.util.readJSON(_dirname + '/package.json');

seven.cli.help = function(type){
    type===undefined||type='';
    var content = [
        '',
        ' 使用方法: ' + seven.cli.name + '' + ty,
    ]
}
seven.cli.help.commands = ['release','clear','pack','tmpl','mock'];

seven.cli.version = function(){
    var content = []
}

seven.cli.run = function(arg){

    var  arg1 = arg[2];
    if(arg.length<3 || arg1 === '-h' || arg1 === '--help'){
        seven.cli.help();
    } else if(arg1 ==='-v' || arg1 === '--version'){
        seven.cli.version();
    }else if( arg1[0] === '-'){
        seven.cli.help();
    } else {
        var commander = seven.cli.commender = require('commender');
        var cmd = fis.require('command', argv[2]);
        cmd.register(
            commander
                .command(cmd.name || first)
                .usage(cmd.usage)
                .description(cmd.desc)
        );
        commander.parse(argv);
    }


}