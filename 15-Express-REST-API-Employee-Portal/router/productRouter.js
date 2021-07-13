const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

//get all employees
/*
router.get('/employees', (request, response) => {
*/
router.get('/', (request, response) => {
    response.send(`got all Products.`);
});
//get single employee
router.get('/:id', (request, response) => {
    //get single employee id
    let pdctID = request.params.id;
    response.send(`got single Product with ID : ${pdctID}.`);
});
//create a new employees
router.post('/', (request, response) => {
    response.send(`created a new Product.`);
});
//update an employees
router.put('/:id', (request, response) => {
    let recieveID = request.params.id;
    response.send(`Updated an Product with ID : ${recieveID}.`);
});
//delete an employees
router.delete('/:id', (request, response) => {
    let recieveID = request.params.id;
    response.send(`Delete an Product with ID : ${recieveID}.`);
});
module.exports = router;
