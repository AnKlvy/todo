const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('university');
    const students = database.collection('students');

    const getStudents = await students.find();

    console.log(getStudents);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// var Express = require("express");
// var Mongoclient = require("mongodb").MongoClient;
// var cors = require("cors");
// // const multer = require("multer")

// var app=Express();
// app.use(cors());


// var DATABASENAME = "university";
// var database;
// var URL = 'mongodb://127.0.0.1:27017/';


// app.listen(5039, ()=>{
//     console.log('Server is running on port 5039');
//     Mongoclient.connect(URL, (error, client)=> {
//         console.log('Connecting...')
//         if (error) {
//             console.error('Connection failed:', error);
//         } else {
//             database = client.db(DATABASENAME);
//             console.log('Connection is successful!');
//         }
//     });
// })

// app.get('/api/university/getStudents', (request, response)=> {
//     database.getCollection('students').find({}).toArray((error, result)=> {
//         response.send(result);
//     });
// })


// // const MongoClient = require('mongodb').MongoClient;

// // async function addStudent(student) {
// //     try {
// //         const client = await MongoClient.connect('mongodb://localhost:27017');
// //         const db = client.db('university');
// //         const collection = db.collection('students');

// //         await collection.insertOne(student);

// //         console.log('Student added succesfuly');

// //         client.close();
// //     }
// //     catch (error){
// //         console.log('Error of adding student:', error);
// //     }
// // }