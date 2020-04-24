import React, { useState }  from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import {Nav, NavLinks,LogoContainer, ImgLogo} from './components/styles/NavStyles';
import './App.css';

import Home from './components/Home/Home';
import Gallery from './components/Gallery';
import Nature from './components/Home/Nature';
import Portrait from './components/Home/Portrait';
import World from './components/Home/World';
import About from './components/About';

import photos from './/components/GalleryData';
import logoImg from './components/images/logo.jpg';
import Newsletter from './components/Newsletter';

function App() {
  const [galleryData] = useState(photos);

  return (
    <div className="App">
     <Nav>
       <LogoContainer className='logo'>
         <ImgLogo src={logoImg} alt='camera sticker on snow'/>
       </LogoContainer>
		 <NavLinks className='nav-links'>
         <Link className='home-lnk'to ='/'>Home</Link>
         <Link to ='/gallery'>Gallery</Link>
         <Link to ='/newsletter'>Newsletter</Link>
		</NavLinks>
     </Nav>

	  <Switch>

    <Route path='/world-around-me'>
      {galleryData.map(world => ( 
        <World key={world} world={world} />
      ))}
    </Route>

    <Route path='/portrait'>
      {galleryData.map(portrait => (
        <Portrait key={portrait} portrait={portrait} />
      ))}
    </Route>

     <Route path='/nature'>
        {galleryData.map(nature => (
          <Nature key={nature} nature={nature} />
        ))}
      </Route>

      <Route path='/gallery'>
        {galleryData.map(gallery => (
          <Gallery key={gallery} gallery={gallery} />
        ))}
      </Route> 

      <Route path='/about' component={About}/>

      <Route path='/newsletter' component={Newsletter}/> 

      <Route path='/' component={Home} /> 
	  </Switch>
    </div>
  );
}

export default App;
