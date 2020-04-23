import React from 'react';
import {Link} from 'react-router-dom';

import SocialMedia from './SocialMedia';
import {
   Button
} from '../styles/HomeStyles';

import natureImg from '../images/nature.jpg';
import portraitImg from '../images/baby.jpg';
import worldImg from '../images/world.jpg';

function Home() {
    return (
        <div className='home-content'>
            <div className='top-content'>
             <div className='title'>
               <h1 className='para'>Paramo45</h1>
               <h1 className='photo'>Photography</h1>
             </div>
            </div>
            <Link to='/about'>
             <section className='about'>
              <p>“Souls cross ages like clouds cross skies, an' tho' a cloud's shape nor hue nor size don't stay the same, it's still a cloud an' so is a soul.” - David Mitchell, Cloud Atlas</p>
              <Button>About Me</Button>
            </section>
            </Link>
           
         <section className='photo-sections'>
            <Link to ='/nature'>
              <div className='nature'>
                  <h2>Nature</h2>
                  <img src={natureImg} alt='river with rocks'/>
               </div>
            </Link>
           
           <Link to='/portrait'>
             <div className='portrait'>
               <h2>Portrait</h2>
               <img src={portraitImg} alt='a baby'/>
            </div>
           </Link>

            <Link to='/world-around-me'>
              <div className='world'>
               <h2>World Around Me</h2>
               <img src={worldImg} alt=' chinese ornament'/>
            </div>
            </Link>
         </section>
         <SocialMedia />
        </div>
    )
};

export default Home;