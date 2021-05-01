import React from 'react';
import '../App.css'
import { Animated } from 'react-animated-css';

const HomeScreenSidePicture = () => {
    return (
        <Animated animationIn='fadeIn' animationInDelay='1000' animationInDuration='1000'>
            <div className="HomeSidePicture"></div>
        </Animated>
            
    );
};

export default HomeScreenSidePicture;