# NODEJS
##### bypavannpk

### Software Requirements

```sh
* nodejs
* Text Editor(Web Strom). I'm using
```

### Run the file

> Install nodemon it is for if you do any changes you dont need to restart the server.
```sh
* npm i nodemon
```
> run the file
```sh
* nodemon <filename>.js
```

### bcrypt

> Here we import bcrypt because we are providing security.
Which means database administrator can access user data bcz it shows user passowrds in database.
If we add bcrypt. In database password will not shown directly it will be in hashedPassword.

> users data we store in databse without bcrypt its easy to loose userdata databse adminstrators easily stolen user info,
thats why we are using bcrypt module.
```sh
* npm install 
* npm i bcrypt
```
### jsonwebtoken

> JSON Web Token (JWT) is a means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS) and/or encrypted using JSON Web Encryption
```sh
* npm install 
* npm i jsonwebtoken
```
### DOTENV

> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
```sh
* npm install 
* npm i dotenv
```

### GRAVATAR

> Gravatar (a portmanteau of globally recognized avatar) is a service for providing globally unique avatars and was created by Tom Preston-Werner. Since 2007, it has been owned by Automattic, having integrated it into their WordPress.com blogging platform
```sh
* npm install 
* npm i gravatar
```