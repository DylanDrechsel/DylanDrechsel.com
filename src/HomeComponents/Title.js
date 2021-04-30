import React from 'react';
import { Animated } from 'react-animated-css';

const Title = () => {
    return (
			<Animated animationIn='fadeIn' animationInDelay='300'>
				<div>
					<h1>
						<b
							style={{
								color: 'white',
								'font-size': '100px',
								'font-family': 'Girassol',
							}}>
							FULL STACK DEVELOPER
						</b>
					</h1>
				</div>
			</Animated>
		);
};

export default Title;