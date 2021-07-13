const http = require('http');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
//never give 8080
const port = 3000; // 3000 - 9999

const server = http.createServer((request, response) => {

    let requestedurl = request.url;
    /*console.log(requestedurl);*/
    //status
    response.statusCode = 200;
    //which type of content it is

    response.setHeader('Content-Type', 'text/html');
    //send response

    if (requestedurl === '/'){
        fs.readFile(path.join(__dirname, 'server.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else if (requestedurl === '/about'){
        fs.readFile(path.join(__dirname, 'about.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else if (requestedurl === '/contact'){
        fs.readFile(path.join(__dirname, 'contact.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else if (requestedurl === '/services'){
        fs.readFile(path.join(__dirname, 'services.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else {
        fs.readFile(path.join(__dirname, '404.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
});

server.listen(port, host, () => {
    console.log(`server is started at http://${host}:${port}`);
});
