/*import dotenv file*/
const dotenv = require('dotenv');

/*
configure the config file*/
dotenv.config({path:'./config/config.env'});

/*
read data from env file*/
let facebook = process.env.FACEBOOK;
console.log(`FACEBOOK ID : ${facebook}`);
let instagram = process.env.INSTAGRAM;
console.log(`INSTAGRAM ID : ${instagram}`);
let twitter = process.env.TWITTER;
console.log(`TWITTER ID : ${twitter}`);
let youtube = process.env.YOUTUBE;
console.log(`YOUTUBE ID : ${youtube}`);

