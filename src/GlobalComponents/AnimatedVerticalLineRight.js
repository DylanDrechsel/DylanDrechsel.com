import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const animation = {
	visible: {
		x: [0, 0],
		scale: 1,
		transition: { duration: 0.5 },
	},
	slide: {
		x: [750, 1500],
		transition: { delay: .75, duration: 0.5 },
	},
};

const AnimatedVerticalLineRight = () => {
	return (
		<motion.div variants={animation} animate='slide'>
			<motion.div
				variants={animation}
				initial={{ scale: 0 }}
				animate='visible'
				className='AnimatedVerticalLineLeft'></motion.div>
		</motion.div>
	);
};

export default AnimatedVerticalLineRight;
