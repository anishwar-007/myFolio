import React from "react";
import About from "./about/About";
import "./body.css";
import Contact from "./contact/Contact";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Work from "./work/Work";
function Body() {
  return (
    <div className="body">
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="work">
        <Work />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default Body;
