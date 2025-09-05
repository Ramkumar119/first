import React from "react";
import "../styles/About.css";
import profilePic from "../assets/profile.jpg"; // <-- place your image in src/assets

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        
        {/* Left side - Picture */}
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>

        {/* Right side - Summary */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm [Your Name], a passionate web developer who loves
            building modern, responsive, and interactive web applications.
            With experience in the MERN stack, I enjoy solving complex
            problems and continuously improving my skills in web development.
          </p>
          <p>
            Outside of coding, I enjoy fitness, exploring new technologies,
            and working on creative projects. I believe in lifelong learning
            and strive to create meaningful solutions that make an impact.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;
