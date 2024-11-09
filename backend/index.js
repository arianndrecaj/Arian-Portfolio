// Backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const nodemailer = require('nodemailer');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

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

app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// const transporter = nodemailer.createTransport({
//   host: 'smtp.mailgun.org',
//   port: 587,
//   auth : {
//     user:'postmaster@sandbox7dfbaaabbf7744c3ba77546be5250027.mailgun.org',
//     pass: '2a8480d1366010ccbb7fbf0ed85215aa-f6fe91d3-85091868',
//   }
// });

// async function sendContactEmail({ name, email, message }) {
//   const mailOptions = {
//     from: 'postmaster@sandbox7dfbaaabbf7744c3ba77546be5250027.mailgun.org',
//     to: 'arianndrecaj5@gmail.com',
//     subject: 'New Contact Form Submission',
//     text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log('Error sending email:', error);
//     } else {
//       console.log('Email sent:', info.response);
//     }
//   });
// }