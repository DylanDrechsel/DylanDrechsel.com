import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CenterRedDiv = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                opacity: 1,
                transition: {
                    duration: .5
                }
            })
        }

        if(!inView) {
            animation.start({
                opacity: 0,
            })
        }
    }, [inView])

	return (
		<motion.div ref={ref} initial={{ y: '-98vh' }}>
			<motion.div
				animate={animation}
				className='CenterRedDiv'
				style={{ x: '10vw', y: '0vh' }}
			/>
		</motion.div>
	);
};

export default CenterRedDiv;
