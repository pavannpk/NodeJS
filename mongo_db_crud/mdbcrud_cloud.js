//standalone operations

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://pavannpk:pavannpk@adv-ui-5xi0e.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

const dbName = 'pavan_db';

client.connect(err => {

    const db = client.db(dbName);

    console.log('connected to mongodb successfully');

    //insert records
    //single one

    /*
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
    db.collection('employee').updateOne({id:2},{$set:{
        age:20,
            city:'punjab'
        }},function (err,r) {
        if (err) throw err;
        console.log(`updated a record with id : 1`);
    });
*/

    //delete operation

    db.collection('employee').deleteOne({id:3},function (err,r) {
        if (err) throw err;
        console.log(`record is deleted successfully`);
    });


    client.close();
});