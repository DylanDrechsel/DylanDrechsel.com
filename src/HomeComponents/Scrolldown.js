import React from 'react';
import '../App.css'
import { motion } from 'framer-motion';
import { Animated } from 'react-animated-css';

const Scrolldown = () => {
    return (
        <Animated
			animationIn='fadeIn'
			animationInDelay='5800'
            >
			<motion.div
				className='Scrolldown'
				animate={{ rotate: 180 }}
				style={{ x: '80.5vw', y: '-10vh' }}>
				<b style={{ color: 'white', opacity: 1 }}>Scroll Down</b>
			</motion.div>
        </Animated>
		);
};

export default Scrolldown;