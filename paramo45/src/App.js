import React, { useState } from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import './App.css';
import Home from './components/home-components/Home';


function App() {
  const [photos] = useState();

  return (
    <div className="App">
     <nav>
       <div className='logo'>
         <img src='https://images.unsplash.com/photo-1516245360819-c8f19da2cded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80' alt='camera sticker on snow'/>
       </div>
		 <div className='nav-links'>
			 <Link classname='home-lnk' to ='/'>Home</Link>
			 <Link to ='/'>Gallery</Link>
			 <Link to ='/'>Contact</Link>
			 <Link to ='/'>Newsletter</Link>
		 </div>
     </nav>

	  <Switch>
		<Route path='/' component={Home} />  
	  </Switch>
    </div>
  );
}

export default App;
