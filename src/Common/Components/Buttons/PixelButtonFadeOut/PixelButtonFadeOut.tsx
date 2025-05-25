import React, { useEffect, useRef, type FC } from 'react';
import './PixelButtonFadeOut.scss';

interface PixelButtonProps {
    color: string;
    title: string;
    width: number;
    height: number;
};

const PixelButtonFadeOut: FC<PixelButtonProps> = ({ color, title, width, height }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const pixelContainerRef = useRef<HTMLDivElement>(null);

    const buttonStyle = {
        '--color': color,
        '--width': `${width}px`,
        '--height': `${height}px`,
    } as React.CSSProperties;

    useEffect(() => {
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
    }, []);

    return (
        <div className='pixel-button-container-FO'>
            <button ref={buttonRef} style={buttonStyle} className='pixel-button-FO'>
                <span>{title}</span>
                <div 
                    ref={pixelContainerRef} 
                    className='pixel-container-FO' 
                    style={buttonStyle}
                ></div>
            </button>
        </div>
    );
};

export default PixelButtonFadeOut;