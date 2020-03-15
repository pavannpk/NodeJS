const express = require('express');
//we got express
//we load express
//then we must initial express
const app = express();
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

//configure static file path
app.use('/public',express.static('public'));

//app routing
//for main /

//how to make configurations
app.get('/',(request,response) => {
    response.send(`<h2 style="color: #00c853">WELCOME EJS</h2>`);
});

//we need to load path module
//we dont require fs module to load whole html file
//load whole html file
app.get('/home',(request,response) => {
    response.sendFile(path.join(__dirname,'ejs.html'));
});

//load json
app.get('/json',(request,response) => {
    let employees = [
        {
            name: 'pavan',
            age: 22,
            designation : 'job',
            hobbies: 'photography'
        },
        {
            name: 'kumar',
            age: 22,
            designation : 'no job',
            hobbies: 'photography is not my passion'
        },
        {
            name: 'adhya',
            age: 22,
            designation : 'writer',
            hobbies: 'reading'
        }
    ];
    response.json(employees);
});

//dwnd file from server
app.get('/download',(request,response) => {
   response.download(path.join(__dirname,'love.jpg'));
});


//listen
app.listen(port,hostname,() => {
    console.log(`server started at http://${hostname}:${port}`);
});