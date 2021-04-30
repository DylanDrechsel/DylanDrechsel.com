import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const animation = {
	visible: {
		scale: 1,
		transition: { duration: 0.5 },
	},
	slide: {
        x: "2vw",
        transition: { delay: .75, duration: 0.5}
	},
};

const AnimatedVerticalLineLeft = () => {
    return (
			<motion.div variants={animation} animate='slide' style={{ x: '41vw' }}>
				<motion.div
					variants={animation}
					initial={{ scale: 0 }}
					animate='visible'
					className='AnimatedVerticalLineLeft'></motion.div>
			</motion.div>
		);
};

export default AnimatedVerticalLineLeft;