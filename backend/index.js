// Backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
<<<<<<< HEAD
=======

>>>>>>> f7e7e5d2e1885ea24a59ab3ce77fd49095fbf30e
const contactRoutes = require('./routes/contactRoutes');

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
<<<<<<< HEAD
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.log('MongoDB connection error:', error));

=======
.catch((error) => {
  console.log('MongoDB connection error:',error);
});
>>>>>>> f7e7e5d2e1885ea24a59ab3ce77fd49095fbf30e
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

<<<<<<< HEAD
// Contact Route
app.use('/contact', contactRoutes);
=======
app.use(contactRoutes);

>>>>>>> f7e7e5d2e1885ea24a59ab3ce77fd49095fbf30e

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const transporter = nodemailer.createTransport({
  host: 'smtp.mailgun.org',
  port: 587,
  auth : {
    user:'postmaster@sandbox7dfbaaabbf7744c3ba77546be5250027.mailgun.org',
    pass: '2a8480d1366010ccbb7fbf0ed85215aa-f6fe91d3-85091868',
  }
});

async function sendContactEmail({ name, email, message }) {
  const mailOptions = {
    from: 'postmaster@sandbox7dfbaaabbf7744c3ba77546be5250027.mailgun.org',
    to: 'arianndrecaj5@gmail.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}