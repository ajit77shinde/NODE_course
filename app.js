const chalk = require('chalk');
const yargs =require('yargs');
const notes = require('./notes');

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
        const addNotes = notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Removing the note!');
        const removeNote = notes.removeNote(argv.title)
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