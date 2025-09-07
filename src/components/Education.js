import React from "react";
import "../styles/Education.css";

function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-content">
        <div className="education-item">
          <h3>Graduation</h3>
          <p><strong>Year:</strong> 2021 - 2025</p>
          <p><strong>University:</strong> Netaji Subhash University of Technology, Delhi</p>
          <p><strong>Grade:</strong> 7 CGPA</p>
          <p><strong>Branch:</strong> ECE (AI & ML)</p>
        </div>
        <div className="education-item">
          <h3>12th Standard</h3>
          <p><strong>Year:</strong> 2019 - 2020</p>
          <p><strong>School:</strong> Sarvodaya Vidyalaya, Rohini, Delhi</p>
          <p><strong>Percentage:</strong> 87.8%</p>
          <p><strong>Subjects:</strong> PCM</p>
        </div>
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="skills-content">
        <div className="skill-item">
          <h4>Frontend</h4>
          <p>React.js, Redux, HTML, CSS, JavaScript</p>
        </div>
        <div className="skill-item">
          <h4>Backend</h4>
          <p>Node.js, Express.js, FastAPI</p>
        </div>
        <div className="skill-item">
          <h4>Database</h4>
          <p>MongoDB, MySQL, SQLite</p>
        </div>
        <div className="skill-item">
          <h4>Tools & Technologies</h4>
          <p>Git, Docker, AWS, Kubernetes, Netlify, Heroku</p>
        </div>
      </div>

      <h2 className="section-title">Experience</h2>
      <div className="experience-content">
        <div className="experience-item">
          <h4>Syrma SGS Technology</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac bibendum nulla.</p>
        </div>
        <div className="experience-item">
          <h4>Outlier</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac bibendum nulla.</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
