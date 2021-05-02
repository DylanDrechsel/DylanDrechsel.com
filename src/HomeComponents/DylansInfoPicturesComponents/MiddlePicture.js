import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';

const animation = {
	fadeIn: {
		opacity: 1,
		transition: {
			delay: 3,
			duration: 2,
		},
	},
};

const MiddlePicture = () => {
    return (
        <motion.div className="MiddlePicture" style={{ x: "22.25vw", y: "-133.25vh", opacity: 0 }} variants={animation} animate='fadeIn' >
            
        </motion.div>
    );
};

export default MiddlePicture;