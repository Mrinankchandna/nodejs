// Import necessary modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db');
const personRoutes = require('./routes/personRoutes'); // Import the person routes
const menuRoutes = require('./routes/menuItemRoutes'); // Import the menu routes

// Create an Express application
const app = express();

// Use body-parser middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Use person routes
app.use('/person', personRoutes);

// Use menu routes
app.use('/menu', menuRoutes);

// Get the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
