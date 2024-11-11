import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <div
      className={`header ${
        isDarkMode ? "bg-dark text-light" : "bg-white text-dark"
      } shadow-sm border border-secondary rounded`}
    >
      <div className="container py-1 d-flex justify-content-center align-items-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
        </ul>
        <section
          style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
        >
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={60}
          />
        </section>
      </div>
    </div>
  );
}

export default Header;
