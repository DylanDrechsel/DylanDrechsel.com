import './App.css';
import { Row, Col } from 'react-bootstrap';
import Navigation from './GlobalComponents/Navigation'
import HorizontalLineTop from './GlobalComponents/HorizontalLineTop'
import HorizontalLineBottom from './GlobalComponents/HorizontalLineBottom'
import Title from './HomeComponents/Title'
import AnimatedVerticalLineLeft from './GlobalComponents/AnimatedVerticalLineLeft'
import AnimatedVerticalLineRight from './GlobalComponents/AnimatedVerticalLineRight'
import DylansInfoPicture from './HomeComponents/DylansInfoPicture'
import HomeScreenSidePicture from './HomeComponents/HomeScreenSidePicture'
import ScrollDownAnimation from './GlobalComponents/ScrollDownAnimation'


function App() {
  return (
		<div className='App'>
         <Navigation />
         <HorizontalLineTop />
         <Title />
         <HorizontalLineBottom />

         <Row>
            <AnimatedVerticalLineLeft />
            <AnimatedVerticalLineRight />
            <DylansInfoPicture />
            <HomeScreenSidePicture />
            <ScrollDownAnimation />
         </Row>

		</div>

	);
}

export default App;
