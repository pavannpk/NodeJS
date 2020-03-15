const path = require('path');

//these is for mapping all the routes
let maproutes = function (app) {
    //express routing
    app.get('/',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','index.html'));
    });
    app.get('/about',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','about.html'));
    });
    app.get('/services',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','services.html'));
    });
    app.get('/profile',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','profile.html'));
    });
    app.get('/contact',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','contact.html'));
    });
    app.get('',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','404.html'));
    });
};

//let me export
module.exports = {
    maproutes
};