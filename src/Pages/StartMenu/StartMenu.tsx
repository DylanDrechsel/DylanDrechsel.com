import { useState, useEffect, type FC } from 'react';
import './StartMenu.scss';
import { Container, Row, Col } from '../../Common/GridSystem/Components';
import StaticAnimation from './StaticAnimation/StaticAnimation';
import RollingCubeAnimation from './RollingCubeAnimation/RollingCubeAnimation';
import { firstNameCubeConfigs, lastNameCubeConfigs } from './RollingCubeAnimation/RollingCubeAnimationConfigs';
import PixelButton from '../../Common/Components/Buttons/PixelButton/PixelButton';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface StartMenuProps {};

const StartMenu: FC<StartMenuProps> = () => {
    const [showMainContent, setShowMainContent] = useState(false);
    const [renderAnimationOverlay, setRenderAnimationOverlay] = useState(true);
    const [showDice, setShowDice] = useState(false);
    
    const handleShowMainContent = () => {
        setShowMainContent(true);
    };

    const handleShowDice = () => {
        setShowDice(true);
    };
    
    useEffect(() => {
        let unmountTimer: number;
    
        if (showMainContent) {
            unmountTimer = setTimeout(() => {
                setRenderAnimationOverlay(false);
        }, 1500);
    
            return () => clearTimeout(unmountTimer);
        }
    }, [showMainContent]);

    const testButton = () => {
        console.log('Test!!')
    }

    return (
        <div className='start-menu-container'>
            {renderAnimationOverlay && (
                <StaticAnimation onAnimationComplete={handleShowMainContent} startDice={handleShowDice}/>
            )}

            <div className={`cube-animation-background ${showDice ? 'visible' : ''}`}>
                {showDice && (
                    <>
                        <RollingCubeAnimation cubeConfigs={firstNameCubeConfigs} />
                        <RollingCubeAnimation cubeConfigs={lastNameCubeConfigs} />
                    </>
                )}
            </div>

            <div className={`start-menu-content ${showMainContent ? 'visible' : ''}`}>
                <Container className='button-container'>
                    <Row className='button-row d-flex justify-content-center gap-3'>
                        <Col className="col-auto">
                            <PixelButton title={'Start'} animationType={'fadeIn'} onClick={testButton} />
                        </Col>
                        <Col className="col-auto">
                            <PixelButton title={'To Website'} animationType={'fadeOut'} onClick={testButton} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default StartMenu;