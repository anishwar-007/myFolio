import React from 'react';
import Seperator from '../../common/seperator/Seperator';
import { projectData } from '../../data/projectData';
import ProjectCard from './ProjectCard';
import './projects.css'
function Projects() {
  const data = projectData;
  return <div>
      <Seperator/>
      <label className='section-title' >Projects</label>
      <div className="projects">
        {
          data.map((project) =>{
              return <ProjectCard project={project}/>
          })
        }
      </div>
  </div>;
}

export default Projects;
