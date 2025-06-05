import { useState, useEffect, type FC } from 'react';
import './StartMenu.scss';
import StaticAnimation from './StaticAnimation/StaticAnimation';
import RollingCubeAnimation from './RollingCubeAnimation/RollingCubeAnimation';
import { firstNameCubeConfigs, lastNameCubeConfigs } from './RollingCubeAnimation/RollingCubeAnimationConfigs';

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
                {/* <h1> WELCOME</h1> */}
            </div>
        </div>
    );
};

export default StartMenu;