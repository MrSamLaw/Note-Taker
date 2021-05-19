const fs = require('fs');

module.exports = (app) => {
    app.get('/api/notes/', (req, res) => {
        res.json('../db/db.json'));
});
}