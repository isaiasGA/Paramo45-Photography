import React, { useState } from 'react';
import Lightbox from 'fslightbox-react';

function Photos(props){
const [toggle, setToggle] = useState(false);
const [slide, setSlide] = useState(0);

const showCase = (slide) => {
  setToggle(!toggle)
  setSlide(slide)

}       /* An inline style was created in the "gallery-container" div in order to override the default styles that come with fslightbox */
    return(
        <div className='gallery-container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',   alignContent: 'center',
          height: '528rem',
          backgroundColor: 'white',}}>
          <div className='images'>
          <img onClick={() => showCase(1)} src={props.image.imgWorld1} 
          />
          <img onClick={() => showCase(2)} src={props.image.imgPor1}  
          />
          <img onClick={() => showCase(3)} src={props.image.imgWorld2} 
          />
          <img onClick={() => showCase(4)} src={props.image.imgWorld3} 
          />
           <img onClick={() => showCase(5)} src={props.image.imgPor2}  
          />
           <img onClick={() => showCase(6)} src={props.image.imgWorld4}  
          />
           <img onClick={() => showCase(7)} src={props.image.imgNature1}  
          />
           <img onClick={() => showCase(8)} src={props.image.imgNature2}  
          />
           <img onClick={() => showCase(9)} src={props.image.imgWorld5} 
          />
           <img onClick={() => showCase(10)} src={props.image.imgNature3} 
          />
           <img onClick={() => showCase(11)} src={props.image.imgNature4} 
          />
           <img onClick={() => showCase(12)} src={props.image.imgWorld6} 
          />
           <img onClick={() => showCase(13)} src={props.image.imgWorld7} 
          />
           <img onClick={() => showCase(14)} src={props.image.imgWorld8} 
          />
           <img onClick={() => showCase(15)} src={props.image.imgWorld9} 
          />
           <img onClick={() => showCase(16)} src={props.image.imgWorld10} 
          />
           <img onClick={() => showCase(17)} src={props.image.imgWorld11} 
          />
           <img onClick={() => showCase(18)} src={props.image.imgWorld12} 
          />
           <img onClick={() => showCase(19)} src={props.image.imgWorld13} 
          />
           <img onClick={() => showCase(20)} src={props.image.imgWorld14} 
          />
           <img onClick={() => showCase(21)} src={props.image.imgWorld15} 
          />
           <img onClick={() => showCase(22)} src={props.image.imgNature5} 
          />
           <img onClick={() => showCase(23)} src={props.image.imgNature6} 
          />
           <img onClick={() => showCase(24)} src={props.image.imgWorld16} 
          />
           <img onClick={() => showCase(25)} src={props.image.imgWorld17} 
          />
           <img onClick={() => showCase(26)} src={props.image.imgWorld18} 
          />
           <img onClick={() => showCase(27)} src={props.image.imgWorld19} 
          />
           <img onClick={() => showCase(28)} src={props.image.imgNature7} 
          />
           <img onClick={() => showCase(29)} src={props.image.imgNature8} 
          />
           <img onClick={() => showCase(30)} src={props.image.imgWorld20} 
          />
           <img onClick={() => showCase(31)} src={props.image.imgNature9} 
          />
           <img onClick={() => showCase(32)} src={props.image.imgNature10} 
          />
          <img onClick={() => showCase(33)} src={props.image.imgWorld21} 
          />
           <img onClick={() => showCase(34)} src={props.image.imgWorld22} 
          />
           <img onClick={() => showCase(35)} src={props.image.imgNature11} 
          />
          <img onClick={() => showCase(36)} src={props.image.imgWorld23} 
          />
          <img onClick={() => showCase(37)} src={props.image.imgNature12} 
          />
          <img onClick={() => showCase(38)} src={props.image.imgPor3} 
          />
          <img onClick={() => showCase(39)} src={props.image.imgPor4} 
          />
          <img onClick={() => showCase(40)} src={props.image.imgPor5} 
          />
          <img onClick={() => showCase(41)} src={props.image.imgWorld24} 
          />
          </div>

          <Lightbox className='modal-container'
            toggler={toggle}
            slide={slide}
            sources= {[
             `${props.image.imgWorld1}`,
             `${props.image.imgPor1}`,
             `${props.image.imgWorld2}`,
             `${props.image.imgWorld3}`,
             `${props.image.imgPor2}`,
             `${props.image.imgWorld4}`,
             `${props.image.imgNature1}`,
             `${props.image.imgNature2}`,
             `${props.image.imgWorld5}`,
             `${props.image.imgNature3}`,
             `${props.image.imgNature4}`,
             `${props.image.imgWorld6}`,
             `${props.image.imgWorld7}`,
             `${props.image.imgWorld8}`,
             `${props.image.imgWorld9}`,
             `${props.image.imgWorld10}`,
             `${props.image.imgWorld11}`,
             `${props.image.imgWorld12}`,
             `${props.image.imgWorld13}`,
             `${props.image.imgWorld14}`,
             `${props.image.imgWorld15}`,
             `${props.image.imgNature5}`,
             `${props.image.imgNature6}`,
             `${props.image.imgWorld16}`,
             `${props.image.imgWorld17}`,
             `${props.image.imgWorld18}`,
             `${props.image.imgWorld19}`,
             `${props.image.imgNature7}`,
             `${props.image.imgNature8}`,
             `${props.image.imgWorld20}`,
             `${props.image.imgNature9}`,
             `${props.image.imgNature10}`,
             `${props.image.imgWorld21}`,
             `${props.image.imgWorld22}`,
             `${props.image.imgNature11}`,
             `${props.image.imgWorld23}`,
             `${props.image.imgNature12}`,
             `${props.image.imgPor3}`,
             `${props.image.imgPor4}`,
             `${props.image.imgPor5}`,
             `${props.image.imgWorld24}`
            ]}
            type='image'
          />
        </div>
    )
};


export default Photos;