import React, { useEffect, useRef, type FC } from 'react';
import './PixelButton.scss';
import { COLORS } from '../../../scss/_colors';

interface PixelButtonProps {
    buttonColor?: string;
    titleColor?: string;
    title: string;
    width?: number;
    height?: number;
    animationType: string;
    onClick: (...args: unknown[]) => void;
};

const PixelButtonFadeIn: FC<PixelButtonProps> = ({ buttonColor, titleColor, title, width, height, animationType, onClick }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pixelContainerRef = useRef<HTMLDivElement>(null);

    const buttonStyle = {
        '--button-color': buttonColor === undefined ? buttonColor = COLORS.giantsOrange : null,
        '--title-color': titleColor === undefined ? titleColor = COLORS.antiFlashWhite : null,
        '--width': `${width === undefined ? width = 180 : null }px`,
        '--height': `${height === undefined ? height = 60 : null}px`,
    } as React.CSSProperties;

    const fadeAnimation = () => {
        const button = buttonRef.current;
        const pixelContainer = pixelContainerRef.current;
            
        if (!button || !pixelContainer) return;

        // Clear any existing pixels (in case of re-renders)
        pixelContainer.innerHTML = '';

        const pixelSize = 10;
        const buttonWidth = button.offsetWidth;
        const buttonHeight = button.offsetHeight;
        const cols = Math.floor(buttonWidth / pixelSize);
        const rows = Math.floor(buttonHeight / pixelSize);

        if (animationType === 'fadeIn') {
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const pixel = document.createElement('div');
                    pixel.classList.add('pixel-FI');
                    pixel.style.left = `${col * pixelSize}px`;
                    pixel.style.top = `${row * pixelSize}px`;
    
                    const delay = Math.random();
                    pixel.style.transitionDelay = `${delay}s`;
                    
                    pixelContainer.appendChild(pixel);
                }
            }
        }

        if (animationType === 'fadeOut') {
            for (let row = 0; row < rows; row++) {
                for (let col = 0; col < cols; col++) {
                    const pixel = document.createElement('div');
                    pixel?.classList.add('pixel-FO');
                    pixel.style.left = `${col * pixelSize}px`;
                    pixel.style.top = `${row * pixelSize}px`;

                    const delay = Math.random() * 0.5;
                    pixel.style.transitionDelay = `${delay}s`;

                    const tx = (Math.random() - 0.5) * 30;
                    const ty = (Math.random() - 0.5) * 30;

                    pixel?.style.setProperty('--tx', `${tx}px`);
                    pixel?.style.setProperty('--ty', `${ty}px`);
                    
                    pixelContainer?.appendChild(pixel);
                }
            }
        }
    }

    useEffect(() => {
        fadeAnimation();
    });

    return (
        <div className='pixel-button-container' style={buttonStyle}>
            <button ref={buttonRef} className={animationType === 'fadeIn' ? 'pixel-button-FI' : 'pixel-button-FO'} onClick={onClick}>
                <span>{title}</span>
                <div 
                    ref={pixelContainerRef} 
                    className={animationType === 'fadeIn' ? 'pixel-container-FI' : 'pixel-container-FO'}
                ></div>
            </button>
        </div>
    );
};

export default PixelButtonFadeIn;