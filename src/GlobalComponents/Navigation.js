import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Animated } from 'react-animated-css';

const Navigation = () => {
    return (
			<Animated animationIn='fadeInDownBig' animationInDelay='500'>
				<div className='NavDiv'>
					<Navbar
						className='Nav'
						style={{ maxHeight: '10vh' }}
						collapseOnSelect
						variant='light'
						expand='md'
						/* bg="dark" */
					>
						<Navbar.Brand href='#home' style={{ color: 'white' }}>
							<h1>
								<b className='NavTitle'>Dylan Drechsel</b>
							</h1>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls='basic-navbar-nav' />
						{/* <Navbar.Collapse id='basic-navbar-nav' style={{ backgroundColor: 'white' }}> */}

							<Nav className='m-auto'>
							    <Animated animationIn='fadeIn' animationInDelay='3000'>
									<NavDropdown
										/* alignRight */
										title={
											<span
												style={{ color: 'white' }}
												className='my-auto'>
												<b>Projects</b>
											</span>
										}>
										<NavDropdown.Item href='#action/3.1'>
											Action
										</NavDropdown.Item>
										<NavDropdown.Item href='#action/3.2'>
											Another action
										</NavDropdown.Item>
										<NavDropdown.Item href='#action/3.3'>
											Something
										</NavDropdown.Item>
										<NavDropdown.Divider />
										<NavDropdown.Item href='#action/3.4'>
											Separated link
										</NavDropdown.Item>
									</NavDropdown>
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

							{/* <Form inline>
							<FormControl
								type='text'
								placeholder='Search'
								className='mr-sm-2'
							/>
							<Button variant='outline-success'>Search</Button>
						</Form> */}
						{/* </Navbar.Collapse> */}
					</Navbar>
				</div>
			</Animated>
		);
};

export default Navigation;