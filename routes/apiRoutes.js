const fileFunctions = require('../util/fsfunc')
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {

    // API GET Request
    app.get('/api/notes/', (req, res) => {
        const noteData = fileFunctions.readDatafile();
        res.json(noteData);
    });

    // API POST Request
    app.post('/api/notes', (req, res) => {
        const newNote = req.body;
        newNote.id = uuidv4();
        const noteData = fileFunctions.readDatafile();
        noteData.push(newNote);
        fileFunctions.writeDatafile(noteData);
        res.json(true);
    });

    //API DELETE Request
    app.delete('/api/notes/:id', (req, res) => {
        const noteData = fileFunctions.readDatafile();
        let newNoteData = noteData.filter((note) => note.id != req.params.id);
        fileFunctions.writeDatafile(newNoteData);
        res.json(true);
    });
}