import React from 'react';
import { Animated } from 'react-animated-css';

const Title = () => {
    return (
			<Animated animationIn='fadeIn' animationInDelay='350'>
				<div style={{ height: '12vh' }}>
					<h1>
						<b
							className='Title'>
							FULL STACK DEVELOPER
						</b>
					</h1>
				</div>
			</Animated>
		);
};

export default Title;