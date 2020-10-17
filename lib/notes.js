const { notStrictEqual } = require('assert');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4} = require('uuid');

function createNote(body, noteArray)
{
    const note = 
    {
        "title": body.title,
        "text": body.text,
        "id": uuidv4()
    };
    noteArray.push(note);
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(noteArray));
    return noteArray;
}

module.exports = 
{
    createNote
};