import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Custom styling can be added here

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMessage(""); // Clear any previous feedback

    try {
      const response = await fetch("http://localhost:5003/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedbackMessage("Message sent successfully!");
        setFeedbackType("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFeedbackMessage("There was an error sending your message. Please try again.");
        setFeedbackType("danger");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setFeedbackMessage("An error occurred. Please check your connection and try again.");
      setFeedbackType("danger");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h2 className="text-center mb-4 text-primary font-weight-bold">Contact Arian</h2>

          {feedbackMessage && (
            <div className={`alert alert-${feedbackType} text-center`} role="alert">
              {feedbackMessage}
            </div>
          )}

          <div className="card shadow-lg rounded-lg border-0 p-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label font-weight-semibold">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label font-weight-semibold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control shadow-sm"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label font-weight-semibold">
                  Message
                </label>
                <textarea
                  className="form-control shadow-sm"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 py-2 shadow-lg border-0"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
