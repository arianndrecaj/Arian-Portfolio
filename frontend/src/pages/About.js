import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "chart.js/auto";

function About({ isDarkMode }) {
  const [showModal, setShowModal] = useState(false);
  const [showDiagram, setShowDiagram] = useState(false); // Controls the middle section

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Data for the chart (example)
  const chartData = {
    labels: ["Laravel", "React", "JavaScript", "PHP", "Next.js", "Node.js"],
    datasets: [
      {
        label: "Proficiency (%)",
        data: [90, 75, 75, 80, 65, 73], // Example proficiency levels
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <section id="about" className="container my-5">
      <div className="row">
        {/* About Me Section */}
        <div className="col-md-6 mb-4">
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

        {/* GitHub Section */}
        <div className="col-md-6 mb-4">
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
      </div>

      {/* Technical Skills Section */}
      <div className="row">
        <div className="col-12 mb-4">
          <div className={`p-5 rounded shadow-lg ${isDarkMode ? 'bg-dark text-light' : 'bg-white text-dark'} h-100`}>
            <h3 className="text-primary"><i className="fas fa-layer-group mr-2"></i> Technical Skills</h3>
            <p className="text-secondary mb-3">Explore my expertise in web development technologies and frameworks.</p>

            <button
              onClick={() => setShowDiagram(!showDiagram)}
              className="btn btn-primary"
            >
              {showDiagram ? "Hide Proficiency" : "View Proficiency"}
            </button>

            {/* Show or hide the proficiency diagram based on the state */}
            {showDiagram && (
              <div className="mt-1" style={{ height: '250px' }}>
                <h5 className="text-center">Tech Stack Proficiency</h5>
                <Bar data={chartData} options={chartOptions} />
              </div>
            )}
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
