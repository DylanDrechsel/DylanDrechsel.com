import React from 'react';
import '../../App.css'
import { motion } from 'framer-motion'

const animation = {
	fadeIn: {
		opacity: 1,
		transition: {
			delay: 1.2,
			duration: 4,
		},
	},
};

const TopLeftPicture = () => {
    return (
			<motion.div
				className='TopLeftPicture'
				style={{ opacity: 0, y: "-80vh" }}
				variants={animation}
				animate='fadeIn'>
                </motion.div>
		);
};

export default TopLeftPicture;