const avatar = require('gravatar');

let user = {
    name : 'Pavan Kumar',
    email : 'pavankumar285765@gmail.com',
    password : 12345
};

let avatarURL = avatar.url(user.email, {
    s : 400,
    r : 'pg',
    d : 'mm'
});

let updatedAvatar = {
    ...user,
    avatar : avatarURL
};
console.log(updatedAvatar);
