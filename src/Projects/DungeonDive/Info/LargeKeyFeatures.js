import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const LargeKeyFeatures = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		console.log('hit')
		if (inView) {
			animation.start({
				opacity: 1,
				transition: {
					duration: 1.5,
				},
			});
		}

		if (!inView) {
			animation.start({
				opacity: 0,
			});
		}
	}, [inView]);

	return (
		<motion.div ref={ref} animate={animation} className='LargeKeyFeature'>
			<h1 className='LargeKeyFeatureText' style={{ fontSize: '28px' }}>
				<b>
					Able to move the character around the screen using the arrow keys &
					has animations for every step & direction
					<br />
					<br />
					Fully functional combat map with move & attack functions (Move
					indicated by green tile & Attack indicated by red tile)
				</b>
			</h1>
		</motion.div>
	);
};

export default LargeKeyFeatures;
