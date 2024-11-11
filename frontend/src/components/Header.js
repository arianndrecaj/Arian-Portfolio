import React from "react";

function Header() {
  return (
    <div className="header bg-white text-dark shadow-sm border border-secondary rounded">
      <div className="container py-3 d-flex justify-content-center align-items-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
