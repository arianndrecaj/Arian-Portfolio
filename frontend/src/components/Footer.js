import React from "react";
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
      <div>
        <a href="https://facebook.com" className="text-white mx-2">Facebook</a>
        <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
        <a href="https://linkedin.com" className="text-white mx-2">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
