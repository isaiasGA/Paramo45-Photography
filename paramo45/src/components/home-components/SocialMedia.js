import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faTwitter,
  faYoutube

} from '@fortawesome/free-brands-svg-icons';

function SocialMedia(){
    return (
     <div className='social-container'>
       <h3>Follow me on Social Media:</h3>
       <a href='https://www.instagram.com/paramo_gs' className='instagram'><FontAwesomeIcon icon={faInstagram} size="2x"/></a> 
       <a href='https://twitter.com/IsaiasGar_Ar' className='twitter'><FontAwesomeIcon icon={faTwitter} size="2x"/></a> 
       <a href='https://www.youtube.com/channel/UC3tnGZEws3C1QkNHPcUQbVg' className='youtube'><FontAwesomeIcon icon={faYoutube} size="2x"/></a>  
    </div>
    )
};

export default SocialMedia;