import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Animated } from 'react-animated-css';
import { motion } from 'framer-motion'


const Navigation = () => {
    return (
			<Animated animationIn='fadeInDownBig' animationInDelay='750'>
				<div className='NavDiv'>
					<Navbar
						className='Nav'
						style={{ maxHeight: '10vh' }}
						collapseOnSelect
						variant='light'
						expand='md'
						/* fixed='top' */>
						<Navbar.Brand href='#home' style={{ color: 'white' }}>
							<h1>
								<b className='NavTitle'>Dylan Drechsel</b>
							</h1>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />

						<Nav className='m-auto'>
							<Animated animationIn='fadeIn' animationInDelay='3000'>
								<motion.div
									whileHover={{
										scale: 1.5,
									}}
									style={{
										backgroundColor: 'black',
										'border-radius': '30px',
										border: '4px solid white',
										x: '-3vw',
									}}>
									<Button
										className='ProjectsButton'
										variant='outline-dark'
										style={{
											backgroundColor: 'black',
											'border-radius': '25px',
										}}>
										<a href='#projects' style={{ textDecoration: 'none' }}>
											<b style={{ color: 'white', 'font-size': '24px' }}>
												Projects
											</b>
										</a>
									</Button>{' '}
								</motion.div>
							</Animated>
						</Nav>

						<Animated animationIn='fadeInRightBig' animationInDelay='1500'>
							<Nav className='ml-right socialContact'>
								<Nav.Link
									style={{ color: 'white' }}
									href='https://github.com/DylanDrechsel'>
									<b>GitHub</b>
								</Nav.Link>
							</Nav>
						</Animated>

						<Animated animationIn='fadeInRightBig' animationInDelay='1750'>
							<Nav className='ml-right socialContact'>
								<Nav.Link
									style={{ color: 'white' }}
									href='https://www.linkedin.com/in/dylan-drechsel/'>
									<b>LinkedIn</b>
								</Nav.Link>
							</Nav>
						</Animated>

						<Animated animationIn='fadeInRightBig' animationInDelay='2000'>
							<Nav className='ml-right socialContact'>
								<Nav.Link
									style={{ color: 'white' }}
									href='https://twitter.com/DylanDrechsel'>
									<b>Twitter</b>
								</Nav.Link>
							</Nav>
						</Animated>
					</Navbar>
				</div>
			</Animated>
		);
};

export default Navigation;