import React from 'react';
import Tilt from 'react-tilt';
import dictionary from './dictionary.png';

const Logo = () => {
	return (
		<div>
			<img style={{ height: 250, width: 250 }} alt='logo' src={dictionary}/>
 		</div>
	);
}

export default Logo;