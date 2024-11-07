const express = require("express");
<<<<<<< HEAD
const nodemailer = require("nodemailer");
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");

// Create Nodemailer transporter for Mailgun
const transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: process.env.MAILGUN_USER, // Use environment variable
    pass: process.env.MAILGUN_PASS, // Use environment variable
  },
});

// Get all contact messages
router.get("/contact-messages", async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve messages" });
  }
});

// Get a specific contact message by ID
=======
const router = express.Router();
const ContactMessage = require("../models/ContactMessage");

router.get("/contact-messages", async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrive message" });
  }
});

>>>>>>> f7e7e5d2e1885ea24a59ab3ce77fd49095fbf30e
router.get("/contact-messages/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const message = await ContactMessage.findById(id);
    if (!message) {
      return res.status(400).json({ message: "Message not found" });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve message" });
  }
});

// Post a new contact message
<<<<<<< HEAD
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.MAILGUN_USER, // Use environment variable
    to: process.env.RECIPIENT_EMAIL, // Use environment variable
=======
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "postmaster@sandbox7dfbaaabbf7744c3ba77546be5250027.mailgun.org", // Mailgun domain email
    to: "arianndrecaj5@gmail.com", // Recipient email
>>>>>>> f7e7e5d2e1885ea24a59ab3ce77fd49095fbf30e
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Form data
  };

<<<<<<< HEAD
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
=======
  // Send email via Mailgun SMTP
  try {
    const info = await transporter.sendMail(mailOptions);
>>>>>>> f7e7e5d2e1885ea24a59ab3ce77fd49095fbf30e
    res.status(200).json({ message: "Message sent successfully", info });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
