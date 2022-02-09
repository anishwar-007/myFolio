import React from 'react';
import { socialData } from '../../data/social';
import './socialcontact.css';
function SocialContact() {
    const data = socialData;
  return <div className='social-contact'> 
    {
        data.map((item)=>{
            return (
            <a href={item.link} target="/">
                <div className="social-icon-div">
                    <img src={item.logo} className="social-icon" alt='plotted'/>
                </div>
            </a>
            );
        })
    }
  </div>;
}

export default SocialContact;
