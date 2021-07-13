//import fs module read and write the file.
//we do async and sync.
const fs = require('fs');

//synchronus way
//---------------------------------------------------------------------------------------------

//i want to read fro one file
let fileContent = fs.readFileSync('syncmsg.txt', 'utf-8');
console.log(fileContent);

//---------------------------------------------------------------------------------------------

//i want to read this file into new file
let newContent = `this is the new contnet : ${fileContent}`;

//create a file
//-------------------------------------------------------------------------------
//there will be a path and what content and utf-8
fs.writeFileSync('syncwritefile.txt', newContent, 'utf-8');
console.log('data written to the file');

//and read the newly created file
let newone = fs.readFileSync('syncwritefile.txt', 'utf-8');
console.log(newone);
