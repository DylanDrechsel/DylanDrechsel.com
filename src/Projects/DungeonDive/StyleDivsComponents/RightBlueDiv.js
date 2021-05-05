import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RightBlueDiv = () => {
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
            <motion.div ref={ref} animate={animation} className="RightBlueDiv" style={{ x: "50vw", y: "-140vh" }} />          
    );
};

export default RightBlueDiv;