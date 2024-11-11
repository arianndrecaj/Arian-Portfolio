import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function About({ isDarkMode }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="about" className="container my-5">
      <div className="row">
        {/* About Me Section */}
        <div className="col-md-4 mb-4">
          <div className={`p-4 rounded shadow-lg ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'} h-100`}>
            <h3 className="text-primary"><i className="fa-solid fa-user"></i> About Me</h3>
            <p className="text-secondary">
              Hello! I'm Arian, a passionate web developer with a love for creating intuitive and efficient web applications...
            </p>
            <button className="btn btn-outline-primary" onClick={handleOpenModal}>
              Read More
            </button>
          </div>
        </div>

        {/* Source Code Section */}
        <div className="col-md-4 mb-4">
          <div className={`p-4 rounded shadow-lg ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'} h-100`}>
            <h3 className="text-primary"><i className="fab fa-github mr-2"></i> GitHub</h3>
            <p className="text-secondary">
              You can find the source code for my projects on GitHub. I specialize in modern web technologies and frameworks.
            </p>
            <a
              href="https://github.com/arianndrecaj"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Visit My GitHub
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-md-4 mb-4">
          <div className={`p-4 rounded shadow-lg ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'} h-100`}>
            <h3 className="text-primary"><i className="fa-solid fa-address-book"></i> Contact</h3>
            <p className="text-secondary">
              I'd love to hear from you! Feel free to reach out for collaborations or questions.
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
                className="btn btn-primary w-100 mb-3 text-white d-flex align-items-center justify-content-center"
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

      {/* Modal for expanded content */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-primary">About Me</h5>
                <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p className="text-secondary">
                  Hello! I'm Arian, a passionate web developer with a love for creating intuitive and efficient web applications.
                  I specialize in modern frameworks like Laravel, React, and Node.js. Over the years, I’ve honed my skills in front-end
                  and back-end development, always focusing on clean, scalable code and optimal user experience.
                </p>
                <p className="text-secondary">
                  My projects range from e-commerce platforms to real estate solutions, each designed to meet specific client needs. 
                  I am committed to continuous learning, always exploring the latest in web technology to stay at the forefront of industry trends.
                </p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
