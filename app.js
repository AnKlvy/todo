var Express = require("express");
var MongoClient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer")

var app=Express();
app.use(cors());


var DATABASENAME = "university";
var database;

app.listen(5038, ()=>{
    MongoClient.connect('mongodb://localhost:27017',(error, client)=> {
        database=client.db(DATABASENAME);
        console.log('Connection is successful!')
    });
})

app.get('/api/university/addStudent', (requsest, response)=> {
    database.collection("students").find({}).toArray((error, res)=> {
        response.send(result);
    });
})


// const MongoClient = require('mongodb').MongoClient;

// async function addStudent(student) {
//     try {
//         const client = await MongoClient.connect('mongodb://localhost:27017');
//         const db = client.db('university');
//         const collection = db.collection('students');

//         await collection.insertOne(student);

//         console.log('Student added succesfuly');

//         client.close();
//     }
//     catch (error){
//         console.log('Error of adding student:', error);
//     }
// }