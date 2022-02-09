import React from 'react';
import './contact.css';
import SocialContact from '../../common/social-contact/SocialContact';
import Seperator from '../../common/seperator/Seperator';
function Contact() {
  return <div className='contact'>
    <Seperator/>
   <label className='section-title'> Contact </label>
   <div className="contact-container">
     <div className="contact-left">
       <p>Want to get in touch? Contact me on any of the Platform.</p>
        <SocialContact />
     </div>
     <div className="download">
        <a download href={require('../../../assets/resume.pdf')}>
        <i class="fi fi-rr-cloud-download download-icon"></i>
              Download Resume 
        </a>
     </div>
   </div>
  </div>;
}

export default Contact;
