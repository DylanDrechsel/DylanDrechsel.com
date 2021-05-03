import React from 'react';
import { motion } from 'framer-motion'

const animation = {
	firstFade: {
		opacity: 1,
		transition: {
			delay: 4,
			duration: 1,
		},
	},
	secondFade: {
		x: '17vw',
		opacity: 1,
		transition: {
			delay: 4.5,
			duration: 1,
		},
		textShadow: '5px 5px 10px #e6498e',
		boxShadow: "115px 20px 2px #888888"
	},
};

const Info = () => {
    return (
			<motion.div style={{ x: '1.5vw', y: '7.5vh', opacity: 0, width: "40vw", color: 'white'}} variants={animation} animate="firstFade">
				<h1 style={{ fontSize: 48 }}>
					<b>Solves complex problems with</b> <br />

                    <motion.div style={{ width: '10vw', opacity: 0 }} variants={animation} animate="secondFade">
                        <b style={{ textAlign: 'center', fontSize: 60 }}>Creative Solutions</b>
                    </motion.div>

				</h1>
			</motion.div>
		);
};

export default Info;