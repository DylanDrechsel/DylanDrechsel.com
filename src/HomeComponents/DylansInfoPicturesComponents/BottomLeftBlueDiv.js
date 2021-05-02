import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import Info from './BottomLeftBlueDivComponents/Info'

const animation = {
	fadeIn: {
		opacity: 1,
		transition: {
			delay: 3.3,
			duration: 2,
		},
	},
};

const BottomRightBlueDiv = () => {
    return (
			<motion.div
				className='BottomRightBlueDiv'
				style={{ x: '6vw', y: '-12vh', opacity: 0 }}
				variants={animation}
				animate='fadeIn'>
					<Info />
				</motion.div>
		);
};

export default BottomRightBlueDiv;