//import / load program.js
const program = require('./program');
const calc = require('./utility/calculate');
const num = require('./data/produceNumbers');
const db = require('./database/dbOperations');

program.greet();

// sum
let result = calc.sum(10 , 20);
console.log(result);


// Get Mobile Numbers
let mobiles = num.generateMobiles('9844');
let fileName = 'mobiles.txt';
db.saveToFile(fileName , mobiles);

