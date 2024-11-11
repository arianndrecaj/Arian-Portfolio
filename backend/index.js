// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes'); // Ensure this is correctly imported

const app = express();
const PORT = process.env.PORT || 5003;

require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:3000', // Allow only your frontend's origin
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.catch((error) => {
  console.log('MongoDB connection error:',error);
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.use(contactRoutes);

// Ensure the authRoutes is properly mounted
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
