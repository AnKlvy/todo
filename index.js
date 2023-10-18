const { MongoClient } = require("mongodb");
const Express = require("express");
const cors = require("cors");

const app = Express();
app.use(cors());

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);
let students; // Создаем переменную для коллекции студентов

async function connectToMongoDB() {
  try {
    await client.connect();
    const database = client.db("university");
    students = database.collection("students");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

app.listen(5039, () => {
  console.log("Server is running on port 5039");
  connectToMongoDB();
});


// Read collection
app.get("/api/university/getStudents", async (request, response) => {
  try {
    const result = await students.find({}).toArray();
    response.send(result);
  } catch (error) {
    console.error("Error fetching students:", error);
    response.status(500).send("Internal Server Error");
  }
});

// Add a new document to the collection
app.post("/api/university/addStudent", async (req, res) => {
    let collection = await db.collection("posts");
    let newDocument = req.body;
    newDocument.date = new Date();
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  });

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