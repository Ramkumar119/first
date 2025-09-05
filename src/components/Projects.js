import React from "react";
import "../styles/Projects.css";
import project1pic from "../assets/project1pic.jpg";
import project2pic from "../assets/project2pic.jpg";
import project3pic from "../assets/project3pic.jpg";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  const projects = [
    { id: 1, name: "Project One", img: project1pic, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { id: 2, name: "Project Two", img: project2pic, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
    { id: 3, name: "Project Three", img: project3pic, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">My Projects</h2>
      
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.name} className="project-img" />
            <div className="project-overlay">
              <h3>{project.name}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </div> 
      <div className="see-more">
        <a href="#more-projects">
          <p>See more projects</p>
          <FaArrowRight className="arrow-icon" />
        </a>
      </div>
    </section>
  );
}

export default Projects;
