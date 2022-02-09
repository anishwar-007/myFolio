import React from "react";
import './about.css';
import Typical from "react-typical";
import SocialContact from "../../common/social-contact/SocialContact";
function About() {
  return (
    <div>
      <div className="about-top">
          <div className="about-info">
              <div className="about-info-words">
        Hi there 👋, I'm <br />
        <span className="about-name">Anishwar Sharma</span>
        I have a Knack of building of Web Apps.
              </div>

         <div className="describer"> 
           
            <Typical
              loop={Infinity}
              steps={[
                "Ethusiastic Dev (°□°)",
                1000,
                "Full Stack Developer (｡^‿^｡) ",
                1000,
                "MERN Stack Developer ('^_^')",
                1000,
                "Competitive Programmer (︶︿︶)",
                1000,
                "ReactJS Developer (.'ᴗ'.)",
                1000,
            ]}
            className="airrack"
            />
        
         </div> 
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/coder.png")} alt=""
          className="my-pic" />
        </div>
      </div>

      <div className="about-bottom">
          <SocialContact />
      </div>
    </div>
  );
}

export default About;
