const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017/';
let _db;

mongodb.MongoClient(()=> {
   MongoClient.connect(url).then(
       client => {
           console.log('connected successfully');
           _db.client.db();

       }
   )
});