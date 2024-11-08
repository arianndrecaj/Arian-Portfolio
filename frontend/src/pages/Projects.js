import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const projects = [
  {
    title: "Pelikani",
    description:
      "Pelikani is created for individuals and real estate agencies, offering an integrated space to manage listings and present your services. Made with Laravel/React.",
    image: `${process.env.PUBLIC_URL}/pelikani.jpeg`,
    link: "https://pelikani.net/",
  },
  {
    title: "Selita Finesse",
    description:
      "A shopping site built with Next.js, providing a fast and smooth experience for users, with dynamic product catalog, user authentication, cart, and checkout. Optimized for SEO, ensuring high performance and scalability.",
    image: `${process.env.PUBLIC_URL}/selita.jpg`,
    link: "https://mariooconstruction.com/",
  },
  {
    title: "Mario Construction",
    description:
      "Mario Construction is a landing page for a construction company, built to provide a clean and professional experience for visitors. Optimized for performance and responsive design, showcasing the company’s work and services.",
    image: `${process.env.PUBLIC_URL}/mario.png`,
    link: "https://selitafinesse.com/",
  },
];

function Projects() {
  return (
    <div className="container my-0">
      <h1 className="text-center mb-4 text-primary">
      </h1>

      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card h-100 shadow-lg border-0 rounded-lg"
              onClick={() => window.open(project.link, "_blank")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={project.image}
                className="card-img-top rounded-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">{project.title}</h5>
                <p className="card-text text-muted">{project.description}</p>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-outline-primary w-100">
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
