const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
//never give 8080
const port = 3000; // 3000 - 9999

const server = http.createServer((request, response) => {

    let requestedurl = request.url;
    console.log(requestedurl);


    //status
    response.statusCode = 200;
    //which type of content it is

    //response.setHeader('Content-Type', 'text/plain');
    response.setHeader('Content-Type', 'text/html');
    //send response

    //response.end('welcome to nodejs');
    //response.end(`<h2 style="background-color : red; color: white">Welcome to NodeJS</h2>`);
    fs.readFile(path.join(__dirname, 'server.html'), 'utf-8', (err, data) => {
        if (err) throw err;
        response.end(data);
    })
});

server.listen(port, host, () => {
    console.log(`server is started at http://${host}:${port}`);
});
