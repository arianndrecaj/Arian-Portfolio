import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const projects = [
  {
    title: "Pelikani",
    description:
      "Pelikani is created for individuals and real estate agencies, offering an integrated space to manage listings and present your services. Made with Laravel/React.",
    image: `${process.env.PUBLIC_URL}/pelikani.jpeg`,
    link: "https://pelikani.net/", // Live website link
    github: "https://github.com/arianndrecaj/not-available", // GitHub repo link
  },
  {
    title: "ClinicPro",
    description:
      "ClinicPro, a powerful healthcare management platform designed to streamline appointment scheduling, clinic discovery, and medical record management—all in one seamless system.",
    image: `${process.env.PUBLIC_URL}/clinicpro.png`,
    link: "https://pelikani.net/", // Live website link
    github: "https://github.com/arianndrecaj/Arian-Portfolio", // GitHub repo link
  },
  {
    title: "Selita Finesse",
    description:
      "A shopping site built with Next.js, providing a fast and smooth experience for users, with dynamic product catalog, user authentication, cart, and checkout. Optimized for SEO, ensuring high performance and scalability.",
    image: `${process.env.PUBLIC_URL}/selita.jpg`,
    link: "https://selitafinesse.com/", // Live website link
    github: "https://github.com/arianndrecaj/finesse", // GitHub repo link
  },
  {
    title: "Mario Construction",
    description:
      "Mario Construction is a landing page for a construction company, built to provide a clean and professional experience for visitors. Optimized for performance and responsive design, showcasing the company’s work and services.",
    image: `${process.env.PUBLIC_URL}/mario.png`,
    link: "https://mariooconstruction.com/", // Live website link
    github: "https://github.com/arianndrecaj/mario-construction.git", // GitHub repo link
  },
];

function Projects({ isDarkMode }) {
  const cardBackgroundColor = isDarkMode ? "#444" : "#fff"; // Dark mode background vs light mode background
  const textColor = isDarkMode ? "#fff" : "#333"; // Dark mode text vs light mode text
  const cardBorderColor = isDarkMode ? "#555" : "#ddd"; // Dark mode border vs light mode border

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: isDarkMode ? "#333" : "#f9f9f9" }}
    >
      <div className="container">
        <h2
          className="text-center mb-4 text-primary fa-diagram-project fa-solid"
          style={{ color: textColor }}
        >
          My Projects
        </h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card h-100 shadow-lg border-0 rounded-lg"
                onClick={() => window.open(project.link, "_blank")}
                style={{
                  cursor: "pointer",
                  backgroundColor: cardBackgroundColor,
                  border: `1px solid ${cardBorderColor}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div className="card-img-container">
                  <img
                    src={project.image}
                    className="card-img-top rounded-top"
                    alt={project.title}
                    style={{
                      objectFit: "cover",
                      height: "200px", // Equal image size for all
                    }}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ color: textColor }}>
                    {project.title}
                  </h5>
                  <p className="card-text" style={{ color: textColor }}>
                    {project.description}
                  </p>

                  <div className="d-flex mt-auto">
                    {/* GitHub Link with Icon */}
                    <button
                      onClick={() => window.open(project.github, "_blank")}
                      className="btn btn-dark mt-2"
                      style={{
                        color: "#fff",
                        textDecoration: "none",
                        marginRight: "10px",
                      }}
                    >
                      <i className="fab fa-github"></i> View on GitHub
                    </button>

                    {/* View Live Website Button */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-2"
                      style={{ color: "#fff", textDecoration: "none" }}
                    >
                      <i className="fas fa-external-link-alt"></i> View Live
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "Connect with me" and "Contact" Section on the Same Row */}
        <h2
          className="text-center mb-4 text-primary fa-solid fa-paperclip"
          style={{ color: textColor }}
        >
          Connect with me
        </h2>

        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <div
              className={`p-4 rounded shadow-lg ${
                isDarkMode ? "bg-dark text-light" : "bg-white text-dark"
              } h-100`}
            >
              <h3 className="text-primary">
                <i className="fa-solid fa-address-book"></i> Contact
              </h3>
              <p className="text-secondary">
                I'd love to hear from you! Feel free to reach out for
                collaborations or questions.
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

          {/* Optional: Add any other column or content here for additional information */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
