const fs = require('fs');

//async way

//------------------------------------------------------------------------------------

//there will be a path and what content and utf-8 and call back
//here we have call back in sync way there is no call back
//we have two parameters err,data
fs.readFile('asyncmsg.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);

    //write a file
    //-------------------------------------------------------------------------------------------
    //there will be a path and what content and utf-8 and call back
    //here we write data means previously we create asyncmsg.txt that msg will display
    fs.writeFile('asyncwritefile.txt', data, 'utf-8', (err, data) => {
        if (err) throw err;
        console.log(`Data is writen to file`);
    });
});
console.log('its print simultanioiusly bcz its async, if it is sync first print fs then console');

