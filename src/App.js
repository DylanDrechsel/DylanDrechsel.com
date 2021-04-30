import './App.css';
import { Row, Col } from 'react-bootstrap';
import Navigation from './GlobalComponents/Navigation'
import HorizontalLineTop from './GlobalComponents/HorizontalLineTop'
import HorizontalLineBottom from './GlobalComponents/HorizontalLineBottom'
import Title from './HomeComponents/Title'
import AnimatedVerticalLineLeft from './GlobalComponents/AnimatedVerticalLineLeft'
import AnimatedVerticalLineRight from './GlobalComponents/AnimatedVerticalLineRight'


function App() {
  return (
		<div className='App'>
         <Navigation />
         <HorizontalLineTop />
         <Title />
         <HorizontalLineBottom />

         {/* <Col xs={3}> */}
         <Row>
            <AnimatedVerticalLineLeft />
            <AnimatedVerticalLineRight />
         </Row>
         {/* </Col> */}

		</div>

	);
}

export default App;
