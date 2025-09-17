import React from 'react';
import "./ProjectCard.css";
import Project_Images from "../images/projectasset"
import { Link } from 'react-router-dom';

const ProjectCard = () => {
    return (
        <div className='projects-grid' >
            {Project_Images.map((project, index) => (

                <div key={index} className="project-card" >

                    <img src={project.image} alt={project.name} className='project-image' />

                    <div className='overlay-icon'>

                        <Link to={project.link} target="_blank" rel="noopener noreferrer" >
                            <i className="fa fa-eye fa-2x "></i>
                        </Link>

                    </div>

                    <h5 className='project-name'>{project.name}</h5>

                </div>
            ))}
        </div>
    )
}

export default ProjectCard;
