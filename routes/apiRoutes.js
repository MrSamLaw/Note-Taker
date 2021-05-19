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
        res.json(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(noteData), (err) => {
            if (err) throw err;
        })
    });

}