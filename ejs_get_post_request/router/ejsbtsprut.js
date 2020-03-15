const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

//these is for mapping all the routes
let maproutes = function (app) {

    //config bodyParser
    const urlencodedParser = bodyParser.urlencoded({extended:false})


    //express routing
    app.get('/',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','index.html'));
    });

    //normal about get req
    app.get('/about',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','about.html'));
    });

    //get req with services queries
    app.get('/services',(request,response) => {
        let queries = request.query;
        console.log(queries);
        response.sendfile(path.join(__dirname,'..','views','services.html'));
    });

    //normal profile get request
    app.get('/profile',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','profile.html'));
    });

    //get request with profile parameters
    app.get('/profile/:id',(request,response) => { //it is get rq with par thats why we use id here means it may be name or num
    let usersid = Number.parseInt(request.params.id); //we convert it as number
    fs.readFile(path.join(__dirname,'..','database','profiles.json'),'utf-8',(err,data) => {
       if (err) throw err;
       let peoples = JSON.parse(data);
       //console.log(peoples); -- we get all user data in console but we want only one id what id passed in url that id we want

        //if we do like this we get particular user info what we passed inurl that user info it display in console
        //it is basic js logic for selection using one function
        let selectedpeopleid = peoples.find(function (people) {
            return people.id === usersid;
        });
        console.log(selectedpeopleid);
    });
    response.sendfile(path.join(__dirname,'..','views','profile.html'));
    });
    //now we get 500+ people data JSON

    //normal contact get request
    app.get('/contact',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','contact.html'));
    });

    //post : contact-form
    app.post('/contact-form',urlencodedParser,(request,response) => { //use it will handling
        let contactFormData = request.body;
        console.log(contactFormData);
        response.sendfile(path.join(__dirname,'..','views','contact.html'));
    });

    //404
    app.get('',(request,response) => {
        response.sendfile(path.join(__dirname,'..','views','404.html'));
    });
};

//let me export
module.exports = {
    maproutes
};