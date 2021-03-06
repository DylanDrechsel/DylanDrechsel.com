import React from 'react';
import { motion } from 'framer-motion';

const animation = {
	planEnter: {
		opacity: 1,
		y: '0vh',
		transition: {
			delay: 4,
			duration: 1,
		},
	},
	designEnter: {
		y: '0vh',
		opacity: 1,
		transition: {
			delay: 4.5,
			duration: 1,
		},
	},
	buildEnter: {
		y: '0vh',
		opacity: 1,
		transition: {
			delay: 5,
			duration: 1,
		},
	},
	createEnter: {
		opacity: 1,
		transition: {
			delay: 6,
		},
		textShadow: '5px 5px 10px #e6498e',
	},
};

const Info = () => {
	return (
		<motion.div
			style={{
				x: '-6vw',
				y: '15.5vh',
				color: 'white',
				width: '10vw',
			}}>
			<h1 style={{ fontSize: 60 }}>
				<b>

                    <motion.div variants={animation} animate='planEnter' style={{ y: "-10vh", opacity: 0 }}>
					    <span className='Plan'>Plan </span><br />
                    </motion.div>

                    <motion.div variants={animation} animate='designEnter' style={{ y: "-20vh", opacity: 0 }}>
					    <span className='Design' style={{ paddingLeft: '4vw' }}>Design</span> <br />
                    </motion.div>

                    <motion.div variants={animation} animate='buildEnter' style={{ y: "-30vh", opacity: 0 }} >
					    <span className='Build' style={{ paddingLeft: '8vw' }}>Build</span> <br />
                    </motion.div>

                    <motion.div variants={animation} animate='createEnter' style={{ opacity: 0 }}>
					    <span className='Create' style={{ paddingLeft: '12vw', fontSize: 90 }}>Create</span> <br />
                    </motion.div>


				</b>{' '}
				<br />
			</h1>
		</motion.div>
	);
};

export default Info;
