import React from 'react';
import Photos from './Photos';

function Gallery(props) {
  return(
        <div className='gallery-container'>
         {props.photos.map(photo => (
           <Photos 
            image={photo}
           />
         ))}
        </div>
    )
};
    


export default Gallery;