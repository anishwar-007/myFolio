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
                "1- Ethusiastic Dev",
                1000,
                "2- Full Stack Developer",
                1000,
                "3- MERN Stack Developer",
                1000,
                "4- Competitive Programmer",
                1000,
                "5- ReactJS Developer",
                1000,
            ]}
            className="airrack"
            />
        
         </div> 
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/coder.jpeg")} alt=""
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
