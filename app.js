const chalk = require('chalk');
const yargs =require('yargs');

//customize yargs version
yargs.version('1.1.2');

//create yargs commands

yargs.command({
    command: 'add',
    describe: 'add new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }, body: {
            describe: 'note body',
            demandOption:true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title: ',argv.title);
        console.log('Body: ',argv.body);
        
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('Removing the note!');
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'list the note',
    handler: function(){
        console.log('list the notes!');
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function(){
        console.log('Read the note!');
    }
})
yargs.parse();
// console.log(yargs.argv);