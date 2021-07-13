const express = require('express');
const app = express();
const path = require("path");

const hostname = '127.0.0.1';
const port = 5000;

app.use('/public', express.static('public'));

//routing configuration
app.use('/', require('./router/router'));

app.listen(port, hostname, () => {
    console.log(`Server started at : http://${hostname}:${port}`);
});
