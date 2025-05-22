import { useState, useEffect, type FC } from 'react';
import './StartMenu.scss';
import StaticAnimation from './StaticAnimation/StaticAnimation';
import RollingCubeAnimation from './RollingCubeAnimation/RollingCubeAnimation';

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

    return (
        <>
        {renderAnimationOverlay && (
            <StaticAnimation onAnimationComplete={handleShowMainContent} startDice={handleShowDice}/>
        )}

        <div className={`main-app-content ${showMainContent ? 'visible' : ''}`}>
            <h1>TEST FROM THE START MENU</h1>
            {showDice && (
                <RollingCubeAnimation />
            )}
        </div>
        </>
    );
};

export default StartMenu;