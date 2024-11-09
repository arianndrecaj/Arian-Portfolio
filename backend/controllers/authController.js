const jwt = require('jsonwebtoken');
const User = require('../models/User');

//Register a new user
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        //Check if user exists already
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //Create a new user
        const newUser = await User.create({
            name,
            email,
            password,
        });

        //Create JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h'});

        res.status(201).json({
            message: 'User created successfully',
            token,
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
};

//Login User
exports.login = async (req, res) => {
    const { email, password} = req.body;

    try {
        //Check if user exists
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).json({ message: 'Invalid credentials'});
        }

        //Check password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //Create JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({
            message: 'User logged in successfully',
            token,
        });
    } catch (erro) {
        res.status(500).json({ message: 'Server error'});
    }
};

//Get the current user (protected route)
exports.getCurrentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error'});
    }
};