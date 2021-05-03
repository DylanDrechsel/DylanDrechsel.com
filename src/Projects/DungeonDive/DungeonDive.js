import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MainMenuPicture from './Components/MainMenuPicture'
import CombatMapPicture from './Components/CombatMapPicture'
import CharactersGif from './Components/CharactersGif'
import MainTitle from './Components/MainTitle'
import CenterBlackDiv from './StyleDivsComponents/CenterBlackDiv'
import RightBlueDiv from './StyleDivsComponents/RightBlueDiv'
import MainInfo from './Info/MainInfo'
import SmallKeyFeatures from './Info/SmallKeyFeatures'
import LargeKeyFeatures from './Info/LargeKeyFeatures'

const DungeonDive = () => {
    return (
			<div className='DungeonDive'>
				<MainTitle />

				<Row style={{ marginLeft: '2vw' /* marginTop: '2vh' */ }}>
					<MainMenuPicture />
					<MainInfo />
				</Row>

			
					
					<Col md={{ span: 2, offset: 1 }}>
						<SmallKeyFeatures />
					</Col>

					<Col md={{ span: 4, offset: 8 }}>
						<CombatMapPicture />
					</Col>

					
					<LargeKeyFeatures />
					
					
			

				<CenterBlackDiv />
				<RightBlueDiv />
			</div>
		);
};

export default DungeonDive;