const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const noteData = require('../db/db.json');

module.exports = (app) => {

    // API GET Request
    app.get('/api/notes/', (req, res) => {
        res.json(noteData);
    });

    // API POST Request
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4();
        noteData.push(newNote);
        fs.writeFileSync('./db/db.json', JSON.stringify(noteData), (err) => {
            if (err) throw err;
        })
        res.json(newNote);
    });

    //API DELETE Request
    app.delete('/api/notes/:id', (req, res) => {
        let newNoteData = noteData.filter((note) => note.id != req.params.id);
        fs.writeFileSync('./db/db.json', JSON.stringify(newNoteData), (err) => {
            if (err) throw err;
        })
        res.json(true);
    });
}