import { useEffect, useRef } from 'react';

interface UsePixelatedFadeOptions {
    color?: string;
    pixelSize?: number;
    transitionDuration?: number;
    trigger?: 'hover' | 'always' | 'click';
    initialDelay?: number;
    showDuration?: number;
    hideDuration?: number;
}

export const usePixelatedFade = (options: UsePixelatedFadeOptions = {}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const pixelContainerRef = useRef<HTMLDivElement>(null);
    const timeoutRefs = useRef<number[]>([]);
    const {
        color = '#ff6b6b',
        pixelSize = 10,
        transitionDuration = 0.5,
        trigger = 'hover',
        initialDelay = 0,
        showDuration = 4000,
        hideDuration = 6000
    } = options;

    // Used for Clean Up Function for 'always'
    const clearAllTimeouts = () => {
        timeoutRefs.current.forEach(id => clearTimeout(id));
        timeoutRefs.current = [];
    };

    useEffect(() => {
        const element = elementRef.current;
        const pixelContainer = pixelContainerRef.current;
        
        if (!element || !pixelContainer) return;
        pixelContainer.innerHTML = '';

        const elementWidth = element.offsetWidth;
        const elementHeight = element.offsetHeight;
        const cols = Math.floor(elementWidth / pixelSize);
        const rows = Math.floor(elementHeight / pixelSize);

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const pixel = document.createElement('div');
                pixel.classList.add('pixel-fade-effect');
                pixel.style.cssText = `
                    position: absolute;
                    width: ${pixelSize}px;
                    height: ${pixelSize}px;
                    left: ${col * pixelSize}px;
                    top: ${row * pixelSize}px;
                    background: ${color};
                    border: 1px solid rgba(0, 0, 0, 0.25);
                    opacity: 0;
                    transition: opacity ${transitionDuration + 0.3}s ease;
                    transition-delay: ${Math.random() + 0.3}s;
                    pointer-events: none;
                `;

                pixelContainer.appendChild(pixel);
            }
        }

        const showPixels = () => {
            const pixels = pixelContainer.querySelectorAll('.pixel-fade-effect');
            pixels.forEach(pixel => {
                (pixel as HTMLElement).style.opacity = '1';
            });
        };

        const hidePixels = () => {
            const pixels = pixelContainer.querySelectorAll('.pixel-fade-effect');
            pixels.forEach(pixel => {
                (pixel as HTMLElement).style.opacity = '0';
            });
        };

        if (trigger === 'hover') {
            element.addEventListener('mouseenter', showPixels);
            element.addEventListener('mouseleave', hidePixels);

            return () => {
                element.removeEventListener('mouseenter', showPixels);
                element.removeEventListener('mouseleave', hidePixels);
            };
        }

        if (trigger === 'click') {
            let isActive = false;
            const togglePixels = () => {
                isActive = !isActive;
                if (isActive) showPixels();
                if (!isActive) hidePixels();
            };

            element.addEventListener('click', togglePixels);
            return () => element.removeEventListener('click', togglePixels);
        }

        if (trigger === 'always') {
            // Start Hidden
            hidePixels();

            const runCycle = () => {
                // Show Pixels
                showPixels();

                // Hide after showDuration
                const hideTimeoutId = window.setTimeout(() => {
                    hidePixels();
                }, showDuration);
                timeoutRefs.current.push(hideTimeoutId);

                // Start next cycle after showDuration + hideDuration
                const nextCycleTimeoutId = window.setTimeout(() => {
                    runCycle();
                }, showDuration + hideDuration);
                timeoutRefs.current.push(nextCycleTimeoutId);
            };

            // Start the first cycle after initialDelay
            const initialTimeoutId = window.setTimeout(() => {
                runCycle();
            }, initialDelay);
            timeoutRefs.current.push(initialTimeoutId);

            return () => {
                clearAllTimeouts();
            }
        }
    }, [color, pixelSize, transitionDuration, trigger, initialDelay, showDuration, hideDuration]);

    return { elementRef, pixelContainerRef };
};

// -------------------------> INSTRUCTION & EXAMPLES <-------------------------
// 1. Import usePixelatedFade from proper path
// 2. Call the usePixelatedFade function and deconstruct out 'elementRef' & 'pixelContainerRef'
//
// Example...
//  const { elementRef, pixelContainerRef } = 
//      usePixelatedFade( pixelatedFadeOptions.enabled ? { animationConfigs } : undefined );
//
// 3. In your component create a div inside the 'wall' you want to pixelate and set the ref to 'pixelContainerRef'
//    and set the ref in the parent element to 'elementRef'
//
// <div 
//   className="face front" 
//   ref={pixelatedFadeOptions.enabled ? elementRef : null}
// >
//   {pixelatedFadeOptions.enabled && (
//     <div
//       ref={pixelContainerRef}
//     />
//   )}
// </div>
// <-------------------------------------------------------------------------->