// Backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5003;
const cors = require('cors');
const ContactMessage = require('./models/ContactMessage');

require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3000', // Allow only your frontend's origin
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.log('MongoDB connection error:',error);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/contact-messages', async (req, res) => {
  try {
    const messages = await ContactMessage.find(); // Retrieves all documents in the ContactMessage collection
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve messages' });
  }
});

app.get('/contact-messages/:id',async (req, res) => {
  const { id } = req.params;

  try {
    const message = await ContactMessage.findById(id);
    if(!message) {
      return res.status(400).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrive message'});
  }
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try{
    const newMessage = new ContactMessage({
      name,
      email,
      message,
    });

    await newMessage.save();
    res.status(200).json({ message: 'Message saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save message'});
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
