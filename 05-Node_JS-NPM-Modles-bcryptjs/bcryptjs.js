/*import bcrypt module*/
const bcrypt = require('bcryptjs');

/*create an object user data*/
let user = {
    name : 'PAVAN NPK photography',
    email : 'bypavannpk@gmail.com',
    password : 'bypavannpk'
};

/*it is for creating hashedPassword*/
//10 times applied sync
let salt = bcrypt.genSaltSync(10);
let hashedPassword = bcrypt.hashSync(user.password, salt);

/*we print hashedPassword*/
console.log(hashedPassword);

/*now display updated hashedPassword*/
let updatedPassword = {
    //i keep existing data
    ...user,
    password: hashedPassword
};
console.log(updatedPassword);

/*compare both passwords*/
if (bcrypt.compareSync('bypavannpk', updatedPassword.password)){
    console.log("Password matched");
}
else {
    console.log("Password is not matched");
}

