import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion'

const animation = {
    fadeIn: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 4
        }
    }
}

const BottomRightPicture = () => {
    return (
			<motion.div
				className='BottomRightPicture'
				variants={animation}
				animate='fadeIn'
				style={{ x: '44.5vw', y: '-80vh', opacity: 0 }}></motion.div>
		);
};

export default BottomRightPicture;