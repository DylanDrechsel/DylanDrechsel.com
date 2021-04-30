import React from 'react';
import '../App.css'
import { Animated } from 'react-animated-css';

const HomeScreenSidePicture = () => {
    return (
        <Animated animationIn='fadeIn' animationInDelay='750'>
            <div className="HomeSidePicture"></div>
        </Animated>
            
    );
};

export default HomeScreenSidePicture;