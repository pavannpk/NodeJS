//load / import any module
//both are in core module by default
const os = require('os');//operating system
const fs = require('fs');//file system
const path = require('path');

//__dirname it is global variable in core module
console.log(`dirname : ${__dirname}`);//upto path what we want to execute

//__filname it is also a global variable in core module
console.log(`filename : ${__filename}`);//along with the directory

//DIRPATH INSIDE A FOLDEr
let dirpath = path.join(__dirname,'data','employee');
console.log(`dirapth : ${dirpath}`);

//total memory in laptop
let totalmemory = os.totalmem();
console.log(`totalmemory is : ${totalmemory}`);

//freememory in our laptop
let freememory = os.freemem();
console.log(`freememory is : ${freememory}`);

//dir name
console.log(`home dir is : ${os.homedir()}`);//C:\Users\Acer

//system name
console.log(`host name is : ${os.hostname()}`);

//syayem info
console.log(`username is : ${os.userInfo().username}`);

//create a file using fs module
fs.writeFile('message.txt','good mng','utf-8',(err) => {
    if(err) throw err;
    console.log('data is saved');
});

//
let hahha = 'I love photography, photography is not clickng pictures it is nothing but captures the emotion of people';
fs.writeFile('message.txt', hahha, 'utf-8', (err) => {
    if(err) throw err;
    console.log('About my photography');
});

//read this file by using fs module
fs.readFile('message.txt','utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
});

//create a file inside /data/employee folder
let insidefolder = path.join(__dirname,'data','employee','message2.txt');
let phototip = 'first imagin what u want to take after that check it came as you expect or not.';
fs.writeFile(insidefolder,phototip,'utf-8', (err) => {
    if(err) throw err;
    console.log('data is saved');
});

//read njsnote.js and write to "program.js" in employee folder.
fs.readFile(path.join(__dirname,'njsnote.js'),'utf-8',(err,data) => {
    if(err) throw err;
    fs.writeFile(path.join(__dirname,'data','employee','program.txt'),data,'UTF-8',(err) => {
        if(err) throw err;
        console.log('njsnote read to program.txt');
    });
});


