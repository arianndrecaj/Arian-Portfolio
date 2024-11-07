const express = require("express");
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
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.MAILGUN_USER, // Use environment variable
    to: process.env.RECIPIENT_EMAIL, // Use environment variable
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Form data
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Message sent successfully", info });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
