import React, { useEffect, useRef } from 'react';
import './EyeOfSauron.scss';

interface Particle {
  x: number;
  y: number;
  xStep: number;
  yStep: number;
  minTravelDistance: number;
  maxTravelDistance: number;
};

interface Position {
  x: number;
  y: number;
};

interface RGBColorRange {
  startRedColor: number;
  endRedColor: number;
  startGreenColor: number;
  endGreenColor: number;
  startBlueColor: number;
  endBlueColor: number;
};

interface DistanceRange {
  startDistance: number;
  endDistance: number;
};

const EyeOfSauron: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  
  // Animation configuration
  const config = {
    canvasSize: 850,
    numberOfParticles: 150,
    particleAnimationSteps: 300,
    pupilRadius: { x: 20, y: 144 },
    outerEyeRadius: { x: 400, y: 220 },
    trackingSpeed: 0.1,
    maxPupilOffset: 200,
  };

  const stateRef = useRef({
    particles: [] as Particle[],
    mousePosition: { x: config?.canvasSize / 2, y: config?.canvasSize / 2 },
    pupilPosition: { x: 0, y: 0 },
  });

  const centerCoordinate = (value: number): number => value + config?.canvasSize / 2;

  const interpolateColorComponent = (colorRange: RGBColorRange, distanceRange: DistanceRange, currentValue: number) => {
    const interpolatedValue = currentValue - distanceRange.startDistance;
    const totalDistance = distanceRange.endDistance - distanceRange.startDistance;
    
    // Calculate slopes for each color component
    const redSlope = (colorRange.endRedColor - colorRange.startRedColor) / totalDistance;
    const greenSlope = (colorRange.endGreenColor - colorRange.startGreenColor) / totalDistance;
    const blueSlope = (colorRange.endBlueColor - colorRange.startBlueColor) / totalDistance;
    
    // Calculate interpolated RGB values
    const red = Math.round(colorRange.startRedColor + interpolatedValue * redSlope);
    const green = Math.round(colorRange.startGreenColor + interpolatedValue * greenSlope);
    const blue = Math.round(colorRange.startBlueColor + interpolatedValue * blueSlope);
    
    return { red, green, blue };
  };

  const getParticleColorComponent = (travelPercent: number) => {
    if (travelPercent < 2) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 255, endGreenColor: 200,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 0, endDistance: 2 }, 
      travelPercent
    );
    else if (travelPercent < 5) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 200, endGreenColor: 100,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 2, endDistance: 5 }, 
      travelPercent
    );
    else if (travelPercent < 10) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 100, endGreenColor: 20,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 5, endDistance: 10 }, 
      travelPercent
    );
    else if (travelPercent < 15) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 20, endGreenColor: 0,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 10, endDistance: 15 }, 
      travelPercent
    );
    else if (travelPercent < 20) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 0, endGreenColor: 0,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 15, endDistance: 20 }, 
      travelPercent
    );
    else if (travelPercent < 25) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 0, endGreenColor: 0,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 20, endDistance: 25 }, 
      travelPercent
    );
    else if (travelPercent < 30) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 0, endGreenColor: 10,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 25, endDistance: 30 }, 
      travelPercent
    );
    else if (travelPercent < 35) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 10, endGreenColor: 20,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 30, endDistance: 35 }, 
      travelPercent
    );
    else if (travelPercent < 40) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 20, endGreenColor: 30,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 35, endDistance: 40 }, 
      travelPercent
    );
    else if (travelPercent < 45) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 30, endGreenColor: 40,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 40, endDistance: 45 }, 
      travelPercent
    );
    else if (travelPercent < 50) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 40, endGreenColor: 50,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 45, endDistance: 50 }, 
      travelPercent
    );
    else if (travelPercent < 55) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 50, endGreenColor: 60,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 50, endDistance: 55 }, 
      travelPercent
    );
    else if (travelPercent < 60) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 60, endGreenColor: 70,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 55, endDistance: 60 }, 
      travelPercent
    );
    else if (travelPercent < 65) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 70, endGreenColor: 80,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 60, endDistance: 65 }, 
      travelPercent
    );
    else if (travelPercent < 70) return interpolateColorComponent(
      { 
        startRedColor: 149, endRedColor: 149,
        startGreenColor: 6, endGreenColor: 6,
        startBlueColor: 6, endBlueColor: 6
      }, 
      { startDistance: 65, endDistance: 70 }, 
      travelPercent
    );
    else if (travelPercent < 75) return interpolateColorComponent(
      { 
        startRedColor: 255, endRedColor: 255,
        startGreenColor: 90, endGreenColor: 100,
        startBlueColor: 0, endBlueColor: 0
      }, 
      { startDistance: 70, endDistance: 75 }, 
      travelPercent
    );
    else if (travelPercent < 80) return interpolateColorComponent(
      { 
        startRedColor: 149, endRedColor: 149,
        startGreenColor: 6, endGreenColor: 6,
        startBlueColor: 6, endBlueColor: 6
      }, 
      { startDistance: 75, endDistance: 80 }, 
      travelPercent
    );
    else if (travelPercent < 85) return interpolateColorComponent(
      { 
        startRedColor: 149, endRedColor: 149,
        startGreenColor: 6, endGreenColor: 6,
        startBlueColor: 6, endBlueColor: 6
      }, 
      { startDistance: 80, endDistance: 85 }, 
      travelPercent
    );
    else if (travelPercent < 90) return interpolateColorComponent(
      { 
        startRedColor: 149, endRedColor: 149,
        startGreenColor: 6, endGreenColor: 6,
        startBlueColor: 6, endBlueColor: 6
      }, 
      { startDistance: 85, endDistance: 90 }, 
      travelPercent
    );
    else if (travelPercent < 95) return interpolateColorComponent(
      { 
        startRedColor: 149, endRedColor: 149,
        startGreenColor: 6, endGreenColor: 6,
        startBlueColor: 6, endBlueColor: 6
      }, 
      { startDistance: 90, endDistance: 95 }, 
      travelPercent
    );
    else return interpolateColorComponent(
      { 
        startRedColor: 149, endRedColor: 149,
        startGreenColor: 6, endGreenColor: 6,
        startBlueColor: 6, endBlueColor: 6
      }, 
      { startDistance: 95, endDistance: 100 }, 
      travelPercent
    );
  };

  const calculateDistance = (x: number, y: number): number => Math.sqrt(x * x + y * y);

  const removeExpiredParticle = (currentRadius: number, maxRadius: number, particleIndex: number): void => {
    if (currentRadius > maxRadius) {
      stateRef?.current?.particles?.splice(particleIndex, 1);
    }
  };

  const drawParticlePixel = (x: number, y: number, rgbColor: { red: number; green: number; blue: number }, opacity: number): void => {
    if (!contextRef?.current) return;
    contextRef.current.fillStyle = `rgba(${rgbColor.red},${rgbColor.green},${rgbColor.blue},${opacity})`;
    contextRef?.current?.fillRect(centerCoordinate(x), centerCoordinate(y), 1, 1);
  };

  const updateParticleStyle = (particle: Particle, particleIndex: number): void => {
    const currentRadius = calculateDistance(particle?.x, particle?.y);
    const travelPercent = (currentRadius - particle?.minTravelDistance) / (particle?.maxTravelDistance - particle?.minTravelDistance) * 100;
    const rgbColor = getParticleColorComponent(travelPercent);
    
    // Stop drawing particles when they're close to expiring to prevent artifacts
    if (travelPercent < 90) {
        const opacity = travelPercent > 85 ? 0.001 : 1;
        drawParticlePixel(particle.x, particle.y, rgbColor, opacity);
    }

    removeExpiredParticle(currentRadius, particle?.maxTravelDistance, particleIndex);
  };

  const animateParticle = (particleIndex: number): void => {
    const particle = stateRef?.current?.particles[particleIndex];
    particle.x += particle?.xStep;
    particle.y += particle?.yStep;
    updateParticleStyle(particle, particleIndex);
  };

  const drawPupil = (): void => {
    if (!contextRef?.current) return;
    
    const pupilCenterX = centerCoordinate(stateRef?.current?.pupilPosition?.x);
    const pupilCenterY = centerCoordinate(stateRef?.current?.pupilPosition?.y);

    contextRef.current.fillStyle = 'rgba(0, 0, 0, 1)';
    contextRef?.current?.beginPath();

    const pupilWidth = config?.pupilRadius.x;
    const pupilHeight = config?.pupilRadius.y;

    const topPointY = pupilCenterY - pupilHeight;
    const bottomPointY = pupilCenterY + pupilHeight;
    const startWidenY = pupilCenterY - (pupilHeight * 0.35);
    const endWidenY = pupilCenterY + (pupilHeight * 0.35);
    const controlPointWidthOffset = pupilWidth * 0.3;
    const controlPointHeightOffset = pupilHeight * 0.05;

    contextRef?.current?.moveTo(pupilCenterX, topPointY);

    contextRef?.current?.bezierCurveTo(
      pupilCenterX - controlPointWidthOffset, topPointY + controlPointHeightOffset,
      pupilCenterX - pupilWidth, startWidenY,
      pupilCenterX - pupilWidth, startWidenY
    );

    contextRef?.current?.lineTo(pupilCenterX - pupilWidth, endWidenY);

    contextRef?.current?.bezierCurveTo(
      pupilCenterX - pupilWidth, endWidenY + controlPointHeightOffset,
      pupilCenterX - controlPointWidthOffset, bottomPointY - controlPointHeightOffset,
      pupilCenterX, bottomPointY
    );

    contextRef?.current?.bezierCurveTo(
      pupilCenterX + controlPointWidthOffset, bottomPointY - controlPointHeightOffset,
      pupilCenterX + pupilWidth, endWidenY + controlPointHeightOffset,
      pupilCenterX + pupilWidth, endWidenY
    );

    contextRef?.current?.lineTo(pupilCenterX + pupilWidth, startWidenY);

    contextRef?.current?.bezierCurveTo(
      pupilCenterX + pupilWidth, startWidenY - controlPointHeightOffset,
      pupilCenterX + controlPointWidthOffset, topPointY + controlPointHeightOffset,
      pupilCenterX, topPointY
    );

    contextRef?.current.closePath();
    contextRef?.current.fill();
  };

  const updatePupilPosition = (): void => {
    const canvasCenter = config?.canvasSize / 2;
    const mouseOffsetX = stateRef?.current?.mousePosition?.x - canvasCenter;
    const mouseOffsetY = stateRef?.current?.mousePosition?.y - canvasCenter;
    
    const distanceFromCenter = Math.min(
      calculateDistance(mouseOffsetX, mouseOffsetY), 
      config?.maxPupilOffset
    );
    
    const mouseAngle = Math.atan2(mouseOffsetY, mouseOffsetX);
    stateRef.current.pupilPosition.x = Math.cos(mouseAngle) * distanceFromCenter * config?.trackingSpeed;
    stateRef.current.pupilPosition.y = Math.sin(mouseAngle) * distanceFromCenter * config?.trackingSpeed;
  };

  const generateRandomOffset = (baseValue: number): number => Math.random() * baseValue * 4 - (baseValue * 4) / 2;

  const getParticleTravelDistances = (startPosition: Position, endPosition: Position) => ({
    maxTravelDistance: calculateDistance(endPosition?.x, endPosition?.y),
    minTravelDistance: calculateDistance(startPosition?.x, startPosition?.y)
  });

  const calculateParticleMovementStep = (startPosition: Position, endPosition: Position) => ({
    x: (endPosition?.x - startPosition?.x) / config?.particleAnimationSteps,
    y: (endPosition?.y - startPosition?.y) / config?.particleAnimationSteps
  });

  const getParticleStartPosition = (angle: number, noiseAmount: number): Position => ({
    x: config.pupilRadius.x * Math.cos(angle) + generateRandomOffset(noiseAmount) + stateRef?.current?.pupilPosition?.x,
    y: config.pupilRadius.y * Math.sin(angle) + generateRandomOffset(noiseAmount) + stateRef?.current?.pupilPosition?.y
  });

  const getParticleEndPosition = (angle: number, noiseAmount: number): Position => ({
    x: config.outerEyeRadius.x * Math.cos(angle) + generateRandomOffset(noiseAmount),
    y: config.outerEyeRadius.y * Math.sin(angle) + generateRandomOffset(noiseAmount)
  });;

  const createParticle = (): void => {
    const randomAngle = Math.random() * 2 * Math.PI;
    const startPosition = getParticleStartPosition(randomAngle, 5);
    const endPosition = getParticleEndPosition(randomAngle, 25);
    const travelDistances = getParticleTravelDistances(startPosition, endPosition);
    const movementStep = calculateParticleMovementStep(startPosition, endPosition);

    stateRef.current.particles.push({
      x: startPosition?.x,
      y: startPosition?.y,
      xStep: movementStep?.x,
      yStep: movementStep?.y,
      minTravelDistance: travelDistances?.minTravelDistance,
      maxTravelDistance: travelDistances?.maxTravelDistance
    });
  };

  const clearCanvas = (alpha: number): void => {
    if (!contextRef?.current) return;
    contextRef.current.fillStyle = `rgba(0,0,0,${alpha})`;
    contextRef?.current?.fillRect(0, 0, config?.canvasSize, config?.canvasSize);
  };

  const updateAnimationFrame = (): void => {
    clearCanvas(0.032);
    
    updatePupilPosition();
    
    for (let i = 0; i < config?.numberOfParticles; i++) {
      createParticle();
    }
    
    for (let particleIndex = 0; particleIndex < stateRef?.current?.particles?.length; particleIndex++) {
      animateParticle(particleIndex);
    }
    
    drawPupil();
  };

  const startAnimationLoop = (): void => {
    updateAnimationFrame();
    animationFrameRef.current = requestAnimationFrame(startAnimationLoop);
  };

  const trackMouse = (event: MouseEvent): void => {
    if (!canvasRef?.current) return;
    const canvasRect = canvasRef?.current?.getBoundingClientRect();
    stateRef.current.mousePosition.x = event?.clientX - canvasRect?.left;
    stateRef.current.mousePosition.y = event?.clientY - canvasRect?.top;
  };

  const initializeAnimation = (): void => {
    clearCanvas(1);
    for (let i = 0; i < config?.numberOfParticles; i++) {
      createParticle();
    }
    startAnimationLoop();
  };

  useEffect(() => {
    const canvas = canvasRef?.current;
    if (!canvas) return;

    canvas.width = config?.canvasSize;
    canvas.height = config?.canvasSize;
    contextRef.current = canvas?.getContext('2d');

    window.addEventListener('mousemove', trackMouse);
    initializeAnimation();

    return () => {
      window.removeEventListener('mousemove', trackMouse);
      if (animationFrameRef?.current) {
        cancelAnimationFrame(animationFrameRef?.current);
      }
    };
  });

  return (
    <div>
      <canvas 
        ref={canvasRef}
        id="eyeOfSauron"
      />
    </div>
  );
};

export default EyeOfSauron;