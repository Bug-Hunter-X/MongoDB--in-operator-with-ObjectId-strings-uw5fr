```javascript
// Correct usage of $in operator with an array of ObjectId
const { MongoClient, ObjectId } = require('mongodb');

async function findDocuments() {
  const uri = "mongodb://localhost:27017"; // Replace with your MongoDB connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('your_database_name'); // Replace with your database name
    const collection = db.collection('your_collection_name'); // Replace with your collection name
    const result = await collection.find({ _id: { $in: [new ObjectId("651a1a1a1a1a1a1a1a1a1a1a"), new ObjectId("651b1b1b1b1b1b1b1b1b1b1b")] } }).toArray();
    console.log(result);
  } finally {
    await client.close();
  }
}

findDocuments();
```