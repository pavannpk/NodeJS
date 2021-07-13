//we have to import two modules fs path
const fs = require('fs');
const path = require('path');

//gloabal variable
//__dirname, __filename
console.log(`DIR NAME : ${__dirname}`);
console.log(`FILE NAME : ${__filename}`);

//i want employees.json
console.log(`DIR NAME : ${path.join(__dirname, 'data', 'employee', 'employee.json')}`);


//read json from nested folder path
fs.readFile(path.join(__dirname, 'data', 'employee', 'employee.json'), 'utf-8', (err, data) => {
    if (err) throw err;
    let a = JSON.parse(data);
    /*
    console.log(a);
*/
    //now i want to store data employee.json into customer.json
    fs.writeFile(path.join(__dirname, 'store', 'customer', 'customer.json'), JSON.stringify(a), 'utf-8', (err, data) =>{
        if (err) throw err;
        console.log('data is written to a file');
    })
});

