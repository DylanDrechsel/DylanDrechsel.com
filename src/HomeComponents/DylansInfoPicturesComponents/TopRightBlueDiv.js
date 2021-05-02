import React from 'react';
import '../../App.css';
import { motion } from 'framer-motion';

const animation = {
	fadeIn: {
		opacity: 1,
		transition: {
			delay: 3.5,
			duration: 2,
		},
	},
};

const TopRightBlueDiv = () => {
    return (
        <motion.div 
            className="TopRightBlueDiv"
            style={{ x: "35vw", y: "2vh", opacity: 0 }}
            variants={animation}
            animate='fadeIn'>
            
        </motion.div>
    );
};

export default TopRightBlueDiv;