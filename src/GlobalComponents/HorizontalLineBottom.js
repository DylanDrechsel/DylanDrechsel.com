import React from 'react';
import '../App.css';
import { Animated } from 'react-animated-css';

const HorizontalLineBottom = () => {
    return (
        <Animated animationIn='slideInLeft' animationInDelay='100'>
			<div className='HorizontalLine' style={{ 'margin-bottom': '2vh' }}></div>
        </Animated>
		);
};

export default HorizontalLineBottom;