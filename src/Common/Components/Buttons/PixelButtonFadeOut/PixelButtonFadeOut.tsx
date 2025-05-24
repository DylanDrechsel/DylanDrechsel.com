import React, { useEffect, useRef, type FC } from 'react';
import './PixelButtonFadeOut.scss';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface PixelButtonProps {};

const PixelButtonFadeOut: FC<PixelButtonProps> = () => {
    const buttonStyle = {
        '--clr': '#ff5722'
    } as React.CSSProperties; // Type assertion for custom properties

    const button = document.querySelector('.pixel-button') as HTMLButtonElement | null;
    const pixelContainer = button?.querySelector('.pixel-container') as HTMLDivElement | null;
    const pixelSize = 10;
    const [buttonWidth, buttonHeight] = button ? [button.offsetWidth, button.offsetHeight] : [0, 0];
    const cols = Math.floor(buttonWidth / pixelSize);
    const rows = Math.floor(buttonHeight / pixelSize);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const pixel = document.createElement('div');
            pixel?.classList.add('pixel');
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

    return (
        <div className='pixel-button-container'>
            <button className='pixel-button'>
                <span> Hover Me </span>
                <div className='pixel-container' style={buttonStyle}></div>
            </button>
        </div>
    );
};

export default PixelButtonFadeOut;