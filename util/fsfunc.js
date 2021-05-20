const fs = require('fs');

const readDatafile = () => {
    return JSON.parse(fs.readFileSync('./db/db.json'))
}

const writeDatafile = (data) => {
    fs.writeFileSync('./db/db.json', JSON.stringify(data));
}

module.exports = { readDatafile, writeDatafile }