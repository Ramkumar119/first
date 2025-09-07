import React, { useState } from "react";
import "../styles/Navbar.css";
import MyResume from "../assets/MyResume.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href={MyResume} download="RamKumar_Resume.pdf" className="logo-link">
        <h1 className="logo">
          <span className="logo-text">Ram Kumar</span>
          <span className="resume-indicator">📄</span>
        </h1>
      </a>

      <div 
        className={`menu-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
        <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;