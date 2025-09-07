import React from "react";
import "../styles/Footer.css";
import { FaEnvelope, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; 2025 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
