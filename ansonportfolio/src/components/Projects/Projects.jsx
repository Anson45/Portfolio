import React from 'react';
import './Projects.css'

import { UilMessage } from '@iconscout/react-unicons'
import project from "../../assets/project.png";


const Projects = () => {
    return (
        <section className="project section" id="projects">
            <div className="project_bg container project_container">
                <div className="project-grid grid">
                    <div className="project_data">
                        <h2 className="project_title">You have a new project</h2>
                        <p className="project_description">Contact me now and get a 30% discount on your new project.</p>
                        <a href="#contact" className="button button-flex button-white">Contact Me
                            <UilMessage className="project_icon button_icon"/>
                        </a>
                    </div>
                    <img src={project} alt="project image" className="project_image" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
