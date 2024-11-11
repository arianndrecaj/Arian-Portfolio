import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Optional, for additional styling

function Contact() {
  return (
    <section id="contact" className="py-5">
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <h2 className="text-center mb-4 text-primary font-weight-bold">Get in Touch</h2>

          <div className="card shadow-lg rounded-lg border-0 p-4">
            <h4 className="text-center mb-3">I'd love to hear from you!</h4>
            <p className="text-center mb-4">
              Feel free to reach out to me via email or LinkedIn for any inquiries or collaborations.
            </p>

            <div className="d-flex flex-column align-items-center">
              {/* Email Button */}
              <a
                href="mailto:ndrecajarian3@gmail.com"
                className="btn btn-primary w-100 mb-3 text-white d-flex align-items-center justify-content-center"
                style={{
                  fontSize: "1.1rem",
                  padding: "12px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-envelope-fill me-2"></i> 
                Send me an Email
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/arian-ndrecaj-163371235/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary w-100 text-dark d-flex align-items-center justify-content-center"
                style={{
                  fontSize: "1.1rem",
                  padding: "12px 20px",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                <i className="bi bi-linkedin me-2"></i>
                Connect with me on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Contact;
