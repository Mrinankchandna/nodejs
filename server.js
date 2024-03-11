// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./db');
const Person = require('./models/person');

// comment added


const app = express();


app.use(bodyParser.json());

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
