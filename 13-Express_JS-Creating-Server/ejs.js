const express = require('express'); //load express library
const app = express(); //initialize express
const path = require('path');

const host = '127.0.0.1';
const port = 3000;

//configure static files express
app.use('/public', express.static('public'));

app.get('/',(request, response) => {
    response.send(`<h2>13-Express_JS-Creating-Server</h2>`);
});
app.get('/home',(request, response) => {
    response.sendFile(path.join(__dirname, 'home.html'));
});

let employee = [
    {
        name: 'pavan',
        age: 23
    },
    {
        name: 'kumar',
        age: 24
    }
];

app.get('/employee',(request, response) => {
    response.json(employee);
});

app.get('/note',(request, response) => {
    response.download(path.join(__dirname, 'Employees.json'));
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});
