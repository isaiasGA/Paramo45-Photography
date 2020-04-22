import React, {useState} from 'react';
import Lightbox from 'fslightbox-react';

function World(props) {
  const [toggle, setToggle] = useState(false);
  const [slide, setSlide] = useState(0);

const showCase = (slide) => {
  setToggle(!toggle)
  setSlide(slide)

}  
    return(
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center',   alignContent: 'center', height: '313rem', backgroundColor: 'white',}}>
		  <h1 className='nature-title'>World Around Me</h1>
		  <div className='images'>
            <img onClick={() => showCase(1)} src={props.world.imgWorld1} 
            />
            <img onClick={() => showCase(2)} src={props.world.imgWorld2}  
            />
            <img onClick={() => showCase(3)} src={props.world.imgWorld3} 
            />
            <img onClick={() => showCase(4)} src={props.world.imgWorld4} 
            />
            <img onClick={() => showCase(5)} src={props.world.imgWorld5}  
            />
            <img onClick={() => showCase(6)} src={props.world.imgWorld6}  
            />
            <img onClick={() => showCase(7)} src={props.world.imgWorld7}  
            />
            <img onClick={() => showCase(8)} src={props.world.imgWorld8}  
            />
            <img onClick={() => showCase(9)} src={props.world.imgWorld9} 
            />
            <img onClick={() => showCase(10)} src={props.world.imgWorld10} 
            />
            <img onClick={() => showCase(11)} src={props.world.imgWorld11} 
            />
            <img onClick={() => showCase(12)} src={props.world.imgWorld12} 
            />
            <img onClick={() => showCase(13)} src={props.world.imgWorld13} 
            />
            <img onClick={() => showCase(14)} src={props.world.imgWorld14} 
            />
            <img onClick={() => showCase(15)} src={props.world.imgWorld15} 
            />
            <img onClick={() => showCase(16)} src={props.world.imgWorld16} 
            />
            <img onClick={() => showCase(17)} src={props.world.imgWorld17} 
            />
            <img onClick={() => showCase(18)} src={props.world.imgWorld18} 
            />
            <img onClick={() => showCase(19)} src={props.world.imgWorld19} 
            />
            <img onClick={() => showCase(20)} src={props.world.imgWorld20} 
            />
            <img onClick={() => showCase(21)} src={props.world.imgWorld21} 
            />
            <img onClick={() => showCase(22)} src={props.world.imgWorld22} 
            />
            <img onClick={() => showCase(23)} src={props.world.imgWorld23} 
            />
            <img onClick={() => showCase(24)} src={props.world.imgWorld24} 
            />
	    </div>

       <Lightbox className='modal-container'
            toggler ={toggle}
            slide={slide}
            sources={[
                `${props.world.imgWorld1}`,
                `${props.world.imgWorld2}`,
                `${props.world.imgWorld3}`,
                `${props.world.imgWorld4}`,
                `${props.world.imgWorld5}`,
                `${props.world.imgWorld6}`,
                `${props.world.imgWorld7}`,
                `${props.world.imgWorld8}`,
                `${props.world.imgWorld9}`,
                `${props.world.imgWorld10}`,
                `${props.world.imgWorld11}`,
                `${props.world.imgWorld12}`,
                `${props.world.imgWorld13}`,
                `${props.world.imgWorld14}`,
                `${props.world.imgWorld15}`,
                `${props.world.imgWorld16}`,
                `${props.world.imgWorld17}`,
                `${props.world.imgWorld18}`,
                `${props.world.imgWorld19}`,
                `${props.world.imgWorld20}`,
                `${props.world.imgWorld21}`,
                `${props.world.imgWorld22}`,
                `${props.world.imgWorld23}`,
                `${props.world.imgWorld24}`,
				 ]} 
				 type='image'
			  />
      </div>
     )
};

export default World;