import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";
import MyResume from "../assets/MyResume.pdf";

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const homeRef = useRef(null);

  // Mouse move effect for water ripple
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (homeRef.current) {
        const rect = homeRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const homeElement = homeRef.current;
    if (homeElement) {
      homeElement.addEventListener("mousemove", handleMouseMove);
      return () => homeElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const handleHireMe = () => {
    window.location.href = "mailto:your-email@example.com?subject=Hiring Inquiry&body=Hi, I would like to discuss a potential opportunity with you.";
  };

  return (
    <section id="home" className="home" ref={homeRef}>
      {/* Water ripple effects */}
      <div className="ripple-container">
        <div 
          className="water-ripple primary" 
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        />
        <div 
          className="water-ripple secondary" 
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`
          }}
        />
      </div>

      {/* Floating bubbles */}
      <div className="bubbles-container">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="bubble" 
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`
            }}
          />
        ))}
      </div>

      <div className="content">
        <h2 className="headline sliding-text">
          <span className="gradient-text">Welcome to My Creative Portfolio</span>
        </h2>
        
        {/* First paragraph with wave effect */}
        <p className="paragraph-one wave-effect">
          <span className="line">I'm a passionate developer crafting digital experiences</span>
          <span className="line">that seamlessly blend innovation with functionality.</span>
          <span className="line">My expertise spans modern web technologies,</span>
          <span className="line">turning complex challenges into elegant solutions.</span>
        </p>

        {/* Second paragraph with glow effect */}
        <p className="paragraph-two glow-effect">
          <span className="line">From concept to deployment, I bring ideas to life</span>
          <span className="line">with clean code and pixel-perfect design.</span>
          <span className="line">Let's collaborate to create something extraordinary</span>
          <span className="line">that makes a lasting impact in the digital world.</span>
        </p>
      </div>

      <a 
        href={MyResume} 
        download="MyResume.pdf" 
        className="btn-resume"
        aria-label="Download Resume"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v10m0 0l-3-3m3 3l3-3"/>
          <path d="M9 21H15C16.6569 21 18 19.6569 18 18V13H6V18C6 19.6569 7.34315 21 9 21Z"/>
        </svg>
        Resume
      </a>

      <button 
        onClick={handleHireMe} 
        className="btn-hire"
        aria-label="Hire Me"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
        Hire Me
      </button>
    </section>
  );
}

export default Home;