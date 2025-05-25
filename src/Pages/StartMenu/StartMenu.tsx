import { useState, useEffect, type FC } from 'react';
import './StartMenu.scss';
import StaticAnimation from './StaticAnimation/StaticAnimation';
import RollingCubeAnimation from './RollingCubeAnimation/RollingCubeAnimation';
import PixelButtonFadeOut from '../../Common/Components/Buttons/PixelButtonFadeOut/PixelButtonFadeOut';
import PixelButtonFadeIn from '../../Common/Components/Buttons/PixelButtonFadeIn/PixelButtonFadeIn';

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

    // Define the positions for the cubes
    const desiredCubePositions = [
        { x: -250, y: 0, letter: 'D' },
        { x: -125, y: 0, letter: 'Y' },
        { x: 0, y: 0, letter: 'L' },
        { x: 125, y: 0, letter: 'A' },
        { x: 250, y: 0, letter: 'N' },
    ];

    return (
        <>
        {renderAnimationOverlay && (
            <StaticAnimation onAnimationComplete={handleShowMainContent} startDice={handleShowDice}/>
        )}

        <div className={`main-app-content ${showMainContent ? 'visible' : ''}`}>
            <div className={'padding'} />
            <PixelButtonFadeOut color={'#ff5722'} title={'Hover Me'} width={180} height={60}/>
            <div className={'padding'} />
            <PixelButtonFadeIn color={'#03a9f4'} title={'Fade In'} width={180} height={60}/>
            <div className={'padding'} />
            {/* <h1>TEST FROM THE START MENU</h1> */}
            {showDice && (
                <RollingCubeAnimation cubePositions={desiredCubePositions} />
            )}
        </div>
        </>
    );
};

export default StartMenu;