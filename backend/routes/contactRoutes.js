const express = require("express");
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
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: "postmaster@sandbox7dfbaaabbf7744c3ba77546be5250027.mailgun.org", // Mailgun domain email
    to: "arianndrecaj5@gmail.com", // Recipient email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Form data
  };

  // Send email via Mailgun SMTP
  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully", info });
  } catch (error) {
    console.log("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

module.exports = router;
