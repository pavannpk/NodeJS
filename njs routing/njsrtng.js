const http = require('http');
const router = require('./router/approuter');

const hostname = '127.0.0.1';
const port = 9999;

const server = http.createServer((request,response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type','Text/html');

    //njs routing
    router.mapRoutes(request,response);
});

server.listen(port,hostname,() => {
    console.log(`server started at http://${hostname}:${port}`);
});
