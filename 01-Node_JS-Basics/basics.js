//variables
let language = "NodeJS";
console.log(language);

//object
let moblie = {
    brand: 'Samsung',
    color: 'Blue',
    price: 14000
};
console.log(moblie);
console.table(moblie);

//array
let colors = ['white', 'black', 'silver', 'gold'];
console.log(colors);
console.table(colors);

//employee arrays
let employees = [
    {
        name: 'hari',
        age: 30
    },
    {
        name: 'kumar',
        age: 29
    },
    {
        name: 'bypavannpk',
        age: 23
    }
];
console.log(employees);
console.table(employees);
console.table(employees[2]);

//function of es6
let greet = (name) => {
    let res = `${name}`; //we pass the name
    console.log(res);
};
greet('bypavannpk'); //we have to call the function


