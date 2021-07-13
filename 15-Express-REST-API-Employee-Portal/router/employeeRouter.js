const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const {v4} = require('uuid');

//generate id
let generateId = () => {
    return v4();
};

//get all employees
/*
router.get('/employees', (request, response) => {
*/
router.get('/', (request, response) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'Employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let employees = JSON.parse(data);
        response.status(200).json(employees);
    });
});

//get single employee
router.get('/:id', (request, response) => {
    //get single employee id
    let emplID = request.params.id;
    fs.readFile(path.join(__dirname, '..', 'data', 'Employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let employees = JSON.parse(data);
        let selectedEmployee = employees.find((employee) => {
           return employee._id === emplID;
        });
        response.status(200).json(selectedEmployee);
    });
});

//create a new employees
router.post('/', (request, response) => {
    //recieve form data
    let newEmployee = {
        _id: generateId(),
        firstname: request.body.first_name,
        lastname: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        IP: request.body.ip_address
    };

    //read json file
    fs.readFile(path.join(__dirname, '..', 'data', 'Employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let employees = JSON.parse(data);
        employees.unshift(newEmployee); //add an object to the start of the array
        fs.writeFile(path.join(__dirname, '..', 'data', 'Employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if (err) throw err;
            response.status(200).json({
                result: 'craeted newEmployee employee',
                data: newEmployee
            });
        });
    });
    //in insomnia you have to set in json then you write object
});

//update an employees
router.put('/:id', (request, response) => {
    //update form data
    let updateEmployee = {
        _id: generateId(),
        firstname: request.body.first_name,
        lastname: request.body.last_name,
        email: request.body.email,
        gender: request.body.gender,
        IP: request.body.ip_address
    };

    let updatedID = request.params.id;
    fs.readFile(path.join(__dirname, '..', 'data', 'Employees.json'), 'utf-8', (err, data) => {
       if (err) throw err;
       let employees = JSON.parse(data);
       let removableIndex = employees.map(employee => employee._id).indexOf(updatedID);
       //index element replacable-element
       employees.splice(removableIndex,1,updateEmployee); //replace an existing employee
        fs.writeFile(path.join(__dirname, '..', 'data', 'Employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if (err) throw err;
            response.status(200).json({
                result: 'updated an employee',
                data: updateEmployee
            });
        });
    });
});

//delete an employees
router.delete('/:id', (request, response) => {
    let deletedID = request.params.id;
    fs.readFile(path.join(__dirname, '..', 'data', 'Employees.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        let employees = JSON.parse(data);
        let removableIndex = employees.map(employee => employee._id).indexOf(deletedID);
        //index element
        employees.splice(removableIndex,1); //delete an existing employee
        fs.writeFile(path.join(__dirname, '..', 'data', 'Employees.json'), JSON.stringify(employees), 'utf-8', (err) => {
            if (err) throw err;
            response.status(200).json({
                result: 'deleted an employee',
                data: deletedID
            });
        });
    });
});
module.exports = router;
