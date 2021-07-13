const http = require('http');
const router = require('./router/approuting');

const host = '127.0.0.1';
//never give 8080
const port = 3000; // 3000 - 9999

const server = http.createServer((request, response) => {

    //status
    response.statusCode = 200;
    //which type of content it is

    response.setHeader('Content-Type', 'text/html');
    //send response

    //import the url's
    //we have to catch the  requested url's
    //spo we sent req, res
    router.maproutes(request, response)
});

server.listen(port, host, () => {
    console.log(`server is started at http://${host}:${port}`);
});
