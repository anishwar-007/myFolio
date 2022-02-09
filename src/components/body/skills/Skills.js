import React from 'react';
import './skills.css';
import Seperator from '../../common/seperator/Seperator.js';
import { skillsData } from '../../data/skills';
import SkillCard from './SkillCard';
function Skills() {
  const data = skillsData;
  return <div className='skills'>
    <Seperator />
     <label className="section-title skills-title" > Skills </label>
      <div className="skills-container">
      {
       data.map((item) =>{
        return <div className="skills-section">
         <label className='skills-section-title'> {item.type}</label>
            <div className="skills-list">
              {item.list.map((skill) =>{
                  return <SkillCard skill={skill}/>
              })}
            </div>
         </div>
       })
     }
      </div>
  </div>;
}

export default Skills;

