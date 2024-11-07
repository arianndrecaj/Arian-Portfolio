const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Post route to create a new user
router.post('/users', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const newUser = new User({ name, email, password});
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser});
    } catch (error) {
        res.status(500).json({ message: 'Failed to create user'});
    }
});

//Get route to retrieve all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users' });
    }
});

module.exports = router;