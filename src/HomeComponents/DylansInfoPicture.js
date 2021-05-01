import React from 'react';
import '../App.css'
import { Animated } from 'react-animated-css';
import Scrolldown from './Scrolldown'


const DylansInfoPicture = () => {
    return (
			<Animated
				animationIn='fadeIn'
				animationInDelay='1000'
				animationInDuration={5000}
				className='DylansInfoPictureDiv'>
				<div className='DylansInfoPicture'></div>
					<Scrolldown />
			</Animated>
		);
};

export default DylansInfoPicture;