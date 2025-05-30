import { useState, useEffect, type FC } from 'react';
import './StartMenu.scss';
import StaticAnimation from './StaticAnimation/StaticAnimation';
import RollingCubeAnimation from './RollingCubeAnimation/RollingCubeAnimation';
// import PixelButtonFadeOut from '../../Common/Components/Buttons/PixelButtonFadeOut/PixelButtonFadeOut';
// import PixelButtonFadeIn from '../../Common/Components/Buttons/PixelButtonFadeIn/PixelButtonFadeIn';

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

    // Define the props for the cubes
    const desiredCubeProps = [
        { x: -600, y: 0, letter: 'D', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: -300, y: 25, letter: 'Y', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: 0, y: 50, letter: 'L', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: 300, y: 25, letter: 'A', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: 600, y: 0, letter: 'N', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
    ];

    const secondDesiredCubeProps = [
        { x: -625, y: 250, letter: 'D', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: -450, y: 200, letter: 'R', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: -275, y: 150, letter: 'E', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x: -100, y: 100, letter: 'C', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x:  100, y: 100, letter: 'H', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x:  275, y: 150, letter: 'S', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x:  450, y: 200, letter: 'E', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { x:  625, y: 250, letter: 'L', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
    ];

    return (
        <>
        {renderAnimationOverlay && (
            <StaticAnimation onAnimationComplete={handleShowMainContent} startDice={handleShowDice}/>
        )}

        <div className={`start-menu-content ${showMainContent ? 'visible' : ''}`}>
            {showDice && (
                <>
                    <RollingCubeAnimation desiredCubeProps={desiredCubeProps} />
                    <RollingCubeAnimation desiredCubeProps={secondDesiredCubeProps} />
                </>
            )}
        </div>
        </>
    );
};

export default StartMenu;