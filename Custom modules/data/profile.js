
//json.stringify() => obj to string
//json.parse() => string to obj

//load / import
const fs = require('fs');
const path =require('path');

/*//print users
let printusers = (users) => {   //1st one
    console.log(users);
};*/

//store objtect(data) in json file
let printusers = (users) => {
    fs.writeFile(path.join(__dirname,'users.json'),JSON.stringify(users),'utf-8',(err) => { //2nd one
        if(err) throw err;
        console.log('json data stored');
    });
};

//export printusers (username)
module.exports = {
    printusers
};