import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BottomLeftDiv = () => {
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
			<motion.div ref={ref} animate={animation} className='BottomLeftDiv' />
	);
};

export default BottomLeftDiv;
