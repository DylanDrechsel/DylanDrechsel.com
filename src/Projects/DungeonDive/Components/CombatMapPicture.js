import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CombatMapPicture = () => {
    const { ref, inView } = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView) {
            animation.start({
                x: '0vw',
                transition: {
                    duration: 1,
                    type: "spring",
                    bounce: .3
                }
            })
        }

        if(!inView) {
            animation.start({
                x: 800
            })
        }
    }, [inView])

    return (
        <div ref={ref}>
            <motion.div ref={ref} animate={animation} className="CombatMapPicture" />
        </div>
    );
};

export default CombatMapPicture;