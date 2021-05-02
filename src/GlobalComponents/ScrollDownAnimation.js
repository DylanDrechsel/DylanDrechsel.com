import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const animation = {
	scrolldown: {
		y: '55vh',
		transition: {
			duration: 3,
			delay: 4,
			repeat: Infinity,
			repeatType: 'loop',
			repeatDelay: 0,
		},
		scale: [1, 0],
		opacity: 0,
	},
	visible: {
		scale: 1,
		transition: {
			duration: 1.2,
			delay: 3,
		},
		boxShadow: '0px 0px 6px 1px rgb(255,255,255)',
	},
	fadeIn: {
		scale: 2.6,
		transition: {
			duration: 0.5,
			delay: 3,
		},
	},
};

const ScrollDownAnimation = () => {
	return (
		<motion.div variants={animation} animate='fadeIn' style={{ x: '-18.2vw' }}>
			<motion.div
				variants={animation}
				animate='scrolldown'
				initial={{ scale: 1 }}>
				<motion.div
					variants={animation}
					initial={{ scale: 0 }}
					animate='visible'
					className='ScrolldownAnimation'></motion.div>
			</motion.div>
		</motion.div>
	);
};

export default ScrollDownAnimation;
