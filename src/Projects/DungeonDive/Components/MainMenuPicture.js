import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainMenuPicture = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

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
        <motion.div ref={ref} animate={animation} className="MainMenuPicture" />
    );
};

export default MainMenuPicture;