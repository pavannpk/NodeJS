//stadal;one operations

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'pavan_db';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {

    console.log("Connected local mongodb successfully");

    const db = client.db(dbName);


    //insert records
    //single one

    /*
    let employeeOne = {
        id:2,
        name:'kumar',
        age:23,
        city:'uk'
    };

    let employeeOne = {
        id:1,
        name:'npkpavan',
        age:22,
        city:'up'
    };
    let employeeOne = {
        id:2,
        name:'kumar',
        age:23,
        city:'uk'
    };

    db.collection('employee').insertOne(employeeOne,function (err,r) {
        if (err) throw err;
        console.log('record is inserted');
    });
*/

    //insert many records

    /*
    let employee = [
        {
            id:3,
            name:'pk',
            age:23,
            city:'canada'
        },
        {
            id:4,
            name:'pkkumar',
            age:24,
            city:'australia'
        }
        ];

    db.collection('employee').insertMany(employee,function (err,r) {
        if (err) throw err;
        console.log('record are inserted');
    });
     */


    //read the data from database

   /*
   db.collection('employee').find().toArray(function (err,docs) {
        if (err) throw err;
        console.log(docs);
    });
 */

    //find particular id
    /*
    db.collection('employee').find({id:4}).toArray(function (err,docs) {
        if (err) throw err;
        console.log(docs);
    });
*/

    //update operation
    /*
    db.collection('employee').updateOne({id:1},{$set:{
        age:25,
            city:'kashmir'
        }},function (err,r) {
        if (err) throw err;
        console.log(`updated a record with id : 1`);
    });
*/

    //delete operation
    db.collection('employee').deleteOne({id:2},function (err,r) {
        if (err) throw err;
        console.log(`record is deleted successfully`);
    });

    client.close();
});