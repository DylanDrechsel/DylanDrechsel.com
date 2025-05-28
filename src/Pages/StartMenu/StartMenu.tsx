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
        { x: -250, y: 0, letter: 'D' },
        { x: -125, y: -25, letter: 'Y' },
        { x: 0, y: -50, letter: 'L' },
        { x: 125, y: -25, letter: 'A' },
        { x: 250, y: 0, letter: 'N' },
    ];

    const secondDesiredCubeProps = [
        { x: -425, y: 250, letter: 'D'},
        { x: -300, y: 200, letter: 'R'},
        { x: -175, y: 150, letter: 'E'},
        { x: -50, y: 100, letter: 'C'},
        { x:  50, y: 100, letter: 'H'},
        { x:  175, y: 150, letter: 'S'},
        { x:  300, y: 200, letter: 'E'},
        { x:  425, y: 250, letter: 'L'},
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