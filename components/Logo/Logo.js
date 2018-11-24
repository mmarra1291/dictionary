import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import dictionary from './dictionary.png';

const Logo = () => {
	return (
		<div style={{float: 'left'}}>
			<img style={{ height: 250, width: 250 }} alt='logo' src={dictionary}/>
 		</div>
	);
}

export default Logo;