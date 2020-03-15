const fs = require('fs');
const path = require('path');
const http = require('http');
const hostname = '192.168.0.112';
//const hostname = '127.0.0.1 //127 is common for every system //general IP address
const port =  3000;//when a server want to send and get data throw one window only that one windo we send and get it
//every server have port to access an request and response
//0-65535 dont give upto 1024 because it is for system process
//3000-9999 it is better


//this is our own server it is in our system
//hostname and port is important
//every system or every electro machine have virtual address(IP)
//server creation logic
let server = http.createServer((request,response) => {//this create server using HTTP MODULE. It have special obj(req,res)
    let url = request.url;//catch the request url what u entered
    console.log(url);
    response.statusCode = 200; //success //300 means redirectc //404 not found //500 server error
    response.setHeader('Content-Type','text/html'); //what type of data going to respond back
    //response.end('new.html');//what type of text respond back
    fs.readFile(path.join(__dirname,'new.html'),'utf-8',(err,data) => {
        if(err) throw err;
        response.end(data);
    });
});

//server starting logic
server.listen(port,hostname,() => {//server listening the port number who ever send the req perform above data
    console.log(`server started at http://${hostname}:${port}`);
});

//how server works
//we have client and server
//frontend and backend
//frontend we have browser we send request
//backend as a server in thar we have server and database
//serevr responsibility
//ex-: hotel (order food to server)
//from the client browser IF we entered facebook.com is send request to the server
//process the request collect html,css file send back response

//nodemon it is for dont want to restart server whenever we change the code
//node app.js  in that we use nodemon app.js
