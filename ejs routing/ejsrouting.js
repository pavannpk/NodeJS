const express = require('express');
const app = express();
const path = require('path');
const router = require('./router/ejsrout')

const hostname = '127.0.0.1';
const port = 3000;

//config static files
app.use('/public',express.static('public'));

//application routing
router.maproutes(app);

/*app.get('/',(request,response) => {
    response.send(`<h2 style="color: red">THIS IS EJS ROUTING</h2>`);
});

app.get('/main',(request,response) => {
    response.sendFile(path.join(__dirname,'views','main.html'));
});

app.get('/in',(request,response) => {
    response.sendFile(path.join(__dirname,'views','in.html'));
});

app.get('/out',(request,response) => {
    response.sendFile(path.join(__dirname,'views','out.html'));
});

app.use((request,response) => {
    response.sendFile(path.join(__dirname,'views','404.html'));
});
*/
app.listen(port,hostname,() => {
    console.log(`server started at http://${hostname}:${port}`);
});