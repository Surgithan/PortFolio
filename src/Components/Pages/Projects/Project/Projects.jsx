import React from 'react';
import "./Projects.css";
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className='Project-container'>

      <div>
        <h2 style={{ fontWeight: 800, fontSize: "35px" }}>Projects</h2>
        <div style={{ width: "60px", height: "6px", borderRadius: "5px", backgroundColor: "#ffe81c" }}></div>
      </div>

      <div className="project-card-container">
        <ProjectCard/>
      </div>

    </div >
  )
}

export default Projects;
