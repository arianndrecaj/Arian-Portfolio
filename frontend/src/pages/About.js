import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Assuming your CSS file is here for additional styling

function About() {
  return (
    <div className="container my-5 p-4 rounded shadow-lg bg-white">
      <div className="row">
        {/* Profile Image Column */}
        <div className="col-md-4 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/arian.jpeg`}
            alt="Profile"
            className="img-fluid rounded-circle profile-img mb-4 border border-3 border-secondary"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          {/* Skills Section */}
          <div className="mt-1 col-md-8">
            <h2 className="text-primary">Skills</h2>
            <p className="text-secondary">JavaScript, React, Node.js, Laravel, Express, MongoDB, and more.</p>
          </div>
          <div className="mt-4 col-md-8">
            <p><strong>LinkedIn:</strong></p>
            <a
              href="https://www.linkedin.com/in/arian-ndrecaj-163371235/?trk=opento_sprofile_details"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary"
            >
              Visit my LinkedIn Profile
            </a>
          </div>
        </div>

        {/* About Me and Experience Section */}
        <div className="col-md-8">
          {/* About Me Section */}
          <div className="mb-4">
            <h1 className="mb-3 text-primary">About Me</h1>
            <p className="lead text-secondary">
              Hello! I'm Arian, a passionate web developer with experience in modern web technologies.
            </p>
            <p>
              I specialize in creating responsive, user-friendly applications and enjoy working with both front-end and back-end technologies. My goal is to build solutions that make a positive impact.
            </p>
            <p>
              In my free time, I love exploring new technologies, contributing to open-source projects, and writing about my coding journey.
            </p>
          </div>

          {/* Experience Section */}
          <div>
            <h1 className="mb-3 text-primary">Experience</h1>
            <div className="mb-3 p-3 border-start border-5 border-primary">
              <p className="lead fw-bold">Virtus Lending (Aug 2023 - Apr 2024 · 9 mos)</p>
              <p>
                At Virtus Lending, I served as an intern software developer, where I gained hands-on experience in PHP, Laravel, Zend, JavaScript, Linux OS, OOP, and Nginx under the mentorship of seasoned professionals.
              </p>
            </div>
            <div className="mb-3 p-3 border-start border-5 border-primary">
              <p className="lead fw-bold">Freelance Web Developer (May 2024 - Present)</p>
              <p>
                Developed custom web applications using React, Node.js, and Laravel. Focused on responsive design, user experience, and backend integration.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default About;
