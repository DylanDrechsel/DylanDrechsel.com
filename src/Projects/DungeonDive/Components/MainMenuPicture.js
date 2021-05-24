import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainMenuPicture = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();
    console.log(inView)

    useEffect(() => {
        if(inView) {
            animation.start({
                x: "0vw",
                transition: {
                    duration: 1,
                    type: "spring",
                    bounce: .3
                }
            })
        }

        if(!inView) {
            animation.start({
                x: -500
            })
        }
    }, [inView])

    return (
			<div ref={ref}>
				<motion.div animate={animation} className='MainMenuPicture' />
			</div>
		);
};

export default MainMenuPicture;