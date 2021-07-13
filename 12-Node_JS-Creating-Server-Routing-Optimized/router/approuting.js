const fs = require('fs');
const path = require('path');

//it is for routing logics
let maproutes = (request, response) => {
    let requestedurl = request.url;
    //routes
    if (requestedurl === '/'){
        fs.readFile(path.join(__dirname, '..','views', 'server.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else if (requestedurl === '/about'){
        fs.readFile(path.join(__dirname,'..','views', 'about.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else if (requestedurl === '/contact'){
        fs.readFile(path.join(__dirname,'..','views', 'contact.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else if (requestedurl === '/services'){
        fs.readFile(path.join(__dirname,'..','views', 'services.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
    else {
        fs.readFile(path.join(__dirname,'..', 'views','404.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            response.end(data);
        })
    }
};

module.exports = {
    maproutes
};
