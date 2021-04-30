import React from 'react';
import { Animated } from 'react-animated-css';

const Title = () => {
    return (
			<Animated animationIn='fadeIn' animationInDelay='350'>
				<div style={{ height: '12vh' }}>
					<h1>
						<b
							style={{
								color: 'white',
								'font-size': '100px',
								'font-family': 'Girassol',
                                'letter-spacing': '8px'
							}}>
							FULL STACK DEVELOPER
						</b>
					</h1>
				</div>
			</Animated>
		);
};

export default Title;