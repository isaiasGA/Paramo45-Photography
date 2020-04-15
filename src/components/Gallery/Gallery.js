import React, { useState } from 'react';

function Gallery(props){
    return(
        <div className='gallery-container'>
          <div className='images-container'>
               {props.images.map(image => (
                  <div className='photo-card' key={image.id}>
                    <img className='img' src={image.imageUrl}/>  
					        </div>
                ))}              
          </div>
        </div>
    )
};


export default Gallery;