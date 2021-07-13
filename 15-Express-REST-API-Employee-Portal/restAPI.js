const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const port = 5000;

//configure the json form data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (request, response) => {
    response.send(`Welcome to Backend Express Server.`);
});

//router configuration
/*
app.use('/', require('./router/employeeRouter'));
*/
app.use('/employees', require('./router/employeeRouter'));
app.use('/products', require('./router/productRouter'));

app.listen(port, hostname, () => {
    console.log(`Server started at http://${hostname}:${port}`);
});
