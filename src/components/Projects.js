import React from "react";
import "../styles/Projects.css";
import project1pic from "../assets/project1pic.jpg";
import project2pic from "../assets/project2pic.jpg";
import project3pic from "../assets/project3pic.jpg";
import { FaArrowRight } from "react-icons/fa";

function Project() {
  const projects = [
    {
      id: 1,
      name: "Project One",
      img: project1pic,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      name: "Project Two",
      img: project2pic,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      name: "Project Three",
      img: project3pic,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  return (
    <section id="projects" className="projects-section">
      {projects.map((project) => (
        <div key={project.id} className="project">
          <div className="project-image-container">
            <img src={project.img} alt={project.name} className="project-image" />

            <div className="overlay">
              <h2 className="project-title">{project.name}</h2>
              <div className="description">
                <p>{project.desc}</p>
              </div>
              <div className="water-effect"></div>
            </div>
          </div>
        </div>
      ))}

      <div className="see-more">
        <a href="#more-projects">
          <p>See more projects</p>
          <FaArrowRight className="arrow-icon" />
        </a>
      </div>

    </section>
  );
}

export default Project;
