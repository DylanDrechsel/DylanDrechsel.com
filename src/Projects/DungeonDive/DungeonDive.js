import React from 'react';
import '../../App.css';
import { Row, Col, Container } from 'react-bootstrap';
import MainMenuPicture from './Components/MainMenuPicture'
import CombatMapPicture from './Components/CombatMapPicture'

const DungeonDive = () => {
    return (
        <div className="DungeonDive">
            <Row style={{ marginLeft: "2vw", marginTop: "2vh"}}>
                <MainMenuPicture />
            </Row>

            <Container fluid>
                <Row>
                    <Col sm={4} style={{ marginLeft: "20vw" }}>
                        <CombatMapPicture />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DungeonDive;