const fs = require('fs');

let saveToFile = (fileName, data) => {
    fs.writeFile(fileName,data,'utf8' , (err) => {
        if(err) throw  err;
        console.log('data is saved');
    });
};

module.exports = {
    saveToFile
};