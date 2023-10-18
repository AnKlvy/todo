const MongoClient = require('mongodb').MongoClient;

async function addStudent(student) {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017');
        const db = client.db('university');
        const collection = db.collection('students');

        await collection.insertOne(student);

        console.log('Student added succesfuly');

        client.close();
    }
    catch (error){
        console.log('Error of adding student:', error);
    }
}