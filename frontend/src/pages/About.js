import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'; // Assuming your CSS file is here for additional styling

function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src={`${process.env.PUBLIC_URL}/profile.jpeg`}
            alt="Profile"
            className="img-fluid rounded-circle profile-img mb-4"
          />
        </div>
        <div className="col-md-8">
          <h1 className="mb-3">About Me</h1>
          <p className="lead">
            Hello! I'm Arian, a passionate web developer with experience in modern web technologies.
          </p>
          <p>
            I specialize in creating responsive, user-friendly applications and enjoy working with both front-end and back-end technologies. My goal is to build solutions that make a positive impact.
          </p>
          <p>
            In my free time, I love exploring new technologies, contributing to open-source projects, and writing about my coding journey.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col text-center">
          <h2>Skills</h2>
          <p>JavaScript, React, Node.js, Laravel, express, MongoDB, and more</p>
        </div>
      </div>
    </div>
  );
}

export default About;
