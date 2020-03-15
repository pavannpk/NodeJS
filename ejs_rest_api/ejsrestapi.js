const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/ejsrestapiroutes');
const bodyParser = require('body-parser');

const hostname = '127.0.0.1';
const port = 3000;

//create appliction/json parser
const jsonparser = bodyParser.json();

//urlencoded bodyparser
const urlencoded = bodyParser.urlencoded({extended:false});

app.get('/',(request,response) => {
   response.send(`<h2 style="color: rebeccapurple">Welcome to express REST API's</h2>
                    <p>please use api/employees for rest API's</p>`)
});

//configures the bodyparsers thats why we dont need to configure in fs module
app.use(jsonparser);
app.use(urlencoded);

//config the routes
app.use('/api',router); //whenever we write /api in url we get the data what we wrote in ejsrestapiroutes.js

app.listen(port,hostname,() => {
   console.log(`server started at http://${hostname}:${port}`);
});