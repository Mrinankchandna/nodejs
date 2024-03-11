const express = require('express');
const router = express.Router();
const Person = require('../models/person'); // Import the Person model

// Handle POST requests to create a new person
router.post('/', async (req, res) => {
    try {
        const data = req.body; // Extract data from request body

        // Create a new instance of the Person model with the extracted data
        const newPerson = new Person(data);

        // Save the new person to the database
        const response = await newPerson.save();

        // Log a success message to the console
        console.log('Data saved');

        // Send a response with the saved person object
        res.status(200).json(response);

    } catch (err) {
        // If an error occurs, log the error to the console
        console.log(err);

        // Send a 500 internal server error response with an error message
        res.status(500).json({
            error: 'Internal server error'
        });
    }
});


router.get('/', async (req, res) => {
    try {
        const data = await Person.find(); // Fetch all persons from the database
        console.log('Data found');


        res.status(200).json(data);

    } catch (err) {

        console.log(err);


        res.status(500).json({
            error: 'Internal server error'
        });
    }
});

router.get('/:work', async (req, res) => {
    try {
        console.log('Request received:', req.params.work);
        const work = req.params.work.toLowerCase();
        console.log('Lowercased work:', work);
        if (work === 'chief' || work === 'waiter' || work === 'manager') {
            const response = await Person.find({ work: work.charAt(0).toUpperCase() + work.slice(1) });
            console.log('Response fetched:', response);
            res.status(200).json(response);
        } else {
            console.log('Invalid work type:', work);
            res.status(404).json({ error: 'Invalid work type' });
        }
    } catch (err) {
        console.log('Error occurred:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true,
        });
        if (!response) {
            return res.status(404).json({ error: "Person not found " });
        }
        console.log('Data updated');
        res.status(200).json(response);
    } catch (err) {
        console.log('Error occurred:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);
        if (!response) {
            return res.status(404).json({ error: "Person not found" });
        }
        console.log('Data deleted successfully');
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (err) {
        console.log('Error occurred:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
