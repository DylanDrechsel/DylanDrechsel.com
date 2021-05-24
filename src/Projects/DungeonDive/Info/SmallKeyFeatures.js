import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SmallKeyFeatures = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
		console.log('hit');
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
		<motion.div ref={ref} animate={animation} className='SmallKeyFeatures'>
			<h1 className='SmallKeyFeaturesText' style={{ fontSize: '48px' }}>
				<b>
					Computer AI to battle against <br />
					Animated characters and main screen
				</b>
			</h1>
		</motion.div>
	);
};

export default SmallKeyFeatures;
