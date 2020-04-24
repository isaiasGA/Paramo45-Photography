import React, {useState} from 'react';
import Lightbox from 'fslightbox-react';

function Nature(props) {
  const [toggle, setToggle] = useState(false);
  const [slide, setSlide] = useState(0);

const showCase = (slide) => {
  setToggle(!toggle)
  setSlide(slide)

}  
    return(
        <div className='nature-container' style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',   alignContent: 'center',
		  height: '168rem',
		  backgroundColor: 'white',}}>
			  <h1 className='nature-title'>Nature</h1>
			  <div className='images'>
			    <img onClick={() => showCase(1)} src={props.nature.imgNature1} alt=''
				 />
				 <img onClick={() => showCase(2)} src={props.nature.imgNature2} alt=''
				 />
				 <img onClick={() => showCase(3)} src={props.nature.imgNature3} alt=''
				 />
				 <img onClick={() => showCase(4)} src={props.nature.imgNature4} alt=''
				 />
				 <img onClick={() => showCase(5)} src={props.nature.imgNature5} alt=''
				 />
				 <img onClick={() => showCase(6)} src={props.nature.imgNature6} alt=''
				 />
				 <img onClick={() => showCase(7)} src={props.nature.imgNature7} alt=''
				 />
				 <img onClick={() => showCase(8)} src={props.nature.imgNature8} alt=''
				 />
				 <img onClick={() => showCase(9)} src={props.nature.imgNature9} alt=''
				 />
				 <img onClick={() => showCase(10)} src={props.nature.imgNature10} alt=''
				 />
				 <img onClick={() => showCase(11)} src={props.nature.imgNature11} alt=''
				 />
				 <img onClick={() => showCase(12)} src={props.nature.imgNature12} alt=''
				 />
			  </div>

			  <Lightbox className='modal-container'
				 toggler ={toggle}
				 slide={slide}
				 sources={[
					 `${props.nature.imgNature1}`,
					 `${props.nature.imgNature2}`,
					 `${props.nature.imgNature3}`,
					 `${props.nature.imgNature4}`,
					 `${props.nature.imgNature5}`,
					 `${props.nature.imgNature6}`,
					 `${props.nature.imgNature7}`,
					 `${props.nature.imgNature8}`,
					 `${props.nature.imgNature9}`,
					 `${props.nature.imgNature10}`,
					 `${props.nature.imgNature11}`,
					 `${props.nature.imgNature11}`,
				 ]} 
				 type='image'
			  />
        </div>
     )
};

export default Nature;