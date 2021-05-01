import React from 'react';
import '../App.css'
import { Animated } from 'react-animated-css';
import { motion } from 'framer-motion';

const animation = {
	opacityChange: {
		opacity: 1,
		transition: { duration: 7 },
	},
};

const DylansInfoPicture = () => {
    return (
			<Animated
				animationIn='fadeIn'
				animationInDelay='1000'
				animationInDuration={5000}
				className='DylansInfoPictureDiv'>
				{/* <motion.div
					variants={animation}
					initial={{ scale: 1 }}
					animate='opacityChange'>
				</motion.div> */}
					<div className='DylansInfoPicture'></div>
			</Animated>
		);
};

export default DylansInfoPicture;