/*import jwt*/
const jwt = require("jsonwebtoken");

/*create a token based on payload info with some secerte key
password will not store inside token never and ever*/
let user = {
    id : 'abcd-1223-fgsh-123321',
    name : 'bypavannpk',
    email : 'byapavannpk@gmail.com'
};

/*i need to have payload. Access to id.*/
let payload = {
    id: user.id,
    name: user.name
};

//based on payload and secret key we generate JWT

/*i have secret key*/
let secretKey = 'ssshhhh';

/*i have payload and secrete key so i generate token and also add expired session its optional*/
let token = jwt.sign(payload, secretKey, {expiresIn : 3600000});
console.log(token);

/*verify the token through programatically or online in jwt*/
jwt.verify(token, secretKey,(err, decoded) => {
    if (err) throw err;
    console.log(decoded);
});
