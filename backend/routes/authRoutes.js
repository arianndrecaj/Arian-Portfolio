const express = require('express');
const { register, login, getCurrentUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Get the current user (protected)
router.get('/me', authMiddleware, getCurrentUser);

module.exports = router;