import React from "react";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import MyResume from "../assets/MyResume.pdf";       // placeholder, replace with actual
import ProfileImage from "../assets/BackgroundHome.jpg";      // background image

function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyResume;
    link.download = "MyResume.pdf";
    link.click();
  };

   // Generate random stars on mount
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [];
    for (let i = 0; i < 100; i++) {
      generatedStars.push({
        id: i,
        left: Math.random() * 100,          // percent from 0% to 100%
        size: Math.random() * 2 + 1,        // size from 1px to 3px
        delay: Math.random() * 10,          // delay from 0s to 10s
        duration: Math.random() * 5 + 5,    // duration from 5s to 10s
        opacity: Math.random() * 0.5 + 0.5  // opacity from 0.5 to 1
      });
    }
    setStars(generatedStars);
  }, []);

 
  return (
    <div id="home" className="home">
      {/*stars section  */}
   
       <div className="stars">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h3>Welcome To My Portfolio, I’m</h3>
          <h1>Well Versed Software Developer</h1>
          <p>Software Development | Web Development | Product Designer | Open to remote work / Unrestricted work authorization</p>
          <button className="download-btn" onClick={handleDownload}>
            Download CV
          </button>
        </div>
      </div>
            
    </div>
  );
}

export default Home;
