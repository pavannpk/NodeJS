const fs = require('fs');

let writeFile = (filename, content) => {
    fs.writeFile(filename, content, 'utf-8', (err) => {
        if (err) throw err;
        console.log('data is written');
    });
};

module.exports = {
    writeFile
}
