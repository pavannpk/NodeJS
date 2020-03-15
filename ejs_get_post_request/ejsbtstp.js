const express = require('express');
const app = express();
const path = require('path');
//load the router
const router = require('./router/ejsbtsprut');

const hostname = '127.0.0.1';
const port = 3000;

//configure static files
app.use('/public',express.static('public'));


//call that
//express routing
router.maproutes(app);

app.listen(port,hostname,() => {
   console.log(`server started at http://${hostname}:${port}`);
});

//now we do with bootstrap
//first we need to have btstp specific files
//font-awesome.css
//bootstrap.css
//mdb.css
//styles.css -> custom styles

//for javascript
//jquery.3.3.1.min.js
//popper.min.js
//bootstrap.min.js
//mdb.min.js