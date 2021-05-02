import React from 'react';
import '../App.css'
import Scrolldown from './Scrolldown'
import TopLeftPicture from './DylansInfoPicturesComponents/TopLeftPicture'
import BottomRightPicture from './DylansInfoPicturesComponents/BottomRightPicture'
import MiddlePicture from './DylansInfoPicturesComponents/MiddlePicture'
import TopRightBlueDiv from './DylansInfoPicturesComponents/TopRightBlueDiv'
import BottomLeftBlueDiv from './DylansInfoPicturesComponents/BottomLeftBlueDiv'


const DylansInfoPicture = () => {
    return (
			// <Animated
			// 	animationIn='fadeIn'
			// 	animationInDelay='1000'
			// 	animationInDuration={5000}
			// 	className='DylansInfoPictureDiv'>
			<div className='DylansInfoPictureDiv'>
				<div className='DylansInfoPicture'>
					<TopRightBlueDiv />
					<BottomLeftBlueDiv />
					<TopLeftPicture />
					<BottomRightPicture />
					<MiddlePicture />
				</div>
				<Scrolldown />
			</div>
			// </Animated>
		);
};

export default DylansInfoPicture;