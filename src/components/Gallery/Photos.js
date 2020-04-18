import React, { useState } from 'react';
import Lightbox from 'fslightbox-react';

function Photos(props){
const [toggle, setToggle] = useState(false);
const [slide, setSlide] = useState(0);

const showCase = (slide) => {
  setToggle(!toggle)
  setSlide(slide)
}
    return(
        <div className='gallery-container'>
          <img onClick={() => showCase(1)} src={props.image.img1}
          alt={'sunset at the beach'} 
          />
          <img onClick={() => showCase(2)} src={props.image.img2}
          alt={'portrait of a kid'} 
          />
          <img onClick={() => showCase(3)} src={props.image.img3}
          alt={'big bubble'} 
          />
          <img onClick={() => showCase(4)} src={props.image.img4}
          alt={'sd'} 
          />
           <img onClick={() => showCase(5)} src={props.image.img5}
          alt={''} 
          />
           <img onClick={() => showCase(7)} src={props.image.img7}
          alt={''} 
          />
           <img onClick={() => showCase(8)} src={props.image.img8}
          alt={''} 
          />
           <img onClick={() => showCase(9)} src={props.image.img9}
          alt={''} 
          />
           <img onClick={() => showCase(10)} src={props.image.img10}
          alt={''} 
          />
           <img onClick={() => showCase(11)} src={props.image.img11}
          alt={''} 
          />
           <img onClick={() => showCase(12)} src={props.image.img12}
          alt={''} 
          />
           <img onClick={() => showCase(13)} src={props.image.img13}
          alt={''} 
          />
           <img onClick={() => showCase(14)} src={props.image.img14}
          alt={''} 
          />
           <img onClick={() => showCase(16)} src={props.image.img16}
          alt={''} 
          />
           <img onClick={() => showCase(17)} src={props.image.img17}
          alt={''} 
          />
           <img onClick={() => showCase(18)} src={props.image.img18}
          alt={''} 
          />
           <img onClick={() => showCase(19)} src={props.image.img19}
          alt={''} 
          />
           <img onClick={() => showCase(20)} src={props.image.img20}
          alt={''} 
          />
           <img onClick={() => showCase(21)} src={props.image.img21}
          alt={''} 
          />
           <img onClick={() => showCase(22)} src={props.image.img22}
          alt={''} 
          />
           <img onClick={() => showCase(23)} src={props.image.img23}
          alt={''} 
          />
           <img onClick={() => showCase(24)} src={props.image.img24}
          alt={''} 
          />
           <img onClick={() => showCase(25)} src={props.image.img25}
          alt={''} 
          />
           <img onClick={() => showCase(26)} src={props.image.img26}
          alt={''} 
          />
           <img onClick={() => showCase(27)} src={props.image.img27}
          alt={''} 
          />
           <img onClick={() => showCase(28)} src={props.image.img28}
          alt={''} 
          />
           <img onClick={() => showCase(29)} src={props.image.img29}
          alt={''} 
          />
           <img onClick={() => showCase(30)} src={props.image.img30}
          alt={''} 
          />
           <img onClick={() => showCase(31)} src={props.image.img31}
          alt={''} 
          />
           <img onClick={() => showCase(32)} src={props.image.img32}
          alt={''} 
          />
           <img onClick={() => showCase(33)} src={props.image.img33}
          alt={''} 
          />
           <img onClick={() => showCase(34)} src={props.image.img34}
          alt={''} 
          />
           <img onClick={() => showCase(35)} src={props.image.img36}
          alt={''} 
          />
           <img onClick={() => showCase(37)} src={props.image.img37}
          alt={''} 
          />
          <img onClick={() => showCase(38)} src={props.image.img38}
          alt={''} 
          />
          <img onClick={() => showCase(39)} src={props.image.img39}
          alt={''} 
          />
          <img onClick={() => showCase(40)} src={props.image.img40}
          alt={''} 
          />
          <img onClick={() => showCase(41)} src={props.image.img41}
          alt={''} 
          />
          <img onClick={() => showCase(42)} src={props.image.img42}
          alt={''} 
          />
        
          <Lightbox 
            toggler={toggle}
            slide={slide}
            sources= {[
             `${props.image1}`,
            ]}
            type='image'
          />
        </div>
    )
};


export default Photos;