const mongoose = require('mongoose');

const config = require('config');

const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const credentials = config.get('mongoPath');

const client = new MongoClient('mongodb+srv://mern-tutorial-cluster.aumcfpy.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();
    // const database = client.db("MERN-Tutorial-Cluster");
    // const collection = database.collection("testCol");
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// run().catch(console.dir);


const connectDB = async () => {
    try {
        await run().catch(console.dir);
        console.log('MongoDB Connected.');
    } catch(err) {
        console.error(err.message);
        // Exit process with falure
        process.exit(1);
    }
}

module.exports = connectDB;