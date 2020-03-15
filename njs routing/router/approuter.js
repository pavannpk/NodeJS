const fs = require('fs');
const path = require('path');
let mapRoutes = function (request,response) {
    let url = request.url;
    console.log(url);
    if(url === '/'){
        fs.readFile(path.join(__dirname,'..','views','new.html'),'utf-8',(err,data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if (url === '/about'){
        fs.readFile(path.join(__dirname,'..','views','about.html'),'utf-8',(err,data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else if (url === '/logo'){
        fs.readFile(path.join(__dirname,'..','views','logo.html'),'utf-8',(err,data) => {
            if(err) throw err;
            response.end(data);
        });
    }
    else {
        fs.readFile(path.join(__dirname,'..','views','404 not found.html'),'utf-8',(err,data) => {
            if(err) throw err;
            response.end(data);
        });
    }
};

module.exports = {
    mapRoutes
};