const { MongoClient } = require("mongodb");
const Express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb"); // Импортируйте ObjectId из mongodb


const app = Express();
app.use(cors());
app.use(Express.json()); // Добавьте эту строку для разбора JSON-тела запросов

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

app.listen(8080, () => {
//   console.log("Server is running on port 5039");
  connectToMongoDB();
});

app.get("/", (req, res) => {
    res.send("Hello, World!");
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
    // try{
    // let newDocument = req.body;
    // console.log(newDocument)
    const result = await students.insertOne(req.body);
    res.send(result);
    // }
    // catch(error){
    //     console.error("Error fetching students:", error);
    // }
});


// Get a single post
app.get("/api/university/getStudent/:_id", async (req, res) => {
  let query = { _id: new ObjectId(req.params._id) };
  let result = await students.findOne(query);
  if (!result) {
    res.status(404).json({ error: "Not found" });
  } else {
    res.status(200).json(result);
  }
});

app.put("/api/university/updateStudent/:_id", async (req, res) => {
  const query = { _id: new ObjectId(req.params._id) };
  const updates = {
    $set: { students: req.body }
  };
    let result = await students.updateOne(query, updates);
  res.send(result).status(200);
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