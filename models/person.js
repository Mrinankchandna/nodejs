// Import mongoose module
const mongoose = require('mongoose');

// Define the schema for the person collection
const personSchema = new mongoose.Schema({
    // Define your schema fields here
    name: String,
    age: Number,
    mobile: String,
    email: String,
    address: String, 
    work : String
});

// Create a model from the schema
const Person = mongoose.model('Person', personSchema);

// Export the model
module.exports = Person;
