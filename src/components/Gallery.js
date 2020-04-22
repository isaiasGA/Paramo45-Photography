import React, {useState} from 'react';
import Lightbox from 'fslightbox-react';


function Gallery(props) {
  const [toggle, setToggle] = useState(false);
  const [slide, setSlide] = useState(0);

  const showCase = (slide) => {
    setToggle(!toggle)
    setSlide(slide)

  } 
  return(

    <div className='gallery-container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',   alignContent: 'center',
    height: '516rem',
    backgroundColor: 'white',}}>
    <h1 className='nature-title'>Gallery</h1>
    <div className='images'>
      <img onClick={() => showCase(1)} src={props.gallery.imgWorld1} 
      />
      <img onClick={() => showCase(2)} src={props.gallery.imgPor1}  
      />
      <img onClick={() => showCase(3)} src={props.gallery.imgWorld2} 
      />
      <img onClick={() => showCase(4)} src={props.gallery.imgWorld3} 
      />
      <img onClick={() => showCase(5)} src={props.gallery.imgPor2}  
      />
      <img onClick={() => showCase(6)} src={props.gallery.imgWorld4}  
      />
      <img onClick={() => showCase(7)} src={props.gallery.imgNature1}  
      />
      <img onClick={() => showCase(8)} src={props.gallery.imgNature2}  
      />
      <img onClick={() => showCase(9)} src={props.gallery.imgWorld5} 
      />
      <img onClick={() => showCase(10)} src={props.gallery.imgNature3} 
      />
      <img onClick={() => showCase(11)} src={props.gallery.imgNature4} 
      />
      <img onClick={() => showCase(12)} src={props.gallery.imgWorld6} 
      />
      <img onClick={() => showCase(13)} src={props.gallery.imgWorld7} 
      />
      <img onClick={() => showCase(14)} src={props.gallery.imgWorld8} 
      />
      <img onClick={() => showCase(15)} src={props.gallery.imgWorld9} 
      />
      <img onClick={() => showCase(16)} src={props.gallery.imgWorld10} 
      />
      <img onClick={() => showCase(17)} src={props.gallery.imgWorld11} 
      />
      <img onClick={() => showCase(18)} src={props.gallery.imgWorld12} 
      />
      <img onClick={() => showCase(19)} src={props.gallery.imgWorld13} 
      />
      <img onClick={() => showCase(20)} src={props.gallery.imgWorld14} 
      />
      <img onClick={() => showCase(21)} src={props.gallery.imgWorld15} 
      />
      <img onClick={() => showCase(22)} src={props.gallery.imgNature5} 
      />
      <img onClick={() => showCase(23)} src={props.gallery.imgNature6} 
      />
      <img onClick={() => showCase(24)} src={props.gallery.imgWorld16} 
      />
      <img onClick={() => showCase(25)} src={props.gallery.imgWorld17} 
      />
      <img onClick={() => showCase(26)} src={props.gallery.imgWorld18} 
      />
      <img onClick={() => showCase(27)} src={props.gallery.imgWorld19} 
      />
      <img onClick={() => showCase(28)} src={props.gallery.imgNature7} 
      />
      <img onClick={() => showCase(29)} src={props.gallery.imgNature8} 
      />
      <img onClick={() => showCase(30)} src={props.gallery.imgWorld20} 
      />
      <img onClick={() => showCase(31)} src={props.gallery.imgNature9} 
      />
      <img onClick={() => showCase(32)} src={props.gallery.imgNature10} 
      />
      <img onClick={() => showCase(33)} src={props.gallery.imgWorld21} 
      />
      <img onClick={() => showCase(34)} src={props.gallery.imgWorld22} 
      />
      <img onClick={() => showCase(35)} src={props.gallery.imgNature11} 
      />
      <img onClick={() => showCase(36)} src={props.gallery.imgWorld23} 
      />
      <img onClick={() => showCase(37)} src={props.gallery.imgNature12} 
      />
      <img onClick={() => showCase(38)} src={props.gallery.imgPor3} 
      />
      <img onClick={() => showCase(39)} src={props.gallery.imgPor4} 
      />
      <img onClick={() => showCase(40)} src={props.gallery.imgPor5} 
      />
      <img onClick={() => showCase(41)} src={props.gallery.imgWorld24} 
      />
    </div>

    <Lightbox className='modal-container'
            toggler={toggle}
            slide={slide}
            sources= {[
             `${props.gallery.imgWorld1}`,
             `${props.gallery.imgPor1}`,
             `${props.gallery.imgWorld2}`,
             `${props.gallery.imgWorld3}`,
             `${props.gallery.imgPor2}`,
             `${props.gallery.imgWorld4}`,
             `${props.gallery.imgNature1}`,
             `${props.gallery.imgNature2}`,
             `${props.gallery.imgWorld5}`,
             `${props.gallery.imgNature3}`,
             `${props.gallery.imgNature4}`,
             `${props.gallery.imgWorld6}`,
             `${props.gallery.imgWorld7}`,
             `${props.gallery.imgWorld8}`,
             `${props.gallery.imgWorld9}`,
             `${props.gallery.imgWorld10}`,
             `${props.gallery.imgWorld11}`,
             `${props.gallery.imgWorld12}`,
             `${props.gallery.imgWorld13}`,
             `${props.gallery.imgWorld14}`,
             `${props.gallery.imgWorld15}`,
             `${props.gallery.imgNature5}`,
             `${props.gallery.imgNature6}`,
             `${props.gallery.imgWorld16}`,
             `${props.gallery.imgWorld17}`,
             `${props.gallery.imgWorld18}`,
             `${props.gallery.imgWorld19}`,
             `${props.gallery.imgNature7}`,
             `${props.gallery.imgNature8}`,
             `${props.gallery.imgWorld20}`,
             `${props.gallery.imgNature9}`,
             `${props.gallery.imgNature10}`,
             `${props.gallery.imgWorld21}`,
             `${props.gallery.imgWorld22}`,
             `${props.gallery.imgNature11}`,
             `${props.gallery.imgWorld23}`,
             `${props.gallery.imgNature12}`,
             `${props.gallery.imgPor3}`,
             `${props.gallery.imgPor4}`,
             `${props.gallery.imgPor5}`,
             `${props.gallery.imgWorld24}`
            ]}
            type='image'
          />
        </div>
    )
};
    


export default Gallery;