require ("dotenv").config();
const { MongoClient } = require('mongodb');

// Replace the connection string with your MongoDB database URL
const url = 'mongodb://localhost:27017/mydatabase';

let db = null;

async function connectToDatabase() {
  try {
    if (db) {
      return db; // If there's already a connection, return it
    }

    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = client.db(); // Save the database instance to reuse later
    console.log('Connected to MongoDB');
    return db;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = connectToDatabase;