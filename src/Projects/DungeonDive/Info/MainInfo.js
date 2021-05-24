import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainInfo = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();

	useEffect(() => {
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
		<motion.div ref={ref} animate={animation} className='MainInfo'>
			<h1 className='MainInfoText'>
				<b className='MainInfoText'>
					Dungeon Dive is a web app using React that is inspired by the early
					<br />
					8-bit GameBoy games. Fight your way through the dungeon to reach the
					end and survive the many dangers it holds!
				</b>
			</h1>
		</motion.div>
	);
};

export default MainInfo;
