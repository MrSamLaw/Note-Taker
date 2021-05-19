const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const noteData = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes/', (req, res) => {
        res.json(noteData);
    });
    app.post('/api/notes/', (req, res) => {
        console.log("here");
        const newNote = req.body;
        newNote.id = 5;
        console.log(newNote);
    });
}