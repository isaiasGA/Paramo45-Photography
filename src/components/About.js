import React from 'react';
import selfie from './images/selfie.jpg';

function About() {
    return(
        <div className='about-container'>
          <h1> About Me</h1>
          <div className='message'>
				 <img src={selfie}/>
            <h2>Isaias Garcia</h2>    
				<p>Photography has been an important hobby in my life, which is why I have created this web application in order to showcase my favorite collection of photographies that I have taken in the past few years. I hope you enjoy browsing through my collection as much as I have enjoyed taking each individual photography.
				</p>
          </div>
        </div>
    )
};

export default About;