const path = require('path');
let maproutes=  function (app) {

    //routing
    app.get('/',(request,response) => {
        response.send(`<h2 style="color: red">THIS IS EJS ROUTING</h2>`);
    });

    app.get('/main',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','main.html'));
    });

    app.get('/in',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','in.html'));
    });

    app.get('/out',(request,response) => {
        response.sendFile(path.join(__dirname,'..','views','out.html'));
    });

    app.use((request,response) => {
        response.sendFile(path.join(__dirname,'..','views','404.html'));
    });
};

module.exports = {
    maproutes
};