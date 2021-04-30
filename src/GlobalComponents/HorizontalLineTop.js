import React from 'react';
import '../App.css';
import { Animated } from 'react-animated-css';

const HorizontalLine = () => {
    return (
			<Animated animationIn='slideInLeft' animationInDelay='75'>
				<div className='HorizontalLine'></div>
			</Animated>
		);
};

export default HorizontalLine;