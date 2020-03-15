//npm init to create package.json

//create lodash globally
//npm install -g live-server //it is used for all applications // stored in C Drive

//locally
//except -g(remove) //for specific projects means applications

//create lodash
//np install lodash --save //it is automatically created an entrance in package.json

//normal js function
let colors = ['red','blue','green','yellow','pink'];
let results = '';
colors.forEach(function (color) {
    console.log(color);
});

//looping and add
let cars = ['benz','swift','tata','bmw'];
let result = '';
cars.forEach(function (one) {
    result += `${one} `;
});
console.log(result);


//load the lodash modules
//load npm modules

//CORE modules
//const os = require('os');

//custom modules
//const util = require('./util');

//3rd party modules load  same as core modules
//const lodash = require('lodash');
//we can give shortest variable name //_(undeerscore)
//if you cannt get suggetion go to file - settings - language - javascript - librarries - download lodash
const _ = require('lodash');
//lodash approach
let phones = ['moto','samsung','nokia','redmi'];
let resultss = '';
_.forEach(phones,function (phone) {
    resultss += `${phone} `;
});
console.log(resultss);

//mixed array using normal js
let mixedarray = ['hello',1,'every',2,'lets',3,'go',4,'to','party'];
let countstart = function(mixedarray){
    let numbercount = 0;
    let stringcount = 0;
    mixedarray.forEach(function (element) {
        if(typeof element === "number"){
            numbercount++;
        }
        if (typeof element === "string"){
            stringcount++;
        }
    });
    return {
        numbercount,stringcount
    }
};
let output = countstart(mixedarray);
console.log(output);

//lodash specific logic
let againcreate = ['hello',1,'welcome',3,'to',5,'our','vilage'];
let againcreatelodash = function (againcreate) {
    let numberscounts = 0;
    let stringscounts = 0;
    _.forEach(againcreate,function (elements) {
        _.isNumber(elements)? numberscounts++ : numberscounts;
        _.isString(elements)? stringscounts++ : stringscounts;
    });
    return{numberscounts,stringscounts}
};
console.log(againcreatelodash(againcreate));

//moment js load
//wwe can get these from moment js
const moment = require('moment');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment('19980929','YYYYMMDD').fromNow());
console.log(moment().startOf('20200129').fromNow());

//langauge
console.log(moment.locale('hi'));
console.log(moment().format('LLLL'));