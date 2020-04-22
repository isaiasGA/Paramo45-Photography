import React, {useState} from 'react';
import Lightbox from 'fslightbox-react';

function Portrait(props) {
  const [toggle, setToggle] = useState(false);
  const [slide, setSlide] = useState(0);

const showCase = (slide) => {
  setToggle(!toggle)
  setSlide(slide)

}  
    return(
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',   alignContent: 'center',
		  height: '103rem',
		  backgroundColor: 'white',}}>
			  <h1 className='nature-title'>Portrait</h1>
			  <div className='images'>
			    <img onClick={() => showCase(1)} src={props.portrait.imgPor1}
				 />
				 <img onClick={() => showCase(2)} src={props.portrait.imgPor2}
				 />
				 <img onClick={() => showCase(3)} src={props.portrait.imgPor3}
				 />
				 <img onClick={() => showCase(4)} src={props.portrait.imgPor4}
				 />
				 <img onClick={() => showCase(5)} src={props.portrait.imgPor5}
				 />
			  </div>

			  <Lightbox className='modal-container'
				 toggler ={toggle}
				 slide={slide}
				 sources={[
					 `${props.portrait.imgPor1}`,
					 `${props.portrait.imgPor2}`,
					 `${props.portrait.imgPor3}`,
					 `${props.portrait.imgPor4}`,
					 `${props.portrait.imgPor5}`,
				 ]} 
				 type='image'
			  />
        </div>
     )
};

export default Portrait;