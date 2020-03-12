const fs = require('fs');
const chalk = require('chalk');


const getNotes = function () {
    return 'Your notes......'
}

const removeNote = function (title) {
    const notes = loadNotes();

    const filteredNotes = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length > filteredNotes.length){
        console.log(chalk.green.inverse('Note Removed!') );
        storeNotes(filteredNotes);
    }else{
        console.log(chalk.red.inverse('Note not found!') );
    }

}

const addNote = function (title, body) {
    const notes = loadNotes();
    const duplicateNote = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        });
        storeNotes(notes);
        console.log(chalk.green.inverse('New note added!'));

    } else {
        console.log(chalk.red.inverse('Note title taken!!'))
    }
}

const storeNotes = function (data) {
    const dataJson = JSON.stringify(data)
    fs.writeFileSync('notes.json', dataJson);

}
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        // console.log(e);
        return [];
    }
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}