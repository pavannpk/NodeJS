const util = require('./admin/util');
const profile = require('./data/profile');

//profile.js
let users = [
    {
        name : 'pavan',
        age : 22,
        qualification : 'B.tech'
    },
    {
        name: 'kumar',
        age: 22,
        qualification: 'B.Tech'
    }
];
profile.printusers(users);

//util.js
util.data('photography');