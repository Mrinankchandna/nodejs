const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/Hotels';
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
// comment added for  testing purpose 


module.exports = db;