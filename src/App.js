import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import {Nav, NavLinks,LogoContainer, ImgLogo} from './components/NavStyles';

import './App.css';
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';
import photos from './components/GalleryData';
import logoImg from './components/images/logo.jpg';

function App() {
  return (
    <div className="App">
     <Nav>
       <LogoContainer className='logo'>
         <ImgLogo src={logoImg} alt='camera sticker on snow'/>
       </LogoContainer>
		 <NavLinks className='nav-links'>
         <Link classname='home-lnk'to ='/'>Home</Link>
         <Link to ='/gallery'>Gallery</Link>
         <Link to ='/'>Contact</Link>
         <Link to ='/'>Newsletter</Link>
		</NavLinks>
     </Nav>

	  <Switch>
    <Route path='/gallery'>
        <Gallery photos={photos}/>
    </Route> 

    <Route path='/' component={Home} /> 
	  </Switch>
    </div>
  );
}

export default App;
