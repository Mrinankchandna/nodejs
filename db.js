const mongoose = require('mongoose');
require('dotenv').config();

const mongoURL = process.env.mongoBDURL;
// const mongoURL= process.env.mongoBD_URL_Local;
console.log('MongoDB URL:', mongoURL); // Add this line for debugging

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
    console.error('Error in connection with MongoDB server:', error);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});

module.exports = db;
