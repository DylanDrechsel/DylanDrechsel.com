import { useEffect, useRef } from 'react';
import './StaticAnimation.scss';

interface StaticAnimationProps {
    onAnimationComplete?: () => void;
}

const generateStatic = (
    ctx: CanvasRenderingContext2D,      // ctx is a 2D rendering context
    width: number, 
    height: number, 
    intensity: number
): void => {
    const imageData = ctx.createImageData(width, height);
    // This is a flat array where every 4 numbers represent one pixel:
    // [ Red, Green, Blue, Alpha, Red, Green, Blue, Alpha ]
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        // Generate a random grayscale value based on intensity
        // Since all channels are being set to basically the same
        // number the returning color will always be some form of grey
        const value = Math.floor(Math.random() * 256 * intensity);
        data[i] = value;     // Red
        data[i + 1] = value; // Green
        data[i + 2] = value; // Blue
        data[i + 3] = 255;   // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
};

const drawCRTEffect = (
    canvas: HTMLCanvasElement,          // canvas is an HTMLCanvasElement
    ctx: CanvasRenderingContext2D,     // ctx is a 2D rendering context
    callback: () => void              // callback is a function that returns nothing
): void => {
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;

    const startTime = Date.now();
    const duration = 800;

    const animate = () => {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Progress of CRT effect (0 to 1)

        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, width, height);

        // Draw different stages of the effect based on progress
        if (progress < 0.2) {
            // Stage 1: Green dot in center expanding
            const dotProgress = progress / 0.2;
            const dotSize = 10 + 20 * dotProgress;
            ctx.fillStyle = '#00ff00';
            ctx.beginPath();
            // Arguments: (x-coordinate, y-coordinate, radius, startAngle, endAngle)
            ctx.arc(centerX, centerY, dotSize, 0, Math.PI * 2);
            ctx.fill();
        } else if (progress < 0.4) {
            // Stage 2: Horizontal line expanding from center
            const lineProgress = (progress - 0.2) / 0.2;
            const lineWidth = width * lineProgress;
            ctx.fillStyle = '#00ff00';
            ctx.fillRect(                // ---------> fillRect Arguments <---------
                centerX - lineWidth / 2, // Start X: center minus half the line width to keep it centered
                centerY - 2,             // Start Y: slightly above center for vertical alignment
                lineWidth,               // Width of the rectangle (the line)
                4                        // Height of the rectangle (the line thickness)
            );
        } else if (progress < 0.6) {
            // Stage 3: Horizontal line splits into two moving vertically
            const splitProgress = (progress - 0.4) / 0.2;
            const topY = centerY - splitProgress * centerY;
            const bottomY = centerY + splitProgress * centerY;

            ctx.fillStyle = '#00ff00';
            // Draw the top line
            ctx.fillRect(
                centerX - width / 2, // Start X: left edge of the screen
                topY - 2,            // Start Y: calculated position
                width,               // Width: full screen width
                4                    // Height: line thickness
            );
            // Draw the bottom line
            ctx.fillRect(
                centerX - width / 2, // Start X: left edge of the screen
                bottomY - 2,         // Start Y: calculated position
                width,               // Width: full screen width
                4                    // Height: line thickness
            );
        } else if (progress < 0.8) {
            // Stage 4: Lines fade out with slight static
            const fadeProgress = (progress - 0.6) / 0.2;
            const alpha = 1 - fadeProgress;

            // Draw static background, increasing intensity
            generateStatic(ctx, width, height, fadeProgress * 0.01);

            // Draw fading lines (using fixed positions for simplicity after splitting)
            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;
            ctx.fillRect(0, 0, width, 4); // Top line position
            ctx.fillRect(0, height, width, 4); // Bottom line position
        } else {
            // Stage 5: Full static
            const staticProgress = (progress - 0.8) / 0.2; 
            generateStatic(ctx, width, height, staticProgress);
        }

        // Continue animation if not finished, otherwise call the callback
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            callback();
        }
    };

    animate();
};

const StaticAnimation = ({ onAnimationComplete }: StaticAnimationProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const animationFrameIdRef = useRef<number | null>(null); // Ref to store requestAnimationFrame ID

    useEffect(() => {
        const canvas = canvasRef.current;
        const overlay = overlayRef.current;

        if (!canvas || !overlay) {
            return;
        }

        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Could not get 2D rendering context');
            return;
        }

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Redraw static if needed after resize
            // generateStatic(ctx, canvas.width, canvas.height, 0.05); // Example: redraw minimal static
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        drawCRTEffect(canvas, ctx, () => {
            // After CRT effect completes, start static animation fade-out
            let startTime = Date.now();
            const staticFadeDuration = 1750;
            const contentShowDelay = 500;   // Delay before signaling parent to show content

            // ------------> Signal parent to show content earlier <------------
            // Call onAnimationComplete after a delay to allow overlapping fade
            const showContentTimeoutId = setTimeout(() => {
                if (onAnimationComplete) {
                    onAnimationComplete();
                }
            }, contentShowDelay);

            const animateStatic = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / staticFadeDuration, 1); // Progress of static fade (0 to 1)

                // Calculate intensity based on progress (fades from 1 down to a small value)
                let intensity = 1 - progress * 0.95;
                if (intensity < 0) {
                    intensity = 0;
                }

                generateStatic(ctx, canvas.width, canvas.height, intensity);

                // Add slight random flicker effect
                if (Math.random() < 0.01) { // 1% chance each frame
                    ctx.fillStyle = `rgba(0, 0, 0, ${0.1 + Math.random() * 0.2})`; // Draw a semi-transparent black rectangle
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }

                // Continue animation if intensity is still significant
                if (intensity > 0.00) {
                    animationFrameIdRef.current = requestAnimationFrame(animateStatic);
                } else {
                    // Static is gone, now fully hide the overlay element
                    // Use a small timeout to ensure the CSS opacity transition finishes
                    // before the component might be unmounted by the parent.
                    // This timeout is separate from the showContentTimeoutId above.
                    setTimeout(() => {
                        if (overlayRef.current) {
                            overlayRef.current.style.display = 'none';
                        }

                        if (animationFrameIdRef.current !== null) {
                            cancelAnimationFrame(animationFrameIdRef.current);
                        }
                    }, 1000); // Match the CSS transition duration
                }
            };

            startTime = Date.now(); // Reset start time for the static fade
            animateStatic();

            // --- Cleanup Function for this specific callback scope ---
            // This ensures the showContentTimeoutId is cleared if the component unmounts
            // before the timeout finishes.
            return () => {
                clearTimeout(showContentTimeoutId);
            };
        });

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationFrameIdRef.current !== null) {
                 cancelAnimationFrame(animationFrameIdRef.current);
            }
        };

    }, []);

    return (
        <div className="static-animation-container">
            <div ref={overlayRef} className="tv-overlay">
                <canvas id="staticCanvas" ref={canvasRef}></canvas>
            </div>

            <div className="scanlines"></div>
        </div>
    );
}

export default StaticAnimation;