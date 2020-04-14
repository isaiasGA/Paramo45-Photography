import React, { useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import {Nav, NavLinks,LogoContainer, ImgLogo} from './components/NavStyles';

import './App.css';
import Home from './components/Home/Home';
import logoImg from './components/images/logo.jpg';


function App() {
  const [photos] = useState();

  return (
    <div className="App">
     <Nav>
       <LogoContainer className='logo'>
         <ImgLogo src={logoImg} alt='camera sticker on snow'/>
       </LogoContainer>
		 <NavLinks className='nav-links'>
         <Link classname='home-lnk'to ='/'>Home</Link>
         <Link to ='/'>Gallery</Link>
         <Link to ='/'>Contact</Link>
         <Link to ='/'>Newsletter</Link>
		</NavLinks>
     </Nav>

	  <Switch>
		<Route path='/' component={Home} />  
	  </Switch>
    </div>
  );
}

export default App;
