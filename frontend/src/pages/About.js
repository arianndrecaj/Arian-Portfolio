import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section id="about" className="container my-5 p-4 rounded shadow-lg bg-white">
      {/* Brief About section */}
      <h1 className="mb-3 text-primary">About Me</h1>
      <p className="lead text-secondary">
        Hello! I'm Arian, a passionate web developer with a love for creating intuitive and efficient web applications...
      </p>
      <button className="btn btn-outline-primary" onClick={handleOpenModal}>
        Read More
      </button>

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
                  I specialize in modern frameworks like Laravel,React,Node.js. Over the years, I’ve honed my skills in front-end
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
