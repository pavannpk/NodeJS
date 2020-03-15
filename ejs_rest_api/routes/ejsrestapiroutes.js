//correct way of routing
const express = require('express');
const routing = express.Router(); //router function in express that router we using to make all the routes
const fs = require('fs');
const path = require('path');


//we dont need to export the function directly we write the logic
//get request
//it is read
routing.get('/',(request,response) => {
    response.json({name:'its a get request'})
});


//get all the employees
//it is for read
routing.get('/employees',(request,response) => {
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',(err,data) => {
        if(err) throw err;
        //let peoples = JSON.parse(data);
        //console.log(peoples);
        response.json(JSON.parse(data));
    });
});

//get the single employees
//it is for read
routing.get('/employees/:id',(request,response) => {
    let employeesid = Number.parseInt(request.params.id);
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',(err,data) => {
        if(err) throw err;
        //let peoples = JSON.parse(data);
        //console.log(peoples);
        let peoples = JSON.parse(data);
        let selectedemployeeid = peoples.find(function (people) {
            return people.id === employeesid;
        });
        response.json(selectedemployeeid);
    });
});

//post : create a new employee
routing.post('/employees/:id',(request,response) => {
    let employeesid = Number.parseInt(request.params.id);
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',(err,data) => {
        if(err) throw err;

        //let peoples = JSON.parse(data);
        //console.log(peoples);

        let peoples = JSON.parse(data);
        //this is mapfunction

        //let empid = peoples.map(function (people) { //which will give each employee
          //  return people.id; // its create an array of all the ids of each employee
        //});

        //we make it easy
        //let empid = peoples.map(people => people.id);
        // easier way to write arrow function

        //math operator max
        let maxid = Math.max(...peoples.map(people => people.id));
        let newemployee = {
            id : maxid + 1,
            first_name : request.body.first_name,
            last_name : request.body.last_name,
            email : request.body.email,
            gender : request.body.gender,
            ip_address : request.body.ip_address
        };
        peoples.push(newemployee);
        fs.writeFile(path.join(__dirname,'..','database','employees.json'),JSON.stringify(peoples),'utf-8',(err,data) =>{
            if (err) throw err;
            response.json(newemployee);
        });
    });
});

//put it is for update
routing.put('/employees/:id',(request,response) =>{
    let employeesid = Number.parseInt(request.params.id);
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',(err,data) => {
        if(err) throw err;
        //let peoples = JSON.parse(data);
        //console.log(peoples);
        let peoples = JSON.parse(data);
        let selectedemployeid = peoples.find(people => people.id === employeesid);
        let updatedmployee = {
            id : employeesid,
            first_name : request.body.first_name,
            last_name : request.body.last_name,
            email : request.body.email,
            gender : request.body.gender,
            ip_address : request.body.ip_address
        };
        //replace the existing employee with updated employee
        peoples.splice(peoples.indexOf(selectedemployeid),1,updatedmployee);
        fs.writeFile(path.join(__dirname,'..','database','employees.json'),JSON.stringify(peoples),'utf-8',(err,data) =>{
            if (err) throw err;
            response.json(updatedmployee);
        });
    });
});

//delete it is for delete
routing.delete('/employees/:id',(request,response) =>{
    let employees = Number.parseInt(request.params.id);
    fs.readFile(path.join(__dirname,'..','database','employees.json'),'utf-8',(err,data) => {
        if(err) throw err;
        //let peoples = JSON.parse(data);
        //console.log(peoples);
        let peoples = JSON.parse(data);
        let selectedemployee = peoples.find(people => people.id === employees);
        peoples.splice(peoples.indexOf(selectedemployee),1);
        fs.writeFile(path.join(__dirname,'..','database','employees.json'),JSON.stringify(peoples),'utf-8',(err,data) =>{
            if (err) throw err;
            response.json(`employee is removed from db ${employees}`);
        });
    });
});

module.exports = routing;