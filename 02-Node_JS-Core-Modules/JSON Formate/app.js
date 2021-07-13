/*JSON -> data in the form of JSON string
              json - writing - object into string
                JSON.stringfy()
              json - reading - string into object
                JSON.parse()*/


const fs = require('fs');
let employees = [{"id":1,"first_name":"Diane-marie","last_name":"Curragh","email":"dcurragh0@foxnews.com","gender":"Agender","ip_address":"112.245.58.230"},
    {"id":2,"first_name":"Jules","last_name":"Saxelby","email":"jsaxelby1@flickr.com","gender":"Polygender","ip_address":"66.194.62.129"},
    {"id":3,"first_name":"Markus","last_name":"Breslin","email":"mbreslin2@cam.ac.uk","gender":"Genderfluid","ip_address":"154.106.162.1"},
    {"id":4,"first_name":"Dalton","last_name":"Fender","email":"dfender3@illinois.edu","gender":"Female","ip_address":"49.161.239.215"},
    {"id":5,"first_name":"Zilvia","last_name":"Junifer","email":"zjunifer4@examiner.com","gender":"Genderqueer","ip_address":"154.123.206.171"},
    {"id":6,"first_name":"Lois","last_name":"Vahey","email":"lvahey5@japanpost.jp","gender":"Bigender","ip_address":"141.4.42.50"},
    {"id":7,"first_name":"Chrysa","last_name":"Gwinnett","email":"cgwinnett6@lycos.com","gender":"Genderfluid","ip_address":"71.10.152.126"},
    {"id":8,"first_name":"Franni","last_name":"Jobey","email":"fjobey7@t.co","gender":"Non-binary","ip_address":"51.13.166.103"},
    {"id":9,"first_name":"Alana","last_name":"Woodyatt","email":"awoodyatt8@wufoo.com","gender":"Female","ip_address":"162.112.97.59"},
    {"id":10,"first_name":"Giraldo","last_name":"Bruggeman","email":"gbruggeman9@cmu.edu","gender":"Bigender","ip_address":"229.185.114.177"}];

//we get data from MOCK_DATA.json
//write file employees.json - create a new json file
//if we are not specify JSON.stringfy() it shohw data in [object]



fs.writeFile('employyes.json', JSON.stringify(employees), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('data written to a file');
});

//read json file
//if we are not specify JSON.parse() it shohw data in {object} in string formate

//----------------------------------------------------------------------------------------------------

fs.readFile('employyes.json', 'utf-8', (err, data) => {
    if (err) throw err;
/*
    console.log(data);
*/
    console.log(JSON.parse(data));
});
