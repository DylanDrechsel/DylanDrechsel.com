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

    const desiredCubeProps = [
        { animationOptions: { xStart: -600, yStart: -1000, xEnd: -600, yEnd: 0, animationDelay: 0 }, letter: 'D', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: -300, yStart: -1000, xEnd: -300, yEnd: 25, animationDelay: 0.1 }, letter: 'Y', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 0, yStart: -1000, xEnd: 0, yEnd: 50, animationDelay: 0.2 }, letter: 'L', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 300, yStart: -1000, xEnd: 300, yEnd: 25, animationDelay: 0.3 }, letter: 'A', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 600, yStart: -1000, xEnd: 600, yEnd: 0, animationDelay: 0.4 }, letter: 'N', cubeSize: 200, fontSize: 8, cubeColors: ['#ff5722', '#03a9f4'] },
    ];

    const secondDesiredCubeProps = [
        { animationOptions: { xStart: -625, yStart: -1000, xEnd: -625, yEnd: 250, animationDelay: 0.5 }, letter: 'D', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: -450, yStart: -1000, xEnd: -450, yEnd: 200, animationDelay: 0.6 }, letter: 'R', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: -275, yStart: -1000, xEnd: -275, yEnd: 150, animationDelay: 0.7 }, letter: 'E', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: -100, yStart: -1000, xEnd: -100, yEnd: 100, animationDelay: 0.8 }, letter: 'C', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 100, yStart: -1000, xEnd: 100, yEnd: 100, animationDelay: 0.9 }, letter: 'H', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 275, yStart: -1000, xEnd: 275, yEnd: 150, animationDelay: 1.0 }, letter: 'S', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 450, yStart: -1000, xEnd: 450, yEnd: 200, animationDelay: 1.1 }, letter: 'E', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
        { animationOptions: { xStart: 625, yStart: -1000, xEnd: 625, yEnd: 250, animationDelay: 1.2 }, letter: 'L', cubeSize: 100, fontSize: 4, cubeColors: ['#ff5722', '#03a9f4'] },
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