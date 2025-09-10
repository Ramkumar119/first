import React, { useState } from 'react';
import '../styles/Education.css';

const Education = () => {
  const [activeTab, setActiveTab] = useState('education');

  const biographyData = [
    {
      degree: "NPI Engineer",
      institution: "Syrma SGS Technologies",
      year: "2025-Present",
      description: "Developing and testing embedded firmware in C/C++ for new electronic products ensuring seamless hardware-software integration. ",
    }, 

    {
      degree: "Web Development Intern",
      institution: "NinjaFitness",
      year: "jan 2025-july 2025",
      description: "Delivered fUlly responsive Fullstack (MERN) Web Application with modern UI/Ux"
    },
    {
      degree: "AI Trainer",
      institution: "Outlier",
      year: "sept 2024-feb 2025",
      description: "Fine tuned several models corrected the code and their output and implemented new methodologies for fine tuning."
    }
  ];

  const skillsData = [
    { name: "JavaScript", level: 85 },
    { name: "C/C++", level: 90 },
    { name: "CSS", level: 95 },
    { name: "git/github", level: 70 },
    { name: "Python", level: 72 },
    { name: "React", level: 73 },
    { name: "Node.js", level: 82 },
    { name: "Express.js", level: 70 },
    { name: "SQL", level: 80 }
  ];

  const educationData = [
    {
      degree: "B.Tech In ECE (Specialization in AI & ML)",
      institution: "Netaji Subhash University Of Technology Delhi",
      year: "2021-2025",
      description: "Completed B.Tech In ECE( AI & ML) on focusing core AI and ML concepts and specializing core computer science fundamentals."
    },
    {
      degree: "12th Standard",
      institution: "Sarvodya Vidalaya Sector-6 Rohini Delhi",
      year: "2019-2020",
      description: "Completed 12th standard with 87.8% marks in PCM (Physics, Chemistry, Math)."
    },
    {
      degree: "10th Standard",
      institution: "Govt. boys sr. sc. school sector-1 rohini delhi",
      year: "2017-2018",
      description: "Completed 10th standard with 73.3% marks."
    }
  ];

  return (
    <div id="education" className="education-section">

      <div className="education-container">

       {/* Headline */}
      <div className="education-headline">
        <h2>Education</h2>
        <div className="underline"></div>
      </div>

        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-button ${activeTab === 'biography' ? 'active' : ''}`}
            onClick={() => setActiveTab('biography')}
          >
            Experience
          </button>
          <button 
            className={`tab-button ${activeTab === 'skills' ? 'active' : ''}`}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button 
            className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>

        {/* Content Area */}
        <div className="content-area">
          {activeTab === 'biography' && (
            <div className="education-content">
              {biographyData.map((bio, index) => (
                <div key={index} className="education-item">
                  <div className="education-marker"></div>
                  <div className="education-details">
                    <h3 className="education-degree">{bio.degree}</h3>
                    <p className="education-institution">{bio.institution}</p>
                    <span className="education-year">{bio.year}</span>
                    <p className="education-description">{bio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="skills-content">
              <div className="skills-grid">
                {skillsData.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="education-content">
              {educationData.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-marker"></div>
                  <div className="education-details">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <span className="education-year">{edu.year}</span>
                    <p className="education-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Education;
