const mongoose = require('mongoose');

const config = require('config');

const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const db = config.get('mongoURI');


const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected.');
    } catch(err) {
        console.error(err.message);
        // Exit process with falure
        process.exit(1);
    }
}

module.exports = connectDB;