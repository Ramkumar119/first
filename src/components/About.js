import React, { useEffect, useState, useRef } from "react";
import "../styles/About.css";
import MyResume from "../assets/MyResume.pdf";
import ProfileImage from "../assets/profile.jpg";

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const aboutRef = useRef(null);

  // Mouse move effect for subtle interactions
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (aboutRef.current) {
        const rect = aboutRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const aboutElement = aboutRef.current;
    if (aboutElement) {
      aboutElement.addEventListener("mousemove", handleMouseMove);
      return () => aboutElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleHireMe = () => {
    window.location.href = "mailto:rk12345agaria@gmail.com?subject=Hiring Inquiry&body=Hi, I would like to discuss a potential opportunity with you.";
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-container">

        {/* Left Side - Profile Picture */}
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="water-border"></div>
            <img src={ProfileImage} alt="Profile" className="profile-image" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="content-section">

          {/* Headline Section */}
          <div className="headline-container">
            <h1 className="main-headline">
              HELLO, I'm <span className="name-highlight">...Ram</span>
            </h1>
            <p className="greeting-text">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          {/* Description Section */}
          <div className="description-container">
            <p className="description-text">
              I'm a passionate developer crafting digital experiences that seamlessly 
              blend innovation with functionality. My expertise spans modern web technologies, 
              turning complex challenges into elegant solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="action-section">
            <a 
               href={MyResume} 
               target="_blank" 
               rel="noopener noreferrer"
               className="hire-btn"
               aria-label="Open Resume in new tab"
              >
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
             </svg>
            Resume
           </a>

           <a 
              href="#a" 
                className="hire-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleHireMe(); 
                  }}
                >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              Hire Me
              </a>
            
          </div>
           <div className="action-section">
            <a 
              href="https://leetcode.com/u/its_ramkumar01/" 
                className="hire-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Know More"
                >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              LeetCode
              </a>

            <a 
              href="https://github.com/Ramkumar119" 
                className="hire-btn"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Know More"
                >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              Github
              </a>

          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="bg-decorations">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </section>
  );
}

export default About;
