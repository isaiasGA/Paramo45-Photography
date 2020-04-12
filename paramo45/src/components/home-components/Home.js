import React from 'react';
import SocialMedia from './SocialMedia';

import natureImg from './images/nature.jpg';
import urbanImg from './images/urban.jpg';
import worldImg from './images/world.jpg';

function Home() {
    return (
        <div className='home-content'>
            <div className='top-content'>
               <button>Gallery</button>
            </div>
            <section className='about'>
               <p>“Souls cross ages like clouds cross skies, an' tho' a cloud's shape nor hue nor size don't stay the same, it's still a cloud an' so is a soul.” - David Mitchell, Cloud Atlas</p>
               <button>About Me</button>
         </section>
         <section className='photo-sections'>
            <div className='nature'>
               <h2>Nature</h2>
               <img src={natureImg} alt='river with rocks'/>
            </div>
            <div className='urban'>
               <h2>Urban</h2>
               <img src={urbanImg} alt='church tower'/>
            </div>
            <div className='world'>
               <h2>World Around Me</h2>
               <img src={worldImg} alt=' chinese ornament'/>
            </div>
         </section>
         <SocialMedia />
        </div>
    )
};

export default Home;