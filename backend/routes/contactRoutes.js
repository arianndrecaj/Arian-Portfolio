const express = require('express');
const router = express.Router();
const ContactMessage = require('../models/ContactMessage');

router.get('/contact-messages', async (req, res) => {
    try {
        const messages = await ContactMessage.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrive message'});
    }
});

router.get('/contact-messages/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const message = await ContactMessage.findById(id);
        if(!message) {
            return res.status(400).json({ message: 'Message not found' });
        }
        res.status(200).json(message);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve message' });
    }
});

// Post a new contact message
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    
    try {
        const newMessage = new ContactMessage({ name, email, message });
        await newMessage.save();
        res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to save message'});
    }
});

module.exports = router;