//actually logic is there in util folder

//it is about import and export

//if you want to acces(utility) the code, you have to import
//write ./
const util = require('./util/utility');
const store = require('./data/store');

//for age name
util.myAge(23, 'pavan');

//reverse msg
let msg = "good morning";
let b=util.reverse(msg);

//for write file
//file contnet
store.writeFile('msg.txt', b);

