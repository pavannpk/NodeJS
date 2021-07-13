//here we write the logic and execute in another file
// that means we import the file and export the file


//arrow function
let myAge = (age, name) =>{
    let res = `${age} ${name}`;
    console.log(res);
};



//reverse string
let reverse = (str) => {
    let temp = '';
    for (let i=str.length-1; i>=0; i--){
        temp += `${str.charAt(i)}`;
    }
    return temp;
};

module.exports = {
    //which one you want to export
    myAge,
    reverse
};
