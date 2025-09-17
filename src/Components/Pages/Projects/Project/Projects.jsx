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

      {/* <div className='projects-grid' >
        {Project_Images.map((project, index) => (

          <div key={index} className={`project-card ${index < 3 ? "first-row" : ""}`}>

            <img src={project.image} alt={project.name} className='project-image' />

            <div className='overlay-icon'>

              <Link to={project.link} target="_blank" rel="noopener noreferrer" >
                <i className="fa fa-eye fa-2x "></i>
              </Link>

            </div>

            <h5 className='project-name'>{project.name}</h5>

          </div>
        ))}
      </div> */}

      <div className="project-card-container">
        <ProjectCard/>
      </div>

    </div >
  )
}

export default Projects;
