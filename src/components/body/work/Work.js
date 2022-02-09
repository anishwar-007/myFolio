import React from 'react';
import Seperator from "../../common/seperator/Seperator";
// import { workData } from '../../data/workData';
// import WorkCard from './WorkCard';
import './work.css';
function Work() {
  // const data = workData; 
  return <div className='work'>
      <Seperator/>
      <label className="section-title">Work</label>
      <div className="work-list">
      {/* { 
       data.map((item)=>{
          return (
            <WorkCard item={item} />
          )
        })
      } */}
      <div className="initial-statement"> Ohh! Never worked before 😅</div>
      </div>
  </div>;
}

export default Work;
