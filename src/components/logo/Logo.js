import React from 'react';
import logo from './logo.png';
import Tilt from 'react-tilt';

const Logo = () => {
	return(
		<div className = 'tc shadow-2 dib '>
		<Tilt className="Tilt" >
			<img src = {logo} className='Tilt-inner pa3 shadow-2' id ='logo' />
		</Tilt>
		</div> 
	);
}

export default Logo;